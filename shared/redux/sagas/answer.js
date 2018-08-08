import { call, put, select } from 'redux-saga/effects' // , put, select
import { actions } from '../helpers/pouch'
import { findInBulk } from './pouch'
import { getAnswers } from './selectors'

const answerActions = actions('answer')

export default function* loadAnswerSaga(params) {
  try {
    const answers = yield select(getAnswers)
    if (!answers.byId[params.id]) {
      const answer = yield call(findInBulk, {id: params.id, bulkDoc: params.bulkDocs.answers})
      yield put(answerActions.receive(answer))
    }
  } catch (err) {
    yield put(answerActions.requestError(err))
  }
}



