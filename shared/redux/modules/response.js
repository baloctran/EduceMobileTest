import { addToAll, addById, removeById, byProp } from '../helpers/utils';
import { types as pouchTypes } from '../helpers/pouch';
import moment from 'moment';

// What can we tell about the state of things from a response?
// Dirty means it's been changed in the UI. It's not yet stored.
// _id means that it's been stored to pouch/couch. It won't be dirty. (dirty prop doesn't persist.)
// Instances get tagged with [dirty, blank]. Blank means that none of the responses
// contained in the instance have a response or answer.

export const types = {
  ...pouchTypes('response'),
  change: 'RESPONSE_CHANGE'
}

export const actions = {
  changeResponse: (response, responseValues) => {
    const newResponse = { ...responseValues, created: moment().toISOString(), dirty: true }
    console.log('Question.changeResponse', response, responseValues, newResponse)
    return {
      type: types.change,
      response: newResponse
    }
  }
}

function addByQuestiongroup(byQuestiongroup, action) {
  // Should return an object, keyed on questiongroup,
  // each key to contain an array of instances, sorted by 'created'
  let { [action.doc.questiongroup]: thisQuestiongroup, ...otherQuestiongroups } = byQuestiongroup;
  thisQuestiongroup = thisQuestiongroup || []; // thisQuestiongroup is an array of instances (hopefully)
  otherQuestiongroups = otherQuestiongroups || {}; //byQuestiongroup is an object

  const otherInstances = thisQuestiongroup
  .filter((instance)=>{
    // debugger; // Check that action.doc.instance is legit..
    return instance.instance !== action.doc.instance;
  })

  let thisInstance = thisQuestiongroup.filter((instance)=>{
    // debugger;
    return instance.instance === action.doc.instance;
  })[0];
  if (!thisInstance) thisInstance = {dirty: false, blank: true, instance: action.doc.instance, questions: {}};

  // debugger;
  // We can use _rev to see if it was persisted to pouch/couch (if it has a _rev, it was persisted)

  // We need to tag instances with blank or not so we can tell if we need to add another
  if(action.doc.answer || action.doc.response) {
    thisInstance.blank = false;
    if(action.doc.dirty) {
      // !dirty == not needing to be persisted. dirty prop will not be persisted to storage.
      thisInstance.dirty = true;
    }
  }
  // debugger;
  if(!thisInstance.created) thisInstance.created = action.doc.created;
  
  thisInstance.questions[action.doc.question] = action.doc._id;
  
  // if(thisInstance.clean && !action.doc.clean)
  
  const newThisQuestiongroup = [ thisInstance, ...otherInstances];
  const sortedByCreated = newThisQuestiongroup.sort(byProp('created')); // Because we need something consistent so that instances don't jump around on the screen.
  const sortedByBlank = sortedByCreated.sort(byProp('blank', true)); // to reverse: add ", true"
  // .sort(byProp('blank'));
  // debugger;
  const newThingy = { [action.doc.questiongroup]: sortedByBlank, ...otherQuestiongroups }
  // const newThingy = {...otherQuestiongroups, [action.doc.questiongroup]: newThisQuestiongroup}
  // debugger;
  return newThingy;
}

function refreshMostRecent(mostRecent, all, action) {
  const { [action.doc.questiongroup]: thisQuestiongroup, ...otherQuestiongroups } = mostRecent || {};
  const { [action.doc.question]: responseToThisQuestion, ...responsesToOtherQuestions} = thisQuestiongroup || {};
  const matchingQuestions = all.filter((response)=>{
    return response.patient == action.doc.patient 
        && response.questiongroup == action.doc.questiongroup
        && response.question == action.doc.question
  });
  const mostRecentResponse = matchingQuestions.sort(byProp('created'))[0];

  return { [action.doc.questiongroup]: {[action.doc.question]: mostRecentResponse._id, ...responsesToOtherQuestions }, ...otherQuestiongroups };
}

