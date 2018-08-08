import { select, call, put } from 'redux-saga/effects'
import { findById } from './pouch'
import { getSubscription, getIdentity, getPouch } from './selectors'
import { persist } from './pouch'
import moment from 'moment'
import { actions } from '../helpers/pouch'
// import {save} from 'educePouch'

export function* subscribe({id, type}) {
  const subs = yield select(getSubscription)
  const pouch = yield select(getPouch)
  const identity = yield select(getIdentity)
  const subscriptionId = identity._id + '_subs'
  console.log('subscriptionSaga subscriptionId', subscriptionId)
  let subscription
  if (!subs.byId[subscriptionId]) {
    // We haven't loaded the subs record into redux yet.. better sort that out!
    subscription = yield call(findById, {id: subscriptionId}, pouch)
    yield put(actions('subscription').receive(subscription))
  }
  else {
    subscription = subs.byId[subscriptionId]
  }
  console.log('subscriptionSaga', subscription)
  if (subscription[type].filter((sub) => sub.id === id).length === 0) { // The record isn't already subscribed to
    const newSubs = {...subs, [type]: [...subs[type], {id: id, added: moment().utc().format()}]} // UTC ISO8601 format
    yield call(persist, newSubs)
  }
}
