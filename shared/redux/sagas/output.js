import { all, call, put, select, take } from 'redux-saga/effects'; // , fork
import { findById } from './pouch';
import { getOutputs } from './selectors';
import { actions } from '../helpers/pouch';
import { getPouch } from './selectors';
import { persist } from './pouch';
import questiongroupSaga from './questiongroup';
import {types} from '../modules/output';

const outputActions = actions('output');
// const questiongroupActions = actions('questiongroup');

 function* loadOutputSaga() {
  while (true) {
    const { id } = yield take(types.request);
    if (!id) {
      console.log('BROKEN HORRIBLY. NO ID PROVIDED TO Output SAGA.');
    } else {
      console.log('output id', id);
      debugger;
      yield call(loadOutput, id);
    }
  }
 }

export function* persistOutputSaga() {
  while (true) {
    try {
      const { outputId } = yield take(types.persist);
      const outputs = yield select(getOutputs);
      const output = outputs.byId[outputId];
      console.log('Output_PERSIST SAGA TRIPPED', outputs, output);
      yield call(persist, output);

    }
     catch (err) {
       console.log('who mucked that up then? - output.persist', err)
      debugger;
      console.log(err.stack);
    }
  }
}

export function* loadOutput(outputId) {
  try {
    console.log('outputSaga', outputId);
    // Check if there's an entry in state
    // If there is, just finish up.
    const outputs = yield select(getOutputs);
    console.log('Outputs', outputs);
    debugger;
    if (!outputs.byId[outputId]) {
      // If not, pouch.findById, and QUESTIONGROUP_RECEIVE
      const pouch = yield select(getPouch);
      const [ output, bulkQuestiongroups, bulkQuestions, bulkAnswers, bulkMedications, bulkProcedures ] = yield [
        call(findById, {id: outputId}, pouch),
        call(findById, {id: 'questiongroups'}, pouch),
        call(findById, {id: 'questions'}, pouch),
        call(findById, {id: 'answers'}, pouch),
        call(findById, {id: 'medications'}, pouch),
        call(findById, {id: 'procedures'}, pouch),
      ];
      console.log('Output after findById', output);

      const bulkDocs = {
        questiongroups: bulkQuestiongroups,
        questions: bulkQuestions,
        answers: {...bulkAnswers, docs: [...bulkAnswers.docs, ...bulkMedications.docs, ...bulkProcedures.docs]}
      };
      if (output && output.chapters) {
        console.log('Output has chapters');
        debugger;
        const qgs = output.chapters.reduce((cpAcc, chapter) => {
          return cpAcc.concat(chapter.sections.reduce((sAcc, section) => {
            return sAcc.concat(section.columns.reduce((cAcc, column) => {
              return cAcc.concat(column);
            }, []));
          }, []));
        }, []);
        yield all(qgs.map((questiongroupId) => call(questiongroupSaga, {id: questiongroupId, bulkDocs: bulkDocs})));
      }
      if(output) {
        yield put(outputActions.receive(output));
      }
      return output;
    }
    return outputs.byId[outputId];
      // Wait - what if it's not found? Shall we just not care?
  } catch (err) {
      yield put(outputActions.requestError(err));
  }
}

export const admin = [loadOutputSaga, persistOutputSaga];
export const clinical = [loadOutputSaga];
