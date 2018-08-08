
import * as React from 'react'
import { connect } from 'react-redux'

import Summary from '../../screen/Summary'
import SummaryTablet from '../../screen/Summary/TabletView'
import { Dimensions, Text } from 'react-native'
import { actions } from '../../../shared/redux/helpers/pouch'
import { actions as contextActions } from '../../../shared/redux/modules/context'
import { actions as responseActions } from '../../../shared/redux/modules/response'

// Separation of concerns - this display logic should NOT be in a container.
const { height, width } = Dimensions.get('window')
const aspectRatio = height / width


// selectors: - we should use selectors here - it'll make things more efficent at render time if the array is smaller
const interventions = []
const responses = []

@connect(
  (state) => ({
    patients: state.patient,
    instances: state.instances,
    interventions: state.interventions,
    responses: state.responses,
    templates: state.outputs,
    questiongroups: state.questiongroups,
    questions: state.questions,
    answers: state.answers,
    procedures: state.procedures,
    identity: state.identity
  }),
  { changeResponse: responseActions.changeResponse,
    requestDocument: actions('document').request
  }
)
export default class SummaryContainer extends React.Component {
	tablet = false;

	componentWillMount() {
    this.props.requestDocument({ //Triggers the document saga to load and prepare the template and all needed responses
      interventionId: this.props.navigation.state.params.interventionId, 
      templateId: this.props.navigation.state.params.templateId
    })

	  if (aspectRatio > 1.6) 
	    this.tablet = false
		 else 
	    this.tablet = true

		
	}
	render() {
    return <React.Fragment>
      <Text>{JSON.stringify(this.props.navigation.state.params)}</Text>
      <Text>{JSON.stringify(this.props.interventions[this.props.navigation.state.params.interventionId])}</Text>
      <Text>{JSON.stringify(this.props.interventions)}</Text>
    </React.Fragment>
    console.log('NAV Params', this.props.navigation.state.params)
    const template = this.props.templates[this.props.navigation.state.params.templateId]
    console.log('template', template)
    const intervention = this.props.interventions[this.props.navigation.state.params.interventionId]
    console.log('intervention', intervention)
    const patient = (intervention.patient ? this.props.patients[intervention.patient] : null)
    console.log('patient', patient)

    if (!template) return <Text> Loading required template </Text>
    if (!intervention) return <Text> Loading required intervention </Text>
    if (!patient) return <Text> Loading required patient </Text>
	  if (this.tablet) return <SummaryTablet {...this.props} patient={patient} output={template} intervention={intervention}/>
	  return <Summary {...this.props} patient={patient} output={template} intervention={intervention} />
	}
}
