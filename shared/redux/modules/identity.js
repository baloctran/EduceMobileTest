import {validateEmail, validatePassword} from '../../validators'
export const types = {
  login: 'identityLogin',
  loginSuccess: 'identityLoginSuccess',
  loginFail: 'identityLoginFail',
  logout: 'identityLogout',
  logoutSuccess: 'identityLogoutSuccess',
  validate: 'identityValidate'
}

const initialState = {
  loaded: false,
  validations: {},
  credentials: {}
}

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        loggingIn: true,
        loggedIn: false,
      }
    case types.loginSuccess:
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        ...action.identity,
        credentials: {login: state.credentials.login},
        token: action.token
      }
    case types.loginFail:
      return {
        ...state,
        loggingIn: false,
        loggedIn: false,
        loginError: action.error
      }
    case types.logout:
      return {
        ...state,
        loggingOut: true
      }
    case types.logoutSuccess:
      return {
        ...state,
        loggingOut: false,
        loggedIn: false,
      }
    case types.validate:
    return {
      ...state,
      validations: {
        ...state.validations, 
        emailError: validateEmail(action.credentials.email), 
        passwordError: validatePassword(action.credentials.password)
      },
      credentials: {...state.credentials, ...action.credentials}
    }
    default:
      return state
  }
}

export const actions = {
  login: (credentials) => {
    return {
      type: types.login,
      credentials
    }
  },
  loginSuccess: (identity, token) => {
    return {
      type: types.loginSuccess,
      identity,
      token
    }
  },
  loginFail: (reason) => {
    return {
      type: types.loginFail,
      failReason: reason
    }
  },
  logout: () => {
    return {
      type: types.logout
    }
  },
  validate: (credentials) => {
    return {
      type: types.validate,
      credentials
    }
  },
}
