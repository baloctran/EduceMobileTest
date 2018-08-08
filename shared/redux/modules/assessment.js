export const types = {
  request: 'DOCUMENT_REQUEST'
}

export const actions = {
  loadAndPrepDocument: (patientId, templateId) => {
    return {
      type: types.request,
      patientId: patientId,
      templateId: templateId
    };
  }
}
