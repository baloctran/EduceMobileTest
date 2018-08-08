import { actions as pouchActions, reducer as pouchReducer } from '../helpers/pouch';

export const outputActions = pouchActions('output');

export const types = {
  request: 'OUTPUT_REQUEST',
  persist: 'OUTPUT_PERSIST'
};

export const actions = {
  ...outputActions,
  request: (outputId) => ({type: types.request, id: outputId}),
  persist: (outputId) => ({type: types.persist, outputId: outputId})
};

export function reducer(state = {isFetching: false, all: [], byId: {}}, action) {
  const reducers = pouchReducer('output');
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }

  return state;
}
