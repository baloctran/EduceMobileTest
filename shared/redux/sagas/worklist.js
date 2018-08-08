import { take, put, call } from 'redux-saga/effects'
import { types as pouchTypes, actions as pouchActions} from '../helpers/pouch'

const worklistTypes = pouchTypes('worklist')
const worklistActions = pouchActions('worklist')
const interventionActions = pouchActions('intervention')

// We shouldn't need to do this - why are we dealing with worklist.docs (I can't remember!)
export function* receiveWorklistSaga() {
  while (true) {
    const worklist = yield take(worklistTypes.receive)
    try {
      console.log('receiveWorklistSaga', worklist)
      if (worklist.docs) {
        yield worklist.docs.map(requestInterventions)
      }
      else {
        yield call(requestInterventions, worklist)
      }
    }
    catch (err) {worklistActions.requestError(err)}
  }
}

export function* requestInterventions (worklist) {
  // send out a request for each intervention implicated in the worklist to ensure that we have them all loaded.
  // console.log('wklist interventions', worklist.interventions, worklist)
  yield worklist.interventions.map(i => put(interventionActions.request(i._id)))
}

export default [
  receiveWorklistSaga
]
