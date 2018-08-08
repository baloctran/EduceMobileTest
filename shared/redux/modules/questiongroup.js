// import { actions } from '../helpers/pouch';

// export const actions('questiongroup');

export function reducer(state = {isFetching: false, all: [], byId: {}}, action) {

  if(reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  // Extend the default pouch handlers like such
  // if(action.type = 'CHAPTER_SOMETHING') {
  //   return Object.assign({}, state, {
  //           someProperty: action.something
  //       })
  // }
  else return state;
  
}
