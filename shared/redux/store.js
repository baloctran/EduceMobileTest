import {createStore, applyMiddleware} from 'redux'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import {isBrowser} from '../helpers/utils'
export let store

export const configureStore = (initialState = {}) => {
  
  const sagaMiddleware = createSagaMiddleware();
  
  store = createStore(
    rootReducer,
    {...initialState},
    applyMiddleware(...[sagaMiddleware])
    // composeWithDevTools({ realtime: true, port: 8000 })(applyMiddleware(...[sagaMiddleware]))
  )
  
  store.sagaTask = sagaMiddleware.run(rootSaga)

  // if(isBrowser){ //} && !env.config.isProd){
  //   window.reduxStore = store
  // }

  return store
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore,(state)=>({...state}))(nextReduxSaga(BaseComponent))
}