import { addToAll, addById } from './utils'
import { call, put, take, select } from 'redux-saga/effects'
import { findById, persist } from '../sagas/pouch'
import { subscribe as subscribeSaga} from '../sagas/subscription'
import * as selectors from '../sagas/selectors'
import { ucFirst, singularise } from '../../helpers/utils'

export const makeReducers = ( entityName ) => {
  const reducers = {}

  reducers[entityName.toUpperCase() + '_RECEIVE'] = (state = {}, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      all: addToAll(state, action),
      byId: addById(state, action)
    })
  }

  reducers[entityName.toUpperCase() + '_RECEIVE_ERROR'] = (state = {}, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      error: action.err
    })
  }

  reducers[entityName.toUpperCase() + '_REMOVE'] = (state = {}, action) => {
    return Object.assign({}, state, {
      isFetching: false,
      all: state.all.filter(doc => {
        return doc._id !== action.doc._id
      }),
      byId: innerState => {
        delete innerState.byId[action.doc._id]
        return innerState.byId
      }
    })
  }

  return reducers
}

export const reducer = ( entityName ) => {
  const reducers = makeReducers(entityName)

  // Reducer
  return (state = {all: [], byId: {}}, action) => {
    if (reducers[action.type]) {
      return reducers[action.type](state, action)
    }
    return state // default
  }
}

const typeList = ['ADD', 'DEL', 'RECEIVE', 'REMOVE', 'REQUEST', 'requestError', 'receiveError']

export const actions = ( entityName ) => {
  const defaultActions = typeList.reduce((acc, type) => {
    acc[type.toLowerCase()] = (jsonInstance) => {
      return {
        type: types(entityName)[type.toLowerCase()],
        doc: jsonInstance
      }
    }
    return acc
  }, {})

  // overwrite the request actions - they're a little different to the others.
  defaultActions.request = ( id ) => {
    console.log(types(entityName).request)
    // debugger
    return {
      type: types(entityName).request,
      id: id
    }
  }

  defaultActions.requestError = ( error ) => {
    return {
      type: types(entityName).requestError,
      err: error
    }
  }

  defaultActions.receiveError = ( error ) => {
    return {
      type: types(entityName).receiveError,
      err: error
    }
  }

  defaultActions.receive = ( payload ) => {
    if (payload) {
      if (Array.isArray(payload)) {
        return {
          type: types(entityName).receive,
          payload: payload
        }
      }
      return {
        type: types(entityName).receive,
        doc: payload
      }
    }
    console.log('No payload receiving', entityName, payload)
  }

  return defaultActions
}

export const types = ( entityName ) => {
  return typeList.reduce((acc, type) => {
    acc[type.toLowerCase()] = entityName.toUpperCase() + '_' + type
    return acc
  }, {})
}

export const loadSaga = ( entityName, subscribe, dependents ) => {
  const entityActions = actions(singularise(entityName))
  const entityTypes = types(singularise(entityName))
  
  function requestDependent(d, record) {
    if (typeof record == "object" && record._id) {
      console.log('putting based on _id', record._id)
      return put(actions(singularise(d)).request(record._id))
    }
    console.log('putting record', record)
    return put(actions(singularise(d)).request(record))
  }

  function processRecord(entity) {
    console.log('Entity', entity)
    return dependents.map(d => {
      console.log('Entity[d]', entity[d])
      if(typeof entity[d] == "object" && entity[d].length > 0) { //It's an array..
        return entity[d].map(record => requestDependent(d, record))
      }
      else {
        return requestDependent(d, entity[d])
      }
    })
  }

  function* receive() {
    // If we receive an entity, and it has dependents that we should load, do that here.
    // We can't do this in the context of a 'request' because the bulkLoad system 
    // circumvents the request mechanism. This means that worklists (for example) would
    // never get their dependents loaded.
    while (true) {
      const entity = yield take(entityTypes.receive)
      try {
        if (dependents) { // <= is an Array
          // request each dependent record
          console.log('dependents found for', entityName, dependents, typeof dependents)
          if(entity.payload) {
            yield entity.payload.map(processRecord)
          }
          else yield processRecord(entity.doc)
        }
      }
      catch (err) {
        yield put(entityActions.receiveerror(err))
      }
    }
  }





  function* request() {
    while (true) {
      const { id } = yield take(entityTypes.request)
      try {
        // Check if there's an entry in state
        // If there is, just finish up.
        // We'll trust replication to keep it as up to date as possible
        console.log('LOADSAGA - REQUEST FOR', entityName, id)
        
        const reduxEntity = yield select(selectors['get' + ucFirst(entityName) + 's']) //selectors are plural
        if (reduxEntity.byId[id]) {
          console.log('FOUND', id, 'in Redux already')
          return reduxEntity.byId[id]
        }
        // if we didn't find it in redux already, look in pouch, and then couch through findById
        const pouch = yield select(selectors.getPouch)
        console.log('Loadsaga findById', id)
        const found = yield call(findById, {id: id}, pouch)
        console.log('LOADSAGA FindByID Found', id, found)
        if (found) {
          yield put(entityActions.receive(found)) // Load it into redux
          // yield call(persist, found) //Store the record in pouch (not really needed if it's
          // already there, but it won't do any harm)
          //- otherwise it'll disappear when we reload
  //SUBSCRIPTION NEEDS LOVE!
          // if (subscribe) { // Is this a record we need to subscribe to?
          //   yield call(subscribeSaga, {id: found._id, type: entityName})
          // }
          return found
        }
        // Wait - what if it's not found? Shall we just not care?
        // Not much we can do. We had the id. The doc wasn't in pouch,
        // AND it wasn't in couch (or we weren't connected). No idea where the id came from!
        console.log('LOADSAGA FAILED TO FIND', entityName, id)
      } 
      catch (err) {
        yield put(entityActions.requesterror(err))
      }
    }
  }
  return [request, receive]
}
