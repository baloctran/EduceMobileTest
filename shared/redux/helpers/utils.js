import moment from 'moment'

export function logIt(it) {
  console.log('LogIt:', it)
  return it
}

export function isBrowser() {
  return !typeof window == "undefined"
}


export function returnIt(it) {
  return it
}

export function catchIt(err) {
  console.log('LogError:', err)
  return err
  // throw err
}

export function debugIt(it) {
  // debugger
  return it
}

export function logError(err) {
  console.log('LogError:', err)
  throw err
}

// Filter

export const matchDay = (d1, d2) => moment(d1).isSame(d2, 'day')

// Sort

export function byProp(prop, reverse = false) {
  return (obj1, obj2) => {
    // Handle cases where the property is undefined. Leaving it in the same position is not useful
    // Instead, we push those ones to the end.
    
    if (!obj1[prop]) return (reverse?-1:1)
    if (!obj2[prop]) return (reverse?1:-1)
    if (obj1[prop] < obj2[prop]) {
      return (reverse?1:-1)
    }
    if (obj1[prop] > obj2[prop]) {
      return (reverse?-1:1)
    }
    return 0
  }
}

// State manipulators

export function addById(state, action) {
  const newStateById = { ...state.byId }
  // console.log('oldStateById', newStateById)
  if (action.doc) {
    newStateById[action.doc._id] = action.doc
  }
  if (action.payload) {
    action.payload.forEach((doc) => {
      newStateById[doc._id] = doc
    })
  }
  // console.log('newStateById', newStateById)
  return newStateById
}

function allify(all, doc) {
  return [
    ...all
    .filter(existingDoc => {
      return existingDoc !== doc._id
    }),
    doc._id
  ]  
}

export function addToAll(state, action) {
  if (action.doc) {
    return allify(state.all, action.doc)
  }

  if (action.payload) {
    return action.payload.reduce((acc, doc)=>{
      return allify(acc, doc)
    }, [...state.all])
  }
}

export function removeById(state, action) {
  const {[action.id]: junk, ...byId} = state.byId
  return byId
}

