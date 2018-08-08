import { createSelector } from 'reselect';
import { byProp } from 'shared/redux/helpers/utils';

const getQuestiongroups = (state) => state.questiongroups.byId;

export default createSelector(
  [ getQuestiongroups ],
  (questiongroups) => {
    console.log('QGs in selector', questiongroups);
    if(questiongroups) {
      const p = Object.keys(questiongroups).map((qgKey)=>questiongroups[qgKey]);
      return p.sort(byProp('title'));
    }
    return [];
  }
);
