import { actions as pouchActions, reducer as pouchReducer } from '../helpers/pouch';

export const templateActions = pouchActions('template');

export const types = {
  request: 'TEMPLATE_REQUEST',
  persist: 'TEMPLATE_PERSIST'
};

export const actions = {
  ...templateActions,
  request: (templateId) => ({type: types.request, id: templateId}),
  persist: (templateId) => ({type: types.persist, templateId: templateId})
};

export function reducer(state = {isFetching: false, all: [], byId: {}}, action) {
  const reducers = pouchReducer('template');
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }

  return state;
}
