import axios from 'axios'
import { select } from 'redux-saga/effects'
import { getJWT } from '../redux/selectors/identity'
// import { logIt, catchIt } from '../redux/helpers/utils'
// import { pouchConnect as connectRemotePouch, bulkLoad } from '../redux/sagas/pouch'

let bearerToken

export default async function request(method, url, params, noauth) {
  const body = method === 'get' ? 'params' : 'data'

  const config = {
    method,
    url,
    // baseURL: 'http://45.124.85.209:9000/api',
    baseURL: 'https://vps.educe.nz/api',
    // baseURL: 'http://192.168.1.13:9000/api/', //env.config.apiUrl, //
    // baseURL: 'http://192.168.1.10:9000/api/', //env.config.apiUrl, //'http://educe.vps.nz/api',
    // baseURL: 'http://172.17.0.1:9000/api',
    // baseURL: 'http://10.42.0.1:9000/api/',
    [body]: params || {}
  }
  if (!noauth) {
    if (!bearerToken) {
      const jwt = await select(getJWT)
      if (jwt) bearerToken = 'Bearer ' + jwt
    }
    if(bearerToken) {
      config.headers = {
        Authorization: bearerToken
      }
    }
  }
  // console.log(axios)

  return axios.request(config)
}
