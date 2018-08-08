import { createSelector } from 'reselect'
import { byProp, matchDay } from '../helpers/utils'

const getWorklists = (state) => state.worklists.byId
const getContextDate = (state) => state.context.date || new Date()

export default createSelector(
  [ getWorklists, getContextDate ],
  (worklists, date) => {
    if(worklists) {
      return Object.keys(worklists)
      .map(id=>worklists[id])
      .filter(worklist=>matchDay(worklist.date, date))
      .sort(byProp('date'))
    }
    return []
  }
)
