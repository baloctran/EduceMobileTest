export const types = {
  receivePouchSearch: 'pouchReceiveSearch',
  emptyPouchSearch: 'pouchEmptySearch',
  receiveElasticSearch: 'elasticReceiveSearch',
  emptyElasticSearch: 'elasticEmptySearch'
}

export const actions = {
  receivePouchSearch: (results) => {
    return {
      type: types.receivePouchSearch,
      results: results
    };
  },
  emptyPouchSearch: () => {
    return {
      type: types.emptyPouchSearch
    };
  }, 
  receiveElasticSearch: (results) => {
    return {
      type: types.receiveElasticSearch,
      results: results
    };
  },
  emptyElasticSearch: () => {
    return {
      type: types.emptyElasticSearch
    };
  }
}

const initialState = {
  pouch: [],
  elastic: []
};

export function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.receivePouchSearch:
      return Object.assign({}, state, {pouch: action.results});
    case types.emptyPouchSearch:
      return Object.assign({}, state, {pouch: []});
    case types.elasticReceiveSearch:
      return Object.assign({}, state, {elastic: action.results});
    case types.elasticEmptySearch:
      return Object.assign({}, state, {elastic: []});
    default:
      return state;
  }
}
