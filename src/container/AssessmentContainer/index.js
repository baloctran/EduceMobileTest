import * as React from 'react'
import { connect } from 'react-redux'
import { actions as patientActions } from '../../../shared/redux/modules/patient'
import { actions as contextActions } from '../../../shared/redux/modules/context'
import { actions as documentActions } from '../../../shared/redux/modules/document'
// import {getResponsesForPatientId} from '../../../shared/redux/selectors'

import Assessment from '../../screen/Assessment'
import {View, Text} from 'react-native'

const { persist: persistPatient } = patientActions
const { activateChapter } = contextActions
const { loadAndPrepDocument } = documentActions

@connect(
  ( state ) => ({
		context: state.context,
		user: state.auth.user,
		templates: state.templates.byId,
		patients: state.patients.byId,
		questiongroups: state.questiongroups.byId,
		questions: state.questions.byId,
		responses: state.responses.byId,
		answers: state.answers.byId
	}),
	{
		loadAndPrepDocument, persistPatient, activateChapter
	}
)
export default class AssessmentContainer extends React.Component {
	activateChapter = (patientId, templateId, chapterKey) => () => this.props.activateChapter(patientId, templateId, chapterKey)
	componentWillMount() {
		const {templateId, patientId} = this.props.navigation.state.params
		console.log('CWM', templateId, patientId, this.props.loadAndPrepDocument)
		this.props.loadAndPrepDocument(patientId, templateId)
	}
	render() {
		const { templates, patients, questiongroups, questions, responses, answers, navigation, context} = this.props
		// console.log('Navigation', JSON.stringify(Object.keys(this.props.navigation)))
		const {templateId, patientId} = navigation.state.params
		// const templateId = 'anaesAssessment'
		// const patientId = 'andyboy'
		// // const intervention = state.interventions.byId[interventionId]
		const activeChapter = (context[patientId] && context[patientId][templateId] ? context[patientId][templateId] || 0 : 0)
		const template = templates[templateId]
		const patient = patients[patientId]

		return <View>
			<Text>Patient {patientId} {JSON.stringify(patient)}</Text>
			<Text>Template {templateId} {JSON.stringify(template)}</Text>
			{/* {patient && template && <Assessment 
				navigation={navigation} 
				template={template} 
				patient={patient}
				questiongroups={questiongroups}
				questions={questions}
				responses={responses}
				answers={answers}
				activeChapter={activeChapter} 
				persistPatient={persistPatient}
				activateChapter={this.activateChapter}/>}
				{(!patient || !template) && <Text>Loading...</Text>} */}
			</View>
	}
}
