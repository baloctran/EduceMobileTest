// import pouch from '../../helpers/pouchdb_native'
const debug = false

export const types = {
  addIndex: 'pouchIndexAdd',
  connect: 'pouchConnect',
  connected: 'pouchConnected',
  fail: 'pouchFail'
}

export const actions = {
  receive: (doc) => {
    // console.log('pouch.local says stuff changed', doc)
    if (doc.class) {
      const docType = doc.class.toUpperCase()
      
      if (docType == 'BULK') {
        if(debug) console.log('########################### receiving BULK '+ docType + ' #########################')
        // debugger
        return {
          type: doc.bulkClass.toUpperCase() + '_RECEIVE', 
          docs: doc.docs
        }
      }
      
      if(debug) console.log('########################### receiving ' + doc.deleted?'DEL ':' ' + docType + ' #########################')
      return {
        type: doc.deleted ? docType + '_DEL' : docType + '_RECEIVE',
        doc: doc
      }
    }
    if(debug) console.log('Thats odd. pouch received a doc that did not have a "class"', doc)
    // console.log('########################### IGNORING ' + JSON.stringify(doc) + ' #########################')
    return {}
    // Else it's something that isn't one of our class objects.. lets ignore it for now!
  }
}

export const reducer = (state={}, action) => {
  if (action.type === types.connect) {
    return {
      ...state, 
      Pouch: action.pouch
    }
  }
  return state
}