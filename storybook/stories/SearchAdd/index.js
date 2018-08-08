import { storiesOf } from '@storybook/react-native'
import WithFonts from '../../hocs/WithFonts'
import React from 'react'
import S from '../../../src/screen/SearchAdd'
const SearchAdd = WithFonts(S)
import { data } from '../fixtures'

const patient = {
  gordon: {
    _id: '1',
    firstName: 'Gordon',
    lastName: 'Brown',
    nhi: 'ABC1234',
    dateOfBirth: new Date('1962-03-03'),
    from : 'Gov'
  },
  mavis: {
    _id: '2',
    firstName: 'Mavis',
    lastName: 'Johansen',
    nhi: 'XYZ1357',
    dateOfBirth: new Date('1962-03-03'),
    from : 'Gov'
  }
}

export default (module) => storiesOf('SearchAdd', module)
  .add('Fresh',
    () => <SearchAdd
      navigation={{}}
      patients={Object.values(data.patient)}
    />
  )

  .add('With Searching',
    () => <SearchAdd
      navigation={{}}
      patients={Object.values(data.patient)}
    />
  )

  .add('With Already existing patient',
    () => <SearchAdd
      navigation={{}}
      patients={Object.values(data.patient)}
    />
  )

  .add('With new patient from NHI Gov. ',
    () => <SearchAdd
      navigation={{}}
      patients={Object.values(patient)}
    />
  )
