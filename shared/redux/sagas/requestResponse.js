import { call, put, select } from 'redux-saga/effects'
import { getPouch, getResponses } from './selectors'
import { actions } from '../helpers/pouch'
import { findById } from './pouch'

const responseActions = actions('response')

export function* requestResponseSaga(id) {
  console.log('requestResponseSaga', id)
  const pouch = yield select(getPouch)
  const responses = yield select(getResponses)
// console.log('RESPONSES', responses)
  if (!responses.byId[id]) {
    const response = yield call(findById, {id: id}, pouch)
    console.log('Found a response', response)
    yield put(responseActions.receive(response))
  }
}