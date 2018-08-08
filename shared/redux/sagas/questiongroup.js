import { all, call, put, select } from 'redux-saga/effects' // , put, select , fork
import { actions } from '../helpers/pouch'
import { findInBulk } from './pouch'
import { getQuestiongroups } from './selectors'
import questionSaga from './question'

const questiongroupActions = actions('questiongroup')
// const getQuestion = (question) => {
//   // Then load all the questions (and trickle down)
//   fork(questionSaga(question))
// }

export default function* questiongroupSaga(params) {
  // console.log('questiongroupSaga', id);
  try {
    // Check if there's an entry in state.questiongroups[questiongroupId]
    // If there is, just finish up.
    // If not, pouch.findById, and QUESTIONGROUP_RECEIVE
    const questiongroups = yield select(getQuestiongroups)
    // console.log(questiongroups);
    if (!questiongroups.byId[params.id]) {
      const questiongroup = yield call(findInBulk, {id: params.id, bulkDoc: params.bulkDocs.questiongroups})
      if (questiongroup && questiongroup.questions) {
        console.log('questiongroup has questions')
        yield all(questiongroup.questions.map((questionId) => call(questionSaga, {id: questionId, bulkDocs: params.bulkDocs})))
      }
      if(!questiongroup) console.log('No questiongroup found: ', params.id)
      yield put(questiongroupActions.RECEIVE(questiongroup))
    }
  } catch (err) {
    yield put(questiongroupActions.requestError(err))
  }
}
