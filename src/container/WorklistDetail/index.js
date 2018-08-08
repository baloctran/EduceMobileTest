import * as React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { actions } from '../../../shared/redux/helpers/pouch'
import WorklistDetail from '../../screen/WorklistDetail'

@connect(
	(state) => {
		return {
			patients: state.patients.byId,
			procedures: state.procedures.byId,
			interventions: state.interventions.byId,
			worklists: state.worklists.byId
		}
	},
	{ requestWorklist: actions('worklist').request }
)
export default class WorklistDetailContainer extends React.Component {
	componentWillMount() {
		this.props.requestWorklist(this.props.navigation.state.params.worklistId)
	}
	render() {
		const worklist = this.props.worklists[this.props.navigation.state.params.worklistId]
		// return <Text>{JSON.stringify(this.props)}</Text>
		return <WorklistDetail {...this.props} worklist={worklist}/>
	}
}
