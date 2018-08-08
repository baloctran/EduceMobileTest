// import { createSelector } from 'reselect';

// const getResponses = (state) => state.responses;

// export default createSelector(
//   [ getResponses ],
//   (responses) => {
//     if(responses) {
//       return responses.reduce((byPatient, response)=>{
//         byPatient[response.patient] = {...byPatient[response.patient]};
//         byPatient[response.patient][response.questiongroup] = {...byPatient[response.patient][response.questiongroup]};
//         byPatient[response.patient][response.questiongroup][response.instance]
//         return instance.responses.filter((response)=>response.response || response.answer).length > 0;
//       });
//     }
//     return [];
//   }
// );


