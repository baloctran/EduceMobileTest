// Don't use elastic client in app.. use an api instead, and allow the server to use the elasticsearch client instead.
import { logIt, returnIt, debugIt, logError } from '../redux/helpers/utils';
import apiClient from './ApiClient'

export function search(searchBody) {
  if (searchBody) {
    console.log(searchBody);
    return apiClient.post('http://vps.educe.nz/api/es,{data: {
      // return apiClient.post(env.config.elasticUrl,{data: {
      index: 'hx', //config.elasticIndex,
      body: searchBody
    }})
    .then(logIt)
    .then(debugIt)
    .then(returnIt)
    .catch(logError);
  } if (!searchBody) {
    return Promise.reject('No search query was provided.');
  }
  return Promise.reject('Server searches are unavailable.');
}
