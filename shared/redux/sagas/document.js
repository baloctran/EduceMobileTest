import { all, call, select, take } from 'redux-saga/effects'
import { getQuestiongroups, getInterventions, getPatients } from './selectors'
import { addInstance } from './responses'
import { types as documentTypes } from '../modules/document'

export function* loadDocumentSaga() {
  while (true) {
    const { interventionId, templateId } = yield take(documentTypes.request)

    try {
      // console.log('documentSaga', patient._id, templateId)
      const [interventions, patients, templates] = yield [
        select(getInterventions),
        select(getPatients),
        select(getTemplates),
      ]

      const intervention = interventions[interventionId]
      const patient = patients[intervention.patient]
      const template = templates[templateId]

      // const [ intervention, template ] = yield [
      //   call(interventionActions.request, interventionId),
      //   call(templateActions.request, templateId), //Templates should be bulkloaded for role.
      // ]

      // const patient = yield call(patientActions.request, intervention.patient) // These should be already loaded because of worklist promiscuous loading

      // console.log('DOCUMENT', patient, template)

      if (template && template.chapters) {
        debugger
        const qgs = template.chapters.reduce((cpAcc, chapter) => {
          return cpAcc.concat(chapter.sections.reduce((sAcc, section) => {
            return sAcc.concat(section.columns.reduce((cAcc, column) => {
              return cAcc.concat(column.questiongroups || column)
            }, []))
          }, []))
        }, [])
        // console.log('Questiongroups for document', qgs)
        // .filter((qg)=>qg)
        const questiongroups = yield select(getQuestiongroups)
        const questiongroupsForDocument = qgs.map((qgId)=>questiongroups.byId[qgId])
        // Okay, now lets prep the patient responses/instances ready to take input.
        // for OneQGs, add an unsaved instance (if there isn't one already) with the NEW responses, pre-pop'd with the latest responses to all questions in the qg.
        // for ManyQGs, add an unsaved instance (if there isn't one already) with NEW responses to all questions in the QG.
        // if response has an _id, mark the instance as 'saved'.
        // debugger
        // console.log(questiongroups, questiongroupsForDocument)
        yield all(questiongroupsForDocument.map((questiongroup) => {
          if (questiongroup && questiongroup.questions && questiongroup.questions.length > 0) {
            return call(addInstance, questiongroup._id, patient._id)
          }
        })) // Feel like we should filter this to avoid empty tuples?
      }
    } catch (err) {
      console.log('who mucked that up then?', err)
      console.log(err.stack)
      // yield put(templateActions.requestError(err))
    }
  }
}

export default [
  loadDocumentSaga
]