function byPatient(state, byId, action) {
  const { [action.doc.patient]: thisPatient,
    ...otherPatients,
  } = state.byPatient;

  const all = Object.keys(byId).map((key)=>{
    return byId[key];
  });

  const {
    byQuestiongroup,
    mostRecent
  } = thisPatient || {byQuestiongroup: {}, mostRecent: {}};

  const newByQuestiongroup = addByQuestiongroup(byQuestiongroup, action);
  const newMostRecent = refreshMostRecent(mostRecent, all, action);

  return {
    [action.doc.patient]: {
      byQuestiongroup: newByQuestiongroup,
      mostRecent: newMostRecent
    },
    ...otherPatients
  };
};
// Structure:
// byPatient=>byQuestiongroup[instance][question]==response._id
const initialState = {byPatient: {}, byId: {}};
export function reducer(state = initialState, action) {
  // const reducers = {};
  if (action.type === types.receive) {
    // console.log('types.receive', action);
    const byId = {...state.byId, [action.doc._id]: action.doc};
    // console.log('BYID', byId);
    const newState = { ...state,
      // isFetching: false,
      byId: byId,
      byPatient: byPatient(state, byId, action),
    };
    // console.log('NEWSTATE', newState);
    return newState;
  }
  return state;

  // reducers[types.remove] = (state = {}, action) => {
  //   return {
  //     ...state,
  //     isFetching: false,
  //     byPatient: removeFromCollation(state, action)
  //   };
  // };

  // Reducer
  // return (state = {all: [], byId: {}, byPatient: {}}, action) => {
  // if (reducers[action.type]) {
  //   return reducers[action.type](state, action);
  // }
  // return state; // default
}


// function removeFromCollation(state, action) {
//   if (action.doc && action.doc.patient && action.doc.questiongroup && action.doc.instance && action.doc.question) {
//     const doc = action.doc;
//     const {[doc.patient]: thisPatient, ...otherPatients} = state.byPatient;
//     const {[doc.questiongroup]: thisQuestiongroup, ...otherQuestiongroups} = thisPatient;
//     const thisInstance = thisQuestiongroup.find((instance)=>instance.instance === doc.instance);
//     const otherInstances = thisQuestiongroup.filter((instance)=>instance.instance !== doc.instance);
//     // const {[doc.instance]: thisInstance, ...otherInstances} = thisQuestiongroup;
//     const {instance, created, [doc.question]: thisQuestion, ...otherQuestions} = thisInstance;

//     return {
//       ...otherPatients,
//       [doc.patient]: {
//         ...otherQuestiongroups,
//         [doc.questiongroup]: [
//           ...otherInstances,
//           { instance, created,
//             ...otherQuestions
//             // patient.questiongroup.instance.question is omitted. That's the one we wanted to remove.
//           }
//         ]
//       }
//     };
//   }
//   console.log('Response failed to be removed', action, state);
//   return state;
// }

// function addMostRecent(state, all, action) {
//   const { ...otherQuestiongroups, [action.doc.questiongroup]: thisQuestiongroup } = state.mostRecent;
  
//   let all = state.all.filter((response) => {
//     return response.questiongroup == action.doc.questiongroup;
//   }) 
  
//   if (action.type == 'RESPONSE_RECEIVE') { // if it's a remove, we don't want to add it back in..
//     all.push(action.doc); // Because while it should be there already, lets be sure (if the order of calls in the reducer gets changed, this will save our bacon.)
//   }
//   if (action.type == 'RESPONSE_REMOVE') { // Make sure it's not in there still, just in case.
//     all = all.filter((response) => {
//       return response.questiongroup !== action.doc.questiongroup || response.instance !== action.doc.instance;
//     })
//   }
//   const current = all.sort(byProp(created))[0]; // Sort by 'created', and Grab the 0'th one - should be the most recent.
  
//   return {...otherQuestiongroups, [action.doc.questiongroup]: current};
// }
