export const data = {
  graphData: [
    { quarter: 1, earnings: 3000 },
    { quarter: 2, earnings: 19500 },
    { quarter: 3, earnings: 6250 },
    { quarter: 4, earnings: 19000 },
    { quarter: 5, earnings: 7000 }
  ],
  intervention: [
    {
      _id: 'andyboy',
      _rev: '12-38c17a065d6d0a314994e4c0c9bb552d',
      class: 'Patient',
      firstName: 'Andy',
      lastName: 'Boy',
      dateOfBirth: [
        '1994',
        '1',
        '11'
      ],
      NHI: 'CDE1234'
    }
  ],
  procedure: [
    {
      _id: 'P1',
      class: 'Procedure',
      name: 'Adrenalectomy - open',
      specialty: 'surgical',
      severity: 2,
      procedureType: 1
    },
    {
      _id: 'P2',
      class: 'Procedure',
      name: 'Laparotomy - other - specify',
      specialty: 'surgical',
      severity: 2,
      procedureType: 1
    }],

  worklists: [
    {
      _id: 'Worklist1',
      class: 'Worklist',
      location: 'Anaes-Clinic2',
      type: 'anaesthetic clinic',
      date: new Date(),
      time: '14:30',
      interventions: [
        {
          _id: 'andyboy',
          time: '10 AM'
        }
      ],
      staff: [
        {
          _id: 'don',
          role: 'Anaesthetist'
        }
      ]
    },
    {
      _id: 'Worklist2',
      location: 'Theater-Clinic2',
      type: 'Theater',
      date: new Date(),
      time: '10:30',
      interventions: [
        {
          _id: 'Shubham',
          time: '10 AM',
          procedure: '1'
        }
      ],
      staff: [
        {
          _id: 'don',
          role: 'Anaesthetist'
        }
      ]
    }
  ],
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
}