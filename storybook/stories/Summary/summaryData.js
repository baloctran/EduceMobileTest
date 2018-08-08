export const summaryData = {
  templateoutput: {

    '_id': 'anaesoutput',
    'class': 'Output',
    'name': 'Anaesthetic Summary',
    'sections': [
      {
        'title': 'General Findings',
        'component' :'GeneralFindings',
        'columns': [
          {
            'questiongroups': [
              {
                'questiongroup': 'genStatus',
                'includeTitle': false,
                'questions': [
                  {
                    'id': '14',
                    'selected': true
                  },
                  {
                    'id': '15',
                    'selected': true
                  },
                  {
                    'id': '16',
                    'selected': true
                  },
                  {
                    'id': '17',
                    'selected': true
                  },
                  {
                    'id': '18',
                    'selected': true
                  },
                  {
                    'id': '19',
                    'selected': true
                  },
                  {
                    'id': '20',
                    'selected': true
                  },
                  {
                    'id': '21',
                    'selected': true
                  },

                ]
              }
            ]
          },
        ]
      },
      {
        'title': 'Lab Result',
        'component' :'LabTest',
        'columns': [
          {
            'title': 'Labs',
            'questiongroups': [
              {
                'questiongroup': 'bioChem',
                'includeTitle': true,
                'questions': [
                  {
                    'id': '22',
                    'selected': true
                  },
                  {
                    'id': '23',
                    'selected': true
                  },
                  {
                    'id': '24',
                    'selected': true
                  },
                  {
                    'id': '25',
                    'selected': true
                  },
                  {
                    'id': '26',
                    'selected': true
                  },
                  {
                    'id': '27',
                    'selected': true
                  }
                ]
              },
              {
                'questiongroup': 'abgs',
                'includeTitle': true,
                'questions': [
                  {
                    'id': '28',
                    'selected': true
                  },
                  {
                    'id': '29',
                    'selected': true
                  },
                  {
                    'id': '30',
                    'selected': true
                  },
                  {
                    'id': '31',
                    'selected': true
                  },
                  {
                    'id': '32',
                    'selected': true
                  },
                  {
                    'id': '33',
                    'selected': true
                  }   

                ]
              }
            ]
          }

        ]
      },
      {
        'component': 'allChapters',
        'columns': [
          {
            'title': 'Surgical HX',
            'questiongroups': [
              {
                'questiongroup': 'pastProcedures',
                'includeTitle': true,
                'questions': [
                  {
                    'id': '1',
                    'selected': true
                  },
                  {
                    'id': '2',
                    'selected': true
                  },

                ]
              }

            ]
          },
          {
            'title': 'Medical HX',
            'questiongroups': [
              {
                'questiongroup': 'socialHx',
                'includeTitle': true,
                'questions': [
                  {
                    'id': '9',
                    'selected': true
                  },
                  {
                    'id': '10',
                    'selected': true
                  },
                  {
                    'id': '11',
                    'selected': true
                  },
                  {
                    'id': '12',
                    'selected': true
                  },
                  {
                    'id': '13',
                    'selected': true
                  }
                ]
              }
            ]
          },
          {
            'title': 'Surgical HX',
            'questiongroups': [
              {
                'questiongroup': 'pastProcedures',
                'includeTitle': true,
                'questions': [
                  {
                    'id': '1',
                    'selected': true
                  },
                  {
                    'id': '2',
                    'selected': true
                  },

                ]
              }

            ]
          },
          {
            'title': 'Surgical HX',
            'questiongroups': [
              {
                'questiongroup': 'pastProcedures',
                'includeTitle': true,
                'questions': [
                  {
                    'id': '1',
                    'selected': true
                  },
                  {
                    'id': '2',
                    'selected': true
                  },

                ]
              }

            ]
          },
        ]
      }
    ]
  },


  patient: {
    gordon: {
      _id: '1',
      firstName: 'Gordon',
      lastName: 'Brown',
      nhi: 'ABC1234',
      dateOfBirth:new Date('1976-03-03'),
      Gender: 'Male',
    },
    mavis: {
      _id: '2',
      firstName: 'Mavis',
      lastName: 'Johansen',
      nhi: 'XYZ1357',
      dateOfBirth: new Date('1962-03-03'),
      Gender: 'Male',

    }
  },
  intervention: {
    1: {
      patient: '1',
      procedure: '1',
      Surgeon: 'Don',
      SurgeonDate: new Date('2018-10-10'),
    },
    2: {
      patient: '2',
      procedure: '2',
      Surgeon: 'Don',
      SurgeonDate: [
        '1994',
        '1',
        '11'
      ],
    }
  },
  procedure: {
    1: { name: 'Hernia Repair' },
    2: { name: 'Cataract' },
    3: { name: 'Hysterectomy' },
    4: { name: 'Bowel Resection' },
  },
  matrixindicators : {
    bioChem : {
      '_id' : 'bioChem',
      'indicators' : [
        { 'text' : 'Na' },
        { 'text' : 'K' },
        { 'text' : 'Cl' , 'sup': '-' },
        { 'text' : 'HCO' , 'sub':'3' },
        { 'text' : 'Urea' },
        { 'text' : 'Creat' }
      ]
    },
    abgs : {
      '_id' : 'abgs',
      'indicators' : [
        { 'text' : 'Na' },
        { 'text' : 'K' },
        { 'text' : 'Cl' , 'sup': '-' },
        { 'text' : 'HCO' , 'sub':'3' },
        { 'text' : 'Urea' },
        { 'text' : 'Creat' }

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
    socialHx: {
      '_id': 'socialHx',
      'title': 'Social History',
      'questions': [
        ''
      ]
    },
    genStatus: {
      '_id': 'genStatus',
      'title': 'General Status',
      'questions': [
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21'
      ]
    },
    bioChem: {
      'icon':'flask',
      '_id': 'bioChem',
      'title': 'Bio Chemistry',
      'questions': [
        '22',
        '23',
        '24',
        '25',
        '26',
        '27'
      ]
    },
    abgs: {
      '_id': 'abgs',
      'title': 'ABGs',
      'questions': [
        '28',
        '29',
        '30',
        '31',
        '32',
        '33'
      ]
    },
    cardiac: {
      '_id': 'cardiac',
      'title': 'Cardiac',
      'questions': [
        'q_79',
        'q_80'
      ]
    },
    lungFunction: {
      '_id': 'lungFunction',
      'title': 'Lung Function',
      'questions': [
        'q_26',
        'q_27'
      ]
    },
  },

  question: {
    1: {
      '_id': '1',
      'question': 'Procedure',
      'abbr': 'proc',
      'questionType': 7,
      'classes': 'autocompleteCombobox',
      'ajax': 'procs',
      'inputType': 1,
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
      'inputType': 2
    },
    3: {
      '_id': '3',
      'question': 'Procedure Comments',
      'abbr': 'Proc Cmnt',
      'questionType': 2,
      'inputType': 1
    },
    4: {
      '_id': '4',
      'question': 'Co-morbidity / Diagnosis',
      'abbr': 'Co Diag',
      'questionType': 7,
      'classes': 'il autocompleteCombobox',
      'inputType': 1,
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
      'inputType': 1
    },
    6: {
      '_id': '6',
      'question': 'Summary',
      'questionType': 3,
      'classes': 'il',
      'inputType': 1,
      'answers': ['1fd6fa5a-4f6a-11e5-86d7-0800278d2167', '1fd6fc80-4f6a-11e5-86d7-0800278d2167', '1fd6fb4a-4f6a-11e5-86d7-0800278d2167', '1fd6fad2-4f6a-11e5-86d7-0800278d2167']
    },
    7: {
      '_id': '7',
      'question': 'Event Comment',
      'questionType': 2,
      'inputType': 1
    },
    8: {
      '_id': '8',
      'question': 'Diagnosis Date',
      'questionType': 4,
      'inputType': 2,
      'answers': ['1fd6e7c2-4f6a-11e5-86d7-0800278d2167', '1fd6e740-4f6a-11e5-86d7-0800278d2167', '1fd6e6be-4f6a-11e5-86d7-0800278d2167']
    },
    9: {
      '_id': '9',
      'question': 'Smoker',
      'questionType': 5,
      'neg': true,
      'inputType': 1
    },
    10: {
      '_id': '10',
      'question': 'Morning Cough',
      'questionType': 5,
      'neg': true,
      'inputType': 1
    },
    11: {
      '_id': '11',
      'question': 'Alcohol',
      'questionType': 5,
      'neg': true,
      'inputType': 1
    },
    12: {
      '_id': '12',
      'question': 'Drugs',
      'questionType': 5,
      'neg': true,
      'inputType': 1
    },
    13: {
      '_id': '13',
      'question': 'Social Comment',
      'questionType': 2,
      'inputType': 1
    },
    14: {
      '_id': '14',
      'question': 'Wt (kg)',
      'icon' :'bandcamp',
      'questionType': 6,
      'inputType': 5
    },
    15: {
      '_id': '15',
      'question': 'Ht (cm)',
      'icon' :'bandcamp',
      'questionType': 6,
      'inputType': 5
    },
    16: {
      '_id': '16',
      'question': 'PSAO2',
      'icon' :'ravelry',
      'questionType': 6,
      'inputType': 5
    },
    17: {
      '_id': '17',
      'question': 'BP',
      'questionType': 1,
      'icon' :'bandcamp',
      'inputType': 1,
      'inputAttribs': 'pattern=[0-9]{3}/[0-9]{3}'
    },
    18: {
      '_id': '18',
      'question': 'Pulse',
      'icon' :'heart',
      'questionType': 6,
      'inputType': 5
    },
    19: {
      '_id': '19',
      'question': 'JVP',
      'icon' :'product-hunt',
      'questionType': 1,
      'inputType': 5
    },
    20: {
      '_id': '20',
      'question': 'Oedema',
      'icon' :'bandcamp',
      'questionType': 3,
      'inputType': 1,
      'answers': ['1fd6da8e-4f6a-11e5-86d7-0800278d2167', '1fd6dc28-4f6a-11e5-86d7-0800278d2167', '1fd6dba6-4f6a-11e5-86d7-0800278d2167', '1fd6db1a-4f6a-11e5-86d7-0800278d2167']
    },
    21: {
      '_id': '21',
      'question': 'Bruits',
      'icon' :'viadeo',
      'questionType': 3,
      'inputType': 1,
      'answers': ['1fd70478-4f6a-11e5-86d7-0800278d2167', '1fd70590-4f6a-11e5-86d7-0800278d2167', '1fd70504-4f6a-11e5-86d7-0800278d2167']
    },
    22: {
      '_id': '22',
      'question': 'Haemoglobin',
      'questionType': 1,
      'abbr': 'Hgb',
      'inputType': 1
    },
    23: {
      '_id': '23',
      'question': 'U & Es',
      'questionType': 1,
      'abbr': 'U&Es',
      'wnl': true,
      'inputType': 1
    },
    24: {
      '_id': '24',
      'question': 'LFTs',
      'questionType': 1,
      'abbr': 'LFTs',
      'wnl': true,
      'inputType': 1
    },
    25: {
      '_id': '25',
      'question': 'INR/Coag',
      'questionType': 1,
      'abbr': 'INR/Coag',
      'wnl': true,
      'inputType': 1
    },
    26: {
      '_id': '26',
      'question': 'Checking Question',
      'abbr': 'CQ',
      'questionType': 1,
      'wnl': true,
      'inputType': 1
    },
    27: {
      '_id': '27',
      'question': 'Checking Question',
      'abbr': 'CQ',
      'questionType': 1,
      'wnl': true,
      'inputType': 1
    },
    28: {
      '_id': '28',
      'question': 'PO2',
      'abbr': 'po2',
      'questionType': 1,
      'inputType': 5
    },
    29: {
      '_id': '29',
      'question': 'PCO2',
      'abbr': 'pco2',
      'questionType': 1,
      'inputType': 5
    },
    30: {
      '_id': '30',
      'question': 'HCO3',
      'abbr': 'hco3',
      'questionType': 1,
      'inputType': 5
    },
    31: {
      '_id': '28',
      'question': 'PO2',
      'abbr': 'po2',
      'questionType': 1,
      'inputType': 5
    },
    32: {
      '_id': '29',
      'question': 'PCO2',
      'abbr': 'pco2',
      'questionType': 1,
      'inputType': 5
    },
    33: {
      '_id': '30',
      'question': 'HCO3',
      'abbr': 'hco3',
      'questionType': 1,
      'inputType': 5
    }

  },
  answer: {
    p1: { '_id': 'P1', 'class': 'Procedure', 'name': 'Adrenalectomy - open', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p2: { '_id': 'P2', 'class': 'Procedure', 'name': 'Laparotomy - other - specify', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p3: { '_id': 'P3', 'class': 'Procedure', 'name': 'Major ventral hernia ', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p4: { '_id': 'P4', 'class': 'Procedure', 'name': 'Breast Reconstruction', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p5: { '_id': 'P5', 'class': 'Procedure', 'name': 'Modified Radical Mastectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p6: { '_id': 'P6', 'class': 'Procedure', 'name': 'Simple Mastectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p7: { '_id': 'P7', 'class': 'Procedure', 'name': 'Subcutaneous Mastectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p8: { '_id': 'P8', 'class': 'Procedure', 'name': 'Wide excision / Quardantectomy', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p9: { '_id': 'P9', 'class': 'Procedure', 'name': 'Wide excision + Axillary dissection', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
    p10: { '_id': 'P10', 'class': 'Procedure', 'name': 'Coronary artery grafting', 'specialty': 'surgical', 'severity': 2, 'procedureType': 1 },
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
    hypertenison: {
      '_id': 'hypertension',
      'name': 'Hypertension',
      'class': 'Answer'
    },
    hypothyroidism: {
      '_id': 'hypothyroidism',
      'name': 'Hypothyroidism',
      'class': 'Answer'
    },
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
        'by': 'don@educe.nz',
      },
      b3: {
        '_id': 'b3',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '4',
        'instance': 'b2a',
        'answer': 'nstemi',
        'created': '2018-02-07T12:01:16+05:30',
        'by': 'don@educe.nz',
      },
      b4: {
        '_id': 'b4',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '7',
        'instance': 'b2a',
        'answer': "This is a long comment. About the NSTEMI, and all it's details that aren't otherwise captured.",
        'created': '2018-02-07T12:01:17+05:30',
        'by': 'don@educe.nz',
      },
      1: {
        '_id': '1',
        'patient': '1',
        'questiongroup': 'pastProcedures',
        'question': '1',
        'instance': '1a',
        'response': 'p1',
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
        'by': 'don@educe.nz',
      },
      3: {
        '_id': '3',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '4',
        'instance': '2a',
        'response': 'nstemi',
        'created': '2018-02-07T12:01:16+05:30',
        'by': 'don@educe.nz',
      },
      4: {
        '_id': '4',
        'patient': '1',
        'questiongroup': 'coMobDiag',
        'question': '7',
        'instance': '2a',
        'response': "This is a long comment. About the NSTEMI, and all it's details that aren't otherwise captured.",
        'created': '2018-02-07T12:01:17+05:30',
        'by': 'don@educe.nz',
      },
      5: {
        '_id': '5',
        'patient': '1',
        'questiongroup': 'pastProcedures',
        'question': '1',
        'instance': '2a',
        'response': 'p2',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      6: {
        '_id': '6',
        'patient': '1',
        'questiongroup': 'socialHx',
        'question': '9',
        'instance': '1a',
        'response': 'r1',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      7: {
        '_id': '7',
        'patient': '1',
        'questiongroup': 'socialHx',
        'question': '10',
        'instance': '1a',
        'response': 'r2',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      8: {
        '_id': '8',
        'patient': '1',
        'questiongroup': 'socialHx',
        'question': '11',
        'instance': '1a',
        'response': 'r3',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      9: {
        '_id': '9',
        'patient': '1',
        'questiongroup': 'socialHx',
        'question': '12',
        'instance': '1a',
        'response': 'r4',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      10: {
        '_id': '10',
        'patient': '1',
        'questiongroup': 'socialHx',
        'question': '13',
        'instance': '1a',
        'response': 'r5',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      11: {
        '_id': '11',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '14',
        'instance': '4a',
        'response': '76',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      12: {
        '_id': '12',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '15',
        'instance': '4a',
        'response': '09',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      13: {
        '_id': '13',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '16',
        'instance': '4a',
        'response': '23',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      14: {
        '_id': '14',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '17',
        'instance': '4a',
        'response': '67',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      15: {
        '_id': '15',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '18',
        'instance': '4a',
        'response': '10',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      16: {
        '_id': '16',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '19',
        'instance': '4a',
        'response': '10/67',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      17: {
        '_id': '17',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '20',
        'instance': '4a',
        'response': '10',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      18: {
        '_id': '18',
        'patient': '1',
        'questiongroup': 'General Status',
        'question': '21',
        'instance': '4a',
        'response': '100',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      19: {
        '_id': '19',
        'patient': '1',
        'questiongroup': 'bioChem',
        'question': '22',
        'instance': '5a',
        'response': '102',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      20: {
        '_id': '20',
        'patient': '1',
        'questiongroup': 'bioChem',
        'question': '23',
        'instance': '5a',
        'response': '30',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      21: {
        '_id': '21',
        'patient': '1',
        'questiongroup': 'bioChem',
        'question': '24',
        'instance': '5a',
        'response': '78',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      22: {
        '_id': '22',
        'patient': '1',
        'questiongroup': 'bioChem',
        'question': '25',
        'instance': '5a',
        'response': '25',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      23: {
        '_id': '23',
        'patient': '1',
        'questiongroup': 'bioChem',
        'question': '26',
        'instance': '5a',
        'response': '150',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      24: {
        '_id': '24',
        'patient': '1',
        'questiongroup': 'bioChem',
        'question': '27',
        'instance': '5a',
        'response': '175',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      25: {
        '_id': '25',
        'patient': '1',
        'questiongroup': 'abgs',
        'question': '28',
        'instance': '6a',
        'response': '200',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      26: {
        '_id': '26',
        'patient': '1',
        'questiongroup': 'abgs',
        'question': '29',
        'instance': '6a',
        'response': '215',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      27: {
        '_id': '27',
        'patient': '1',
        'questiongroup': 'abgs',
        'question': '30',
        'instance': '6a',
        'response': '225',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      28: {
        '_id': '28',
        'patient': '1',
        'questiongroup': 'abgs',
        'question': '31',
        'instance': '6a',
        'response': '235',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      29: {
        '_id': '29',
        'patient': '1',
        'questiongroup': 'abgs',
        'question': '32',
        'instance': '6a',
        'response': '245',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      },
      30: {
        '_id': '30',
        'patient': '1',
        'questiongroup': 'abgs',
        'question': '33',
        'instance': '6a',
        'response': '255',
        'by': 'don@educe.nz',
        'created': '2018-02-07T12:01:12+05:30'
      }


    }
  }
}

export const instancesWithResponses = {
  pastProcedures: [
    {
      dirty: false,
      blank: false,
      instance: '1a',
      questions: {
        1: '1',
        2: '2'
      },
      created: '2018-02-07T08:54:04.974Z'
    },
    {
      dirty: false,
      blank: false,
      instance: '2a',
      questions: {
        1: '5'

      },
      created: '2018-02-07T08:54:04.974Z'
    }
  ],
  coMobDiag: [
    {
      dirty: false,
      blank: false,
      instance: '2a',
      questions: {
        4: '3',
        7: '4'
      },
      created: '2018-02-07T08:54:04.974Z'
    }
  ],
  genStatus: [
    {
      dirty: false,
      blank: false,
      instance: '4a',
      questions: {
        14: '11',
        15: '12',
        16:'13',
        17:'14',
        18:'15',
        19:'16',
        20:'17',
        21:'18'
      },
      created: '2018-02-07T08:54:04.974Z'
    }
  ],
  bioChem: [
    {
      dirty: false,
      blank: false,
      instance: '5a',
      questions: {
        22: '19',
        23: '20',
        24:'21',
        25:'22',
        26 :'23',
        27:'24'

      },
      created: '2018-02-07T08:54:04.974Z'
    }
  ],
  abgs: [
    {
      dirty: false,
      blank: false,
      instance: '6a',
      questions: {
        28: '25',
        29: '26',
        30:'27',
        31:'28',
        32:'29',
        33:'30'
      },
      created: '2018-02-07T08:54:04.974Z'
    }
  ]
}

export const instancesBlankResponses = {
  pastProcedures: [
    {
      dirty: false,
      blank: false,
      instance: 'b1a',
      questions: {
        1: 'b1',
        2: 'b2'
      },
      created: '2018-02-07T08:54:04.974Z'
    }

  ],
  coMobDiag: [
    {
      dirty: false,
      blank: false,
      instance: 'b2a',
      questions: {
        4: 'b3',
        7: 'b4'
      },
      created: '2018-02-07T08:54:04.974Z'
    }
  ]
}