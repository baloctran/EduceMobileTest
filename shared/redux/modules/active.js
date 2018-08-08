const types = {
  // activate: 'activate',
  activatePatient: 'activate_patient'
};

export const actions = {
  activatePatient: (patient) => ({
    type: types.activatePatient,
    patient: patient
  })
}

const initialState = {patient: undefined};

export function reducer(state = initialState, action = {}) {
  console.log('Active Reducer', action)
  switch (action.type) {
    // case ACTIVATE:
    //   const active = { ...state, [action.key1]: state[action.key1] || {} };
    //   active[action.key1][action.key2] = action.id;
    //   return active;
    case types.activatePatient:
      return {...state, patient: action.patient};
    default:
      return state;
  }
}

export function activate(key1, key2, id) {
  return {
    type: ACTIVATE,
    key1: key1,
    key2: key2,
    id: id
  };
}
