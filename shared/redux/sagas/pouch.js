import { call, put, take, select } from 'redux-saga/effects'
// import { connect, local, remote } from 'educePouch'
import { types as pouchTypes, actions as pouchActions } from '../modules/pouch'
import { actions } from '../helpers/pouch'
import { actions as searchActions } from '../modules/search'
// import { actions as pouchActions } from '../modules/pouch'
import { getIdentity, getPouch } from './selectors'
// import { types, actions } from '../helpers/pouch'
import {logIt, returnIt, logError, debugIt} from '../helpers/utils'
import pouch from '../../helpers/pouchdb_native'

const { receivePouchSearch, emptyPouchSearch } = searchActions

function localFind(search, pouch) {
  console.log('localFind - search', search)
  return pouch.localDB.find(search)
  .then(logIt)
  // .then(debugIt)
  .then(result => result.docs)
  .catch(logError)
}

function localPut(doc, pouch) {
  return pouch.localDB.put(doc)
}

function allDocs(pouch) {
  return pouch.localDB.allDocs()
}

export function findById(params, pouch) {
  
  console.log('findById', params)
  return pouch.localDB.get(params.id)
  .then((b)=>{console.log('findById DONE'); return b})
  // .then(debugIt)
  // .then(returnIt)
  .catch((error) => {
    console.log('sagas/pouch#34 ERROR', error)
    // debugger
    if (error.status === 404) {
      return pouch.remoteDB.get(params.id)
      .then(debugIt)
      .then(returnIt)
      .catch((error1) => {
        console.log(error1, pouch.remoteDB, params)
        // Still here? We didn't find that id anywhere. You're out of luck.
        // Don't return anything for now. Because I don't have any sense of clarity
        // around how we should handle that scenario!
        if (error1.status === 404) {
          // console.log('Nothing was Found for id: ' + id, error1)
          const err2 = {message: "id was not found. - it's either bad, or we couldn't connect to the API: "+ params.id}
          throw err2
        }
        throw error1 // It was some other error!
      })
    }
    console.log("We didn't find it locally, and we don't seem to be connected to the API yet")
    // Don't throw anything.. we've handled it.
    // throw error // It was some other error!
  })
}

export function* pouchStart() {
  // local is always connected. We only connect to remote when we're logged in.
  try {
    const identity = yield select(getIdentity)
    if(identity._id){
      console.log('identity verified, connecting to pouch in pouch saga')
      try {
        yield put({type: pouchTypes.connect, pouch: pouch})
        // we might (maybe) need this next line if we use pouchdb-find to find the Worklists
        // yield put({type: pouchTypes.addIndex, indexes: pouch.addIndexes()})
        yield put({type: pouchTypes.connect, pouch: pouch})
        yield put({type: pouchTypes.connected, connected: pouch.connectToRemote(identity.token)})
        yield call(bulkLoad)
      } catch (err) {
        console.log(err)
      }
      //pouch.getAllLocal() // We don't really need to do this - it's not even throwing the records at Redux at this point.
    }
  } catch (err) {
    console.log(err)
    yield put({type: pouchTypes.fail, err: err})
  }
}

export function* search(pouchSearch) {
  // We're using pouchdb-find on the client side - it's a plugin, and is enabled in /pouchDB.js
  // NOTE - currently all selectors will be AND'd. There is no OR in pouchdb-find.
  console.log('pouchSaga.search', pouchSearch)
  const pouch = yield select(getPouch)  
  if (pouchSearch) {
    console.log('POUCH SEARCH', pouchSearch)
    const results = yield call(localFind, pouchSearch, pouch)
    console.log('yield done - pouch results (pouchSaga)', results)
    if (results.length > 0) {
      console.log('search results length>0')
      yield put(receivePouchSearch(results))
    } else {
      console.log('search results length!>0')
      yield put(emptyPouchSearch())
    }
  } else {
    console.log('No local search query was provided.')
    yield put(emptyPouchSearch())
  }
}


export function* persist(doc) {
  const pouch = yield select(getPouch)
  
  // const { doc } = yield take('POUCH_SAVE')
  // console.log('PERSISTING', doc)
  const { dirty, ...persistable } = doc
  const updatedDoc = yield call(localPut, persistable, pouch)
  console.log("PERSISTING RESULT", updatedDoc)
  yield call(pouchActions.receive(updatedDoc)) 
  // Receive the new version - _rev will have changed, and we don't get notified unless the change comes via sync
}

// async function getAllRemote() {
// 

//   const all = await pouch.remoteDB.allDocs()
//   console.log('ALL REMOTE DOCS', all)

// }
export function findInBulk(params) {
  // Bulk docs are auto-synced for all connected users. There's no need to try and get them from remote.
  const hits = params.bulkDoc.docs.filter((doc) =>doc._id === params.id)
  if (hits.length > 0) {
    return hits[0]
  }
}
function* bulkLoad() {
  const pouch = yield select(getPouch)
  console.log('BULKLOAD')
  const bulkQuestiongroups = yield call(findById, {id:'questiongroups'}, pouch)
  if(bulkQuestiongroups) {
    yield put(actions('questiongroup').receive(bulkQuestiongroups.docs))
    // yield put({
      //   'type': 'QUESTIONGROUP_RECEIVE',
      //   'docs': bulkQuestiongroups.docs
      // })
    }
    
    const bulkQuestions = yield call(findById, {id: 'questions'}, pouch)
    if(bulkQuestions) {
      yield put(actions('question').receive(bulkQuestions.docs))
    // yield put({
    //   'type': 'QUESTION_RECEIVE',
    //   'docs': bulkQuestions.docs
    // })
  }

  const bulkAnswers = yield call(findById, {id: 'answers'}, pouch)
  if(bulkAnswers) {
    yield put(actions('answer').receive(bulkAnswers.docs))
  }

  const bulkMedications = yield call(findById, {id: 'medications'}, pouch)
  if(bulkMedications) {
    yield put(actions('answer').receive(bulkMedications.docs))
  }
    
  const bulkProcedures = yield call(findById, {id: 'procedures'}, pouch)
  if(bulkProcedures) {
    yield put(actions('procedure').receive(bulkProcedures.docs))
  }
// pouchdb-find seems to not work. Very frustrating.
  // const worklists = yield call(localFind, {
    //   "selector": {
      //     "class": {
        //       "$eq": "Worklist"
        //     }
        //   }
        // }, pouch)
  // Since 'find' doesn't find, we're going to do it the hard/slow way instead just to make progress.
  const docs = yield call(allDocs, pouch)
  const worklists = docs.rows.reduce((acc, r) => {
    if( r.doc.class==="Worklist") {
      return [...acc, r.doc]
    }
    return acc
  }, [])
  console.log('pouchSaga worklists', worklists)
  if(worklists.length>0) {
    yield put(actions('worklist').receive(worklists))
  }
}