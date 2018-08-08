import * as React from "react";
import { connect } from 'react-redux'
import Sidebar from "../../screen/Sidebar";

@connect(
	(state) => ({
		identity: state.identity
	})
)
export default class SidebarContainer extends React.Component {
	render() {
		return <Sidebar {...this.props} />;
	}
}


