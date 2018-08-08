import { call } from 'redux-saga/effects';
import { search as elasticSaga } from './elasticSearch';
import { search as pouchSaga } from './pouch';

export function* patientResponses(patientId) {
  const pouch = {
    selector: {
      patient: patientId,
      class: 'Response'
    },
    fields: [
      '_id'
    ]
  };

  const elastic = {
    query: {
      filtered: {
        query: {
          term: {patient: patientId}
        }
      }
    },
    filter: {
      term: {class: 'Response'}
    }
  };
  // debugger;
  // Each of these will drop it's results into state.search.pouch or state.search.elastic
  return yield [
    call(pouchSaga, pouch),
    // call(elasticSaga, elastic) // Temporarily disabled while elastic is out of action
  ];
}

export function* patient(patientDetails) {
  const pouch = {selector: {}};
  const should = [];
  let validSearch = false;

  patientDetails.forEach((element, key) => {
    if (element.length >= 3) {
      validSearch = true;
      pouch.selector[key] = {$eq: element};

      const shouldTerm = {term: {}};
      shouldTerm.term[key] = element.toLowerCase();
      should.push(shouldTerm);
    }
  });

  const elastic = {
    query: {
      filtered: {
        query: {
          bool: {
            should: should
          }
        }
      }
    },
    filter: {
      term: {class: 'Patient'}
    }
  };

/* This is what we're going for..
{"query":{
  "filtered":{
    "query":{
      "bool":{
        "should":[
          {term:{"firstName":"bo"}},
          {term:{"lastName":"peep"}}
        ]
      }
    },
    "filter":{
      "term":{"class":"patient"}
    }
  }
}}
*/

  //  Digest whatever properties of patient are provided, create a query from it, and submit

  // pouch  = {selector:{people: {$eq: identity._id}, date: {$gte: start, $lte: end}}};
  // var elastic = { //fields:['_id',],
  //   query:{match:{people:identity._id}}
  //     ]
  //   }}
  // };
  if (validSearch) {
    yield [
      call(pouchSaga, pouch),
      call(elasticSaga, elastic)
    ];
  }
}
