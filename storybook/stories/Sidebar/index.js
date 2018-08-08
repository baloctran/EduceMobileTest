import { storiesOf } from '@storybook/react-native'
import React from 'react'
import Sidebar from '../../../src/screen/Sidebar'
import {data} from '../fixtures'

export default (module) => storiesOf('Sidebar', module)
  .add('Normal',
    () =>
      <Sidebar
        navigation={{}}
        identity = {data.identity.sue}
      />
  )

  .add('With dashboard selected',
    () =>
      <Sidebar
        navigation={{}}
        identity = {data.identity.sue}
        selected = {true}


      />
  )
  // .add('logging in', () => <Login navigation={{}} identity={{}} loginAction={action('Login')} validate={(d)=>action('Validate '+JSON.stringify(d))} />)
