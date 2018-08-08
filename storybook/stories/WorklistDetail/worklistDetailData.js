export const data = {

  interventions: {
    1: {
      patient: 'shubham',
      procedure: 'p1'
    },
    2: {
      patient: 'andyboy',
      procedure: 'p2'
    }
  },
  procedures: {
    'p1': {
      _id: 'P1',
      class: 'Procedure',
      name: 'Adrenalectomy - open',
      specialty: 'surgical',
      severity: 2,
      procedureType: 1
    },
    'p2': {
      _id: 'P2',
      class: 'Procedure',
      name: 'Laparotomy - other - specify',
      specialty: 'surgical',
      severity: 2,
      procedureType: 1
    }
  },

  worklists: {
    'Worklist1':
      {
        _id: 'Worklist1',
        class: 'Worklist',
        location: 'Anaes-Clinic2',
        type: 'Anaesthetic Clinic',
        date: new Date(),
        time: '14:30 PM',
        interventions: [
          {
            _id: 2,
            time: '29/03/18(10 AM)'
          }
        ],
        staff: [
          {
            _id: 'don',
            role: 'Anaesthetist'
          }
        ]
      },
    'Worklist2': {
      _id: 'Worklist2',
      location: 'Theater-Clinic2',
      type: 'Theater',
      date: new Date(),
      time: '10:30 AM',
      interventions: [
        {
          _id: 1,
          time: '29/03/18(9 AM)',
          procedure: 'P1'
        },
        {
          _id: 2,
          time: '29/03/18(12 AM)',
          procedure: 'P2'
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

  patients: {
    'shubham': {
      _id: 'shubham',
      firstName: 'Shubham',
      lastName: 'Kumar',
      NHI: 'ABC1234',
      dateOfBirth: new Date('1962-03-03')
    },
    'andyboy': {
      _id: 'andyboy',
      firstName: 'andyboy',
      lastName: 'andyboy',
      NHI: 'XYZ1357',
      dateOfBirth: new Date('1962-03-03')
    }
  }
}
