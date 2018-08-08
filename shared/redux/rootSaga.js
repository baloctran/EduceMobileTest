import {all, call} from 'redux-saga/effects'
import {loadSaga} from './helpers/pouch'

import identity from './sagas/identity'
import {clinical as template} from './sagas/template'
import {clinical as output} from './sagas/output'
import document from './sagas/document'
import response from './sagas/responses'

const allSagas = [
  ...document,
  ...identity,
  ...output, 
  ...response,
  ...template,
  ...loadSaga('worklist', true, ['interventions']),
  ...loadSaga('intervention', true, ['patient']),
  ...loadSaga('patient', true) // no need to look deeper for responses - the response saga is already listening out for patient requests.
]

function* rootSaga () {
  yield all(allSagas.map(call))
}

export default rootSaga