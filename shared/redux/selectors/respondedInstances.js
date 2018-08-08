import { createSelector } from 'reselect';

const getByQuestiongroup = (patientResponses) => patientResponses.byQuestiongroup;
const getMostRecent = (patientResponses) => patientResponses.mostRecent;

export default createSelector(
  [ getByQuestiongroup, getMostRecent ],
  (byQuestiongroup, mostRecent) => {
    const byQG = Object.keys(byQuestiongroup).reduce((acc, qg)=>{
      const thisQg = byQuestiongroup[qg].filter((instance)=>!instance.blank);
      if(thisQg.length > 0) {
        acc[qg]={}
      }
      return acc;
    }, {});

    const recent = Object.keys(mostRecent).reduce((acc, qg)=>{
      
    })
    
    return [];
  }
);


