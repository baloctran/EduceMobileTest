import * as React from "react"
import { actions as identityActions } from '../../../shared/redux/modules/identity'
import { connect } from 'react-redux'
const { login: loginAction, validate } = identityActions

import Login from "../../screen/Login"

@connect(
  store => ({ identity: store.identity }),
  { loginAction, validate })
export default class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />
  }
}
