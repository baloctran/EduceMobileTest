
import * as React from 'react'
import { connect } from 'react-redux'
import Store from '../../screen/Store'

@connect(
	(state) => ({
		state: state
	})
)
export default class StoreContainer extends React.Component {
	render() {
    return <Store {...this.props} />
	}
}
