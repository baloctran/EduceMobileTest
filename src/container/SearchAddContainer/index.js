// @flow
import * as React from 'react'
import SearchAdd from '../../screen/SearchAdd'
import {connect} from 'react-redux'
import {actions as patientActions} from '../../../shared/redux/modules/patient'

@connect(
	(state) => ({
		patients: [], //state.patients,
    context: state.context,
	}),
	{
    requestPatient: patientActions.request
	}
)
export default class SearchAddContainer extends React.Component {
  render() {
    return <SearchAdd {...this.props} />
  }
}
