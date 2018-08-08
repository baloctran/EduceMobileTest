import { all, call, put, select, take } from 'redux-saga/effects'
import { findById } from './pouch'
import { getTemplates } from './selectors'
import { actions } from '../helpers/pouch'
import { getPouch } from './selectors'
import { persist } from './pouch'
import questiongroupSaga from './questiongroup'
import {types} from '../modules/template'

const templateActions = actions('template')

 function* loadTemplateSaga() {
  while (true) {
    const { id } = yield take(types.request)
    if (!id) {
      console.log('BROKEN HORRIBLY. NO ID PROVIDED TO TEMPLATE SAGA.')
    } else {
      yield call(loadTemplate, id)
    }
  }
}

export function* persistTemplateSaga() {
  while (true) {
    try {
      const { templateId } = yield take(types.persist)
      const templates = yield select(getTemplates)
      const template = templates.byId[templateId]
      console.log('TEMPLATE_PERSIST SAGA TRIPPED', templates, template)
      yield call(persist, template)

    }
     catch (err) {
      console.log('who mucked that up then? - patient.persist', err)
      console.log(err.stack)
    }
  }
}

export function* loadTemplate(templateId) {
  try {
    console.log('templateSaga', templateId)
    // Check if there's an entry in state
    // If there is, just finish up.
    const templates = yield select(getTemplates)
    // console.log('Templates', templates)
    // debugger
    if (!templates.byId[templateId]) {
      // If not, pouch.findById, and QUESTIONGROUP_RECEIVE
      const pouch = yield select(getPouch)
      const [ template, bulkQuestiongroups, bulkQuestions, bulkAnswers, bulkMedications, bulkProcedures ] = yield [
        call(findById, {id: templateId}, pouch),
        call(findById, {id: 'questiongroups'}, pouch),
        call(findById, {id: 'questions'}, pouch),
        call(findById, {id: 'answers'}, pouch),
        call(findById, {id: 'medications'}, pouch),
        call(findById, {id: 'procedures'}, pouch),
      ]

      const bulkDocs = {
        questiongroups: bulkQuestiongroups,
        questions: bulkQuestions,
        answers: {...bulkAnswers, docs: [...bulkAnswers.docs, ...bulkMedications.docs, ...bulkProcedures.docs]}
      }

      if (template && template.chapters) {
        // console.log('Template has chapters')
        // debugger
        const qgs = template.chapters.reduce((cpAcc, chapter) => {
          return cpAcc.concat(chapter.sections.reduce((sAcc, section) => {
            return sAcc.concat(section.columns.reduce((cAcc, column) => {
              return cAcc.concat(column)
            }, []))
          }, []))
        }, [])
        yield all(qgs.map(questiongroupId => call(questiongroupSaga, {id: questiongroupId, bulkDocs: bulkDocs})))
      }
      if(template) {
        yield put(templateActions.receive(template))
      }
      return template
    }
    return templates.byId[templateId]
      // Wait - what if it's not found? Shall we just not care?
  } catch (err) {
      yield put(templateActions.requestError(err))
  }
}

export const admin = [loadTemplateSaga, persistTemplateSaga]
export const clinical = [loadTemplateSaga]
