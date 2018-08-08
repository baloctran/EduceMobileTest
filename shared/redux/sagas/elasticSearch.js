import { call, put} from 'redux-saga/effects';
// import { search as es } from '../../helpers/elasticsearch.1';
const es = () => {}
import { actions } from '../modules/search';
import { getElasticSearch } from './selectors';

const { receiveElasticSearch, emptyElasticSearch } = actions;

export function* search(query) {
  const elasticSearch = yield select(getElasticSearch);
  if (elasticSearch) {
    // return 'foo';
    const results = call(es, query);
    console.log('elasticSearch results', results);
    if (results.docs && results.docs.length > 0) {
      yield put(receiveElasticSearch(results));
    } else {
      yield put(emptyElasticSearch());
    }
  } else {
    console.log('No remote search query was provided.');
    yield put(emptyElasticSearch());
  }
}
