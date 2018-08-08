/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux'
import { reducer as auth } from './modules/auth'
import { reducer as active } from './modules/active'
import { reducer as identity } from './modules/identity'
import { reducer as context } from './modules/context'
import { reducer as pouchReducer } from './helpers/pouch'
import { reducer as responses } from './modules/response'
import { reducer as search } from './modules/search'
import { reducer as pouch } from './modules/pouch'

export default combineReducers({
  active: active,
  auth: auth,
  answers: pouchReducer('answer'),
  context: context,
  identity: identity,
  interventions: pouchReducer('intervention'),
  outputs: pouchReducer('output'),
  patients: pouchReducer('patient'),
  procedures: pouchReducer('procedure'),
  questiongroups: pouchReducer('questiongroup'),
  questions: pouchReducer('question'),
  responses: responses,
  search: search,
  subscription: pouchReducer('subscription'),
  templates: pouchReducer('template'),
  worklists: pouchReducer('worklist'),
  pouch: pouch,
})
