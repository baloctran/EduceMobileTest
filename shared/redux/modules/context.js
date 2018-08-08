export const types = {
  activateChapter: 'CONTEXT/activateChapter',
  setFocusDate: 'CONTEXT/setFocusDate',
}

const initialState = {
  date: new Date()
}

export const actions = {
  activateChapter: (segmentId, templateId, chapterKey) => {
    return {
      type: types.activateChapter,
      segmentId: segmentId,
      templateId: templateId,
      chapterKey: chapterKey
    }
  },
  setFocusDate: (date) => {
    return {
      type: types.setFocusDate,
      date
    }
  },
}

export const reducer = (state = initialState, action) => {

  if (action.type === types.activateChapter) {
    const thisSegment = state[action.segmentId] || {}
    return {
      ...state, [action.segmentId]: {
        ...thisSegment,
        [action.templateId]: action.chapterKey
      }
    }
  }
  if (action.type === types.setFocusDate) {
    return {
      ...state,
      date: action.date
    }
  }
  return state
}
