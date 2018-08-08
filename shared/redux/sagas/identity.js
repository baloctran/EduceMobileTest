import { call, put, take, select } from 'redux-saga/effects'
import { types, actions } from '../modules/identity'
import { logIt, catchIt, isBrowser } from '../helpers/utils'
import { pouchStart } from './pouch'
import api from '../../helpers/api'

const { loginSuccess } = actions

function postLoginToApi(credentials) {
  // method, url, params, noauth
  return api('post','login', credentials, true)
  // return api('post','login', {email:'don@educe.nz', password:'testtest'}, true)
  .then(logIt)
  // .catch(catchIt)
}

export function* identitySaga() {
  let message = {}
  while (true) {
    const { credentials } = yield take(types.login)
    try {
      console.log('IdentitySaga hit')
      const response = yield call(postLoginToApi, credentials)
        message = response
        console.log('response', response)

      if(response){
        const {data: identity, headers:{"set-cookie": cookies}} = response
        let token
        if(isBrowser()) token = 'browser' //We don't have access to the cookie in browser, but we also don't need to worry about it.
        else if(cookies.length > 0) token = cookies[0].split(';')[0].substring(6)

        // Check if identity is what we expected? We could get a 200 with a html response instead..
        // Should implement that for robustness at some point.

        if(token.length < 2) throw Error('Token missing from response')
        else { //Catch tokens that are missing or malformed
          try {
            yield put(loginSuccess(identity, token)) // <= this stashes the JWT into redux, and sets up replication
            yield call(pouchStart)
          }
          catch (err) {
            console.error('token error', err)
            yield put(actions.loginFail('Token error'))
          }
        }
      }
    }
    catch (err) {
      yield put(actions.loginFail('Login response malformed or missing')) //message.data.Message})
      yield put(actions.loginFail(err)) //message.data.Message})
    }
  }
}

export default [
  identitySaga
]
