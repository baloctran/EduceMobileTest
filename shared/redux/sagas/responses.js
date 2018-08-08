import moment from 'moment'
import { call, put, select, take, all } from 'redux-saga/effects'
import { getResponses, getPatients, getQuestiongroups, getSearchResults } from './selectors'
import { actions } from '../helpers/pouch'
import { patientResponses as patientResponseSearch } from './search'
const responseActions = actions('response')
import { types as patientTypes } from '../modules/patient'

import uuid from 'uuid'

export function* loadResponsesForPatient(id) {
  while (true) {
    const { id } = yield take(patientTypes.request)
    try {
      // Hit up pouchdb and elasticsearch for
      // all the existing responses for this patient
      // these will end up in the 'search' redux module
      yield call(patientResponseSearch, id)
      // Lets receive pouch results first - the elastic ones should be more up to date.
      const results = yield select(getSearchResults)
      console.log('search results', results)
      
      // It _might_ be more efficient to filter these two so that we only 
      // receive the elastic version if there's a version in each. (filter)
      if (results.pouch) {
        yield all(results.pouch.map((hit) => put(responseActions.request(hit._id))))
      }
      if (results.elastic && results.elastic.length > 0) {
        yield all(results.elastic.map((result) => put(responseActions.request(result.id))))
      }
    }
    catch (err) {
      console.log('something broke while finding responses', err)
    }
  }
}

export function* receiveChange() {
  while (true) {
    const { response } = yield take('RESPONSE_CHANGE')
    try {
      yield put(responseActions.receive(response))
      if (response.dirty) {
        yield call(addInstance, response.questiongroup, response.patient)
      }
    }
    catch (err) {
       console.log('who mucked that up then? - responseSaga', err)
      debugger
      console.log(err.stack)
    }
  }
}

export function* addInstance(questiongroupId, patientId) {
  // console.log('AA', questiongroupId)
  // debugger
  const allResponses = yield select(getResponses)
  const allQuestiongroups = yield select(getQuestiongroups)
  const thisQuestiongroup = allQuestiongroups.byId[questiongroupId]
  let patientQuestiongroups = {}
  let patientMostRecent = {}
  // debugger
  if (allResponses.byPatient[patientId]) {
    patientQuestiongroups = allResponses.byPatient[patientId].byQuestiongroup || {}
    patientMostRecent = allResponses.byPatient[patientId].mostRecent || {}
  }

  if (thisQuestiongroup.count !== 'n') {
    // debugger
    let unsaved = []
    if (patientQuestiongroups[questiongroupId]) {
      unsaved = patientQuestiongroups[questiongroupId].filter(instance => !instance.saved)
    }
    if (unsaved.length < 1) { // There should always be 1 unsaved record.
      const newInstanceId = uuid.v4()
      const responses =  thisQuestiongroup.questions.map((questionId) => {
        //Bring in the response or answer from the mostRecent.
        let mostRecent = {
          patient: patientId,
          questiongroup: questiongroupId,
          question: questionId
        }
        if (patientMostRecent[questiongroupId] && patientMostRecent[questiongroupId][questionId]) {
          mostRecent = patientMostRecent[questiongroupId][questionId]
        }
        const response =  {
          class: 'Response',
          ...mostRecent,
          instance: newInstanceId,
          _id: uuid.v4(),
          created: moment().format()
        }
        // console.log('BB', questiongroupId)
        return put(responseActions.receive(response))
      })
  // debugger
      return yield responses
    }
  }

  if (thisQuestiongroup.count === 'n') {
    // debugger
    let blanks = []
    if(patientQuestiongroups[questiongroupId]) {
      blanks = patientQuestiongroups[questiongroupId].filter(instance => instance.blank)
    }
    // debugger
    if (blanks.length < 1) { // There should always be 1 blank record
      // debugger
      const newInstanceId = uuid.v4()
      const responses = thisQuestiongroup.questions.map((questionId) => {
        //Don't bring in any answers or responses
      const response = {
        class: 'Response',
        patient: patientId,
        questiongroup: questiongroupId,
        question: questionId,
        instance: newInstanceId,
        created: moment().format(),
        _id: uuid.v4()}
        // console.log('CC', questiongroup._id)
        // debugger
        return put(responseActions.receive(response))
      })
  // debugger
  // console.log(responses)
  // yield n' responses
      yield responses
    }
    // else {console.log('blanks', blanks.length)}
  }
}

export function* persistReponsesForPatient() {
  //#TODO - make sure that we're re-evaluating the 'dirty' flag on instances when we receive responses
  while (true) {
    try {
      const { patientId } = yield take(patientTypes.persist)
      const responses = yield select(getResponses)
      const patients = yield select(getPatients)
      const patient = patients.byId[patientId]

      if(patient.dirty) {
        yield call(persist, patient)
      }

      yield all(Object.keys(responses.byPatient[patientId].byQuestiongroup)
      .reduce((acc, qgKey) => { // questiongroups for this patient
        return acc.concat(
          responses.byPatient[patientId].byQuestiongroup[qgKey] // Instances in this questiongroup
          .filter((instance) => instance.dirty)
          .reduce((iAcc, instance) => {
            return iAcc.concat(
              Object.keys(instance.questions)
              .map((qKey)=>instance.questions[qKey])) // extract the responseIds
          }, [])
        )
      }, [])
      .map(responseId => {return call(persist, responses.byId[responseId])})) // map through the responses calling persist on each one.
    }
     catch (err) {
       console.log('who mucked that up then? - patient.persist', err.stack)
      throw err
    }
  }
}

export default [
  receiveChange,
  loadResponsesForPatient,
  persistReponsesForPatient
]