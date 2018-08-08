import PouchDB from 'pouchdb-react-native'
import { actions as pouchActions } from '/shared/redux/modules/pouch'

let pouchdb

export default async function getPouchDB() {
  return new Promise(resolve=>{
    if(!pouchdb) pouchdb = new pouch({localName: 'hlx', remoteName: 'hx', remoteHost: env.config.couchdbUrl, storage: {}}) //use storage defaults for web
    resolve('pouchdb')
  })
}

class pouch {
  constructor (options) {
    if(options.storage.adapter) PouchDB.plugin(options.storage.adapter)
    this.onChange = options.onChange
    this.localName = options.localName || 'hlx'
    this.remoteName = options.remoteName || 'hx'
    // this.remoteHost = options.remoteHost || 'http://192.168.1.15:9000/api/d/'
    this.remoteHost = options.remoteHost || 'http://vps.educe.nz/api/d/'
    this.localDB = new PouchDB(this.localName)
    this.remoteDB = new PouchDB(this.remoteHost + this.remoteName)
    this.replicateFromRemote = {}
    this.replicateToRemote = {}
  }
  connectToRemote() {
    // We only connect to remote once we're logged in, and on the client side.
    // So we don't want to call this automatically, or we'll blow up the server.
    // Except for that one summary generation route
    console.log('CONNNECTING TO COUCH', this.localDB, this.remoteHost + this.remoteName)

  
    if (!this.replicateFromRemote.state) {
      this.replicateFromRemote = PouchDB.replicate(this.remoteDB, this.localDB, {since: 0, live: true, retry: true})
      console.log('STARTED REPLICATION INBOUND', this.replicateFromRemote)
    }
    if (!this.replicateToRemote.state) {
      this.replicateToRemote = PouchDB.replicate(this.localDB, this.remoteDB, {since: 0, live: true, retry: true})
      console.log('STARTED REPLICATION OUTBOUND', this.replicateToRemote)
    }
  }
  getLocalDB() {
    return this.localDB
  }
  getRemoteDB() {
    return this.remoteDB
  }
  getReplicateToRemote() {
    return this.replicateToRemote
  }
  getReplicateFromRemote() {
    return this.replicateFromRemote
  }

  handleChanges(dispatchReceiveAction) {
    console.log('SETTING UP CHANGES FOR REDUX STORE', this.localDB)
    return this.localDB.changes({
      include_docs: true,
      live: true,
      since: 'now'
    })
    .on('change', change => {
      console.log('POUCHDB LOCAL CHANGE NOTIFICATION', change)
      if (change.doc.class) {
        dispatchReceiveAction(change.doc)
      }
    })
  }
  save(doc) {
    const {docs, ...d} = doc // Strip 'docs' property before persisting
    return localDB.put(d)
  }
  search(pouchSearch) {
    // We're using pouchdb-find on the client side - it's a plugin, and is enabled in /pouch/db.js
    // NOTE - currently all selectors will be AND'd. There is no OR in pouchdb-find.
    if (pouchSearch) {
      return this.localDB.find(pouchSearch)
      .then((results)=>{
        console.log('Pouch results: ', results)
        if(results.docs.length > 0) {
          return {pouch: results}
        }
        return {pouch: []}
      })
    }
    else {
      return Promise.reject('No local search query was provided.')
    }
  }
}
