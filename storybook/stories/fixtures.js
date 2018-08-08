export const data = {
  identity: {
    don: {
      '_id': 'don@educe.nz',
      'class': 'Identity',
      'firstName': 'Don',
      'lastName': 'Theobald',
      'access': {
        'Identity': true
      },
      'roles': {
        'Anaesthetist': {
          'inputs': [
            'anaestemplate'
          ],
          'summaries': [
            'anaessummary'
          ]
        },
        'Patients': true,
        'Calendar': true,
        'Administrator': true
      },
      'emailVerified': true,
      'approved': true,
      'authCode': 'test',
      'speciality' : 'ENT'
    },
    sue: {
      '_id': 'sue@educe.nz',
      'class': 'Identity',
      'firstName': 'Sue',
      'lastName': 'Mason',
      'access': {
        'Identity': true
      },
      'roles': {
        'Admission Nurse': {
          'templates': [
            'admittemplate1'
          ],
          'summaries': [
            'admitsummary1'
          ]
        },
        'Patients': true,
        'Calendar': true,
        'Administrator': true
      },
      'emailVerified': true,
      'approved': true,
      'authCode': 'test',
      'speciality' : 'Anaesthetist'
    }
  },
  patient: {
    gordon: {
      _id: '1',
      firstName: 'Gordon',
      lastName: 'Brown',
      NHI: 'ABC1234',
      dateOfBirth:new Date('1962-03-03'),
      from:'local'
    },
    mavis: {
      _id: '2',
      firstName: 'Mavis',
      lastName: 'Johansen',
      NHI: 'XYZ1357',
      dateOfBirth: new Date('1962-03-03'),
      from:'local'
    }
  },
  intervention: {
    1: {
      patient: '1',
      procedure: '1'
    },
    2: {
      patient: '2',
      procedure: '2'
    }
  },
  procedure: {
    1: { name: 'Hernia Repair' },
    2: { name: 'Cataract' },
    3: { name: 'Hysterectomy' },
    4: { name: 'Bowel Resection' }
  },
  worklist: {
    1: {
      location: 'Clinic2',
      type: 'Anaesthetic pre',
      date: new Date('28-03-2018'),
      time: '14:30',
      interventions: [
        {
          intervention: 1,
          time: '1430'
        },
        {
          intervention: 2,
          time: '1445'
        }
      ],
      staff: [
        {
          _id: 'don',
          role: 'Anaesthetist'
        }
      ]
    }
  },
  template: {
    anaestheticAssessment: {
      '_id': 'anaesPreAssess',
      'class': 'Template',
      'icon': '/img/induction.png',
      'name': 'Anaesthetic Pre-Assess',
      'chapters': [
        {
          'icon': 'medkit',
          'color':'#dfdddd',
          'title': 'Surgical History',
          'sections': [
            {
              'title': 'Surgical History',
              'columns': [
                [
                  'pastProcedures',
                  'smoker'
                ]
              ]
            }
          ]
        },
        {
          'icon': 'thermometer-4',
          'color':'#eeeeee',
          'title': 'Medical History',
          'sections': [
            {
              'title': 'Co-morbidities / Diagnoses',
              'columns': [
                [
                  'coMobDiag'
                ]
              ]
            },
            {
              'title': 'Co-morbidities / Diagnoses',
              'columns': [
                [
                  'funcStatus'
                ]
              ]
            }
            
          ]
        }
      ]
    }
  },
  questiongroup: {
    pastProcedures: {
      '_id': 'pastProcedures',
      'title': 'Procedures',
      'count': 'n',
      'autoAdd': true,
      'questions': [
        '1',
        '2',
        '3'
      ]
    },
    coMobDiag: {
      '_id': 'coMobDiag',
      'title': 'Co-morbidities / Diagnoses',
      'count': 'n',
      'autoAdd': true,
      'questions': [
        '4',
        '7',
        '6'
      ]
    },
    funcStatus: {
      '_id': 'funcStatus',
      'title': 'Functional Status',
      'questions': [
        '5',
        '4'
      ]
    },
    smoker: {
      '_id': 'smoker',
      'title': 'Smoking',
      'questions': [
        '9',
        '10'
      ]
    }
  },
  question: {
    1: {
      '_id': '1',
      'question': 'Procedure',
      'abbr': 'proc',
      'questionType': 7,
      'classes': 'autocompleteCombobox',
      'ajax': 'procs',
      'inputType': 7,
      'answers': [
        'P1',
        'P2',
        'P3',
        'P4',
        'P5',
        'P6',
        'P7',
        'P8',
        'P9',
        'P10'
      ],
      'commonAnswers': [
        'P3',
        'P5',
        'P8'
      ],
      'class': 'Question'
    },
    2: {
      '_id': '2',
      'question': 'Procedure Date',
      'abbr': 'Proc Date',
      'questionType': 4,
      'inputType': 4
    },
    3: {
      '_id': '3',
      'question': 'Procedure Comments',
      'abbr': 'Proc Cmnt',
      'questionType': 2,
      'inputType': 2
    },
    4: {
      '_id': '4',
      'question': 'Co-morbidity / Diagnosis',
      'placeholder' : 'Enter the Diagnosis here',
      'abbr': 'Co Diag',
      'questionType': 7,
      'classes': 'il autocompleteCombobox',
      'inputType': 7,
      'commonAnswers': [
        'nstemi',
        'iddm'],
      'answers': [
        'nstemi',
        'iddm',
        'hypothyroidism',
        'pe',
        'hypertension',
        'stemi',
        'asthma',
        'stroke',
        'niddm']
    },
    5: {
      '_id': '5',
      'question': 'Functional Status',
      'questionType': 2,
      'inputType': 2
    },
    6: {
      '_id': '6',
      'question': 'Summary',
      'questionType': 3,
      'classes': 'il',
      'inputType': 3,
      'answers': ['1fd6fa5a-4f6a-11e5-86d7-0800278d2167', '1fd6fc80-4f6a-11e5-86d7-0800278d2167', '1fd6fb4a-4f6a-11e5-86d7-0800278d2167', '1fd6fad2-4f6a-11e5-86d7-0800278d2167']
    },
    7: {
      '_id': '7',
      'question': 'Event Comment',
      'questionType': 2,
      'placeholder' : 'Enter Your Event Comments here',
      'inputType': 2
    },
    8: {
      '_id': '8',
      'question': 'Diagnosis Date',
      'questionType': 4,
      'inputType': 4,
      'answers': ['1fd6e7c2-4f6a-11e5-86d7-0800278d2167', '1fd6e740-4f6a-11e5-86d7-0800278d2167', '1fd6e6be-4f6a-11e5-86d7-0800278d2167']
    },
    9: {
      _id: '9',
      'question': 'Smoker',
      'questionType': 5,
      'neg': true,
      'inputType': 5,

    },
    10: {
      _id: 10,
      'question': 'Packs per day',
      'questionType': 6,
      'inputType': 6
    }
    // missing type 5 and 6 toggle and number
  },
  answer: {
    P1: { '_id': 'P1', 'class': 'Procedure', 'name': 'Adrenalectomy - open', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P2: { '_id': 'P2', 'class': 'Procedure', 'name': 'Laparotomy - other - specify', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P3: { '_id': 'P3', 'class': 'Procedure', 'name': 'Major ventral hernia ', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P4: { '_id': 'P4', 'class': 'Procedure', 'name': 'Breast Reconstruction', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P5: { '_id': 'P5', 'class': 'Procedure', 'name': 'Modified Radical Mastectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P6: { '_id': 'P6', 'class': 'Procedure', 'name': 'Simple Mastectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P7: { '_id': 'P7', 'class': 'Procedure', 'name': 'Subcutaneous Mastectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P8: { '_id': 'P8', 'class': 'Procedure', 'name': 'Wide excision / Quardantectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P9: { '_id': 'P9', 'class': 'Procedure', 'name': 'Wide excision + Axillary dissection', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    P10: { '_id': 'P10', 'class': 'Procedure', 'name': 'Coronary artery grafting', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    nstemi: {
      '_id': 'nstemi',
      'name': 'NSTEMI',
      'class': 'Answer'
    },
    stroke: {
      '_id': 'stroke',
      'name': 'Stroke',
      'class': 'Answer'
    },
    stemi: {
      '_id': 'stemi',
      'name': 'STEMI',
      'class': 'Answer'
    },
    pe: {
      '_id': 'pe',
      'name': 'PE',
      'class': 'Answer'
    },
    iddm: {
      '_id': 'iddm',
      'name': 'IDDM',
      'class': 'Answer'
    },
    niddm: {
      '_id': 'niddm',
      'name': 'NIDDM',
      'class': 'Answer'
    },
    asthma: {
      '_id': 'asthma',
      'name': 'Asthma',
      'class': 'Answer'
    },
    hypertension: {
      '_id': 'hypertension',
      'name': 'Hypertension',
      'class': 'Answer'
    },
    hypothyroidism: {
      '_id': 'hypothyroidism',
      'name': 'Hypothyroidism',
      'class': 'Answer'
    }
  },
  response: {
    gordon: {
      b1: {
        '_id': 'b1',
        'patient': '1',
        'questiongroup': 'pastProcedures',
        'question': '1',
        'instance': 'b1a',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      b2: {
        '_id': 'b2',
        'patient': '1',
        'questiongroup': 'pastProcedures',
        'question': '2',
        'instance': 'b1a',
        'created': '2018-02-07T12:01:13+05:30',
        'by': 'don@educe.nz'
      },
      b3: {
        '_id': 'b3',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '4',
        'instance': 'b2a',
        'answer': 'nstemi',
        'created': '2018-02-07T12:01:16+05:30',
        'by': 'don@educe.nz'
      },
      b4: {
        '_id': 'b4',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '7',
        'instance': 'b2a',
        'answer': "This is a long comment. About the NSTEMI, and all it's details that aren't otherwise captured.",
        'created': '2018-02-07T12:01:17+05:30',
        'by': 'don@educe.nz'
      },
      b5: {
        '_id': 'b5',
        'patient': '1',
        'questiongroup': 'funcStatus',
        'question': '5',
        'instance': 'b3a',
        'answer': "This is a long comment. About the NSTEMI, and all it's details that aren't otherwise captured.",
        'created': '2018-02-07T12:01:17+05:30',
        'by': 'don@educe.nz'
      },
      1: {
        '_id': '1',
        'patient': '1',
        'questiongroup': 'pastProcedures',
        'question': '1',
        'instance': '1a',
        'answer': '1',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      2: {
        '_id': '2',
        'patient': '1',
        'questiongroup': 'pastProcedures',
        'question': '2',
        'instance': '1a',
        'response': '2018-02-16',
        'created': '2018-02-07T12:01:13+05:30',
        'by': 'don@educe.nz'
      },
      3: {
        '_id': '3',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '4',
        'instance': '2a',
        'response': 'nstemi',
        'created': '2018-02-07T12:01:16+05:30',
        'by': 'don@educe.nz'
      },
      4: {
        '_id': '4',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '7',
        'instance': '2a',
        'response': "This is a long comment. About the NSTEMI, and all it's details that aren't otherwise captured.",
        'created': '2018-02-05T12:01:17+05:30',
        'by': 'don@educe.nz'
      },
      5: {
        '_id': '5',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '4',
        'instance': '3a',
        'answer': 'P1',
        'created': '2017-02-07T12:01:17+05:30',
        'by': 'don@educe.nz'
      },
      6: {
        '_id': '6',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '6',
        'instance': '3a',
        'response': 'Shubham',
        'created': '2016-02-07T12:01:17+05:30',
        'by': 'don@educe.nz'
      },
      7: {
        '_id': '7',
        'patient': '1',
        'questiongroup': 'funcStatus',
        'question': '5',
        'instance': '4a',
        'answer': 'nstemi',
        'created': '2016-02-07T12:01:17+05:30',
        'by': 'don@educe.nz'
      },
      8: {
        '_id': '6',
        'patient': '1',
        'questiongroup': 'funcStatus',
        'question': '4',
        'instance': '4a',
        'answer': 'stroke',
        'created': '2016-02-07T12:01:17+05:30',
        'by': 'don@educe.nz'
      }
    }
  }
}
