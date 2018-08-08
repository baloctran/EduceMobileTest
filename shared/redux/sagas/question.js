import { all, call, put, select } from 'redux-saga/effects'
import { actions} from '../helpers/pouch'
import { findInBulk } from './pouch'
import { getQuestions } from './selectors'
import answerSaga from './answer'

const questionActions = actions('question')

export default function* loadQuestionSaga(params) {
  try {
    const questions = yield select(getQuestions)
    if (!questions.byId[params.id]) {
      const question = yield call(findInBulk, {id: params.id, bulkDoc: params.bulkDocs.questions})
      if (question.answers) {
        console.log('question has answers')
        yield all(question.answers.map((answerId) => call(answerSaga, {id: answerId, bulkDocs: params.bulkDocs})))
      }
      yield put(questionActions.receive(question))
    }
  } catch (err) {
    yield put(questionActions.requestError(err))
  }
}
