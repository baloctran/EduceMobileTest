import { actions as pouchActions, types as pouchTypes } from '../helpers/pouch';

export const types = {
  ...pouchTypes('patient'),
  persist: 'PATIENT_PERSIST'
};

export const actions = {
  ...pouchActions('patient'),
  request: (patientId) => ({type: types.request, id: patientId}),
  persist: (patientId) => {
    return {
      type: types.persist,
      patientId: patientId
    };
  }
};
