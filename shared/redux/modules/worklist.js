import { actions as pouchActions, reducer as pouchReducer } from '../helpers/pouch';

export const worklistsActions = pouchActions('worklists');

export const types = {
  request: 'WORKLIST_REQUEST',
};

export const actions = {
  ...worklistsActions,
  request: () => ({type: types.request}),
};