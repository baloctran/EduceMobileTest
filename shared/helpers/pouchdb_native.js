import PouchDB from 'pouchdb-react-native'
import pouchdbFind from 'pouchdb-find'
import { store } from '../redux/store'
import { actions } from '../redux/modules/pouch'
// import ip from './api'
import { logIt } from '../redux/helpers/utils'

PouchDB.plugin(pouchdbFind)

class pdb {
  constructor(){
    this.options = {
      localName: 'hlx', 
      remoteName: 'hx', 
      // remoteHost: 'http://45.124.85.209:9000/d/'
      remoteHost: 'https://vps.educe.nz/d/'
      // For LOCAL development, where /api is running on port 9000 use the following example
      // remoteHost: 'http://192.168.1.10:9000/d/'
    }
    this.localDB = new PouchDB(this.options.localName)
  }
  
  addIndexes() {
    return this.localDB.createIndex({index: {fields: ['class']}})
    .then(logIt)
    .then(()=>console.log('INDEXCREATED'))
  }

  connectToRemote(token) {
    // We only connect to remote once we're logged in, and on the client side.
    // So we don't want to call this automatically, or we'll blow up the server.
    // Except for that one summary generation route
    console.log('CONNNECTING TO COUCH', this.options.remoteHost + this.options.remoteName)
    let authHeader
    if (token) {
      authHeader = {Authorization: 'Bearer ' + token}
    }
    this.remoteDB = new PouchDB(this.options.remoteHost + this.options.remoteName, {ajax: {headers: authHeader}})
    if(!this._sync) {
      this._sync = PouchDB.sync(this.localDB, this.remoteDB, {live: true, retry: true})
      .on('change', notification => {
        console.log('POUCHDB LOCAL CHANGE NOTIFICATION', notification)
        notification.change.docs.map(doc =>{
          store.dispatch(actions.receive(doc))
        })
      })
      .on('error', error => console.error('Sync Error', error))
      .on('paused', info => console.log('Sync paused', info))
    }
  }

  async getAllLocal() {
    console.log('LOCALDB', this.localDB)
    try{
      const allDocs = await this.localDB.allDocs()
      console.log('LOCALDOCS', JSON.stringify(allDocs))
      return allDocs
    }
    catch (err) {
      console.log('Something is broken', err)
      return false
    }
  }

  async getAllRemote() {
    const allDocs = await this.remoteDB.allDocs()
    console.log('REMOTEDOCS', JSON.stringify(allDocs))
    return allDocs
  }

  save(doc) {
    const {docs, ...d} = doc // Strip 'docs' property before persisting
    return this.localDB.put(d)
  }

  search(pouchSearch) {
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
  
export default new pdb() //only makes the one, no matter how many times it's imported : singleton hack.
// Actually, we'll throw it into redux, so it _should_ only be called once anyway since
// all the pouch touching things go through redux.