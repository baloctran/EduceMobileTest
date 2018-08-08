import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import WithFonts from '../../hocs/WithFonts'
import React from 'react'

import L from '../../../src/screen/Login'
const Login = WithFonts(L)

// import { identity } from '../fixtures'

export default (module) => storiesOf('Login', module)
  .add('Fresh',
    () => <Login
      navigation={{}}
      identity={{
        validations: {},
        credentials: {}
      }}
      loginAction={action('Login')}
      validate={(d) => action(`Validate ${JSON.stringify(d)}`)} />
  )
  .add('invalid email',
    () => <Login
      navigation={{}}
      identity={{
        credentials: { email: 'nope@nope' },
        validations: { emailError: true, passwordError: false }
      }}
      loginAction={action('Login')}
      validate={(d) => action(`Validate ${JSON.stringify(d)}`)} />
  )
  .add('invalid password',
    () => <Login
      navigation={{}}
      identity={{
        credentials: { email: 'don@educe.nz', password: 'nope' },
        validations: { emailError: false, passwordError: true }
      }}
      loginAction={action('Login')}
      validate={(d) => action(`Validate ${JSON.stringify(d)}`)} />
  )
  .add('all valid',
    () => <Login
      navigation={{}}
      identity={{
        credentials: { email: 'don@educe.nz', password: 'goodgood' },
        validations: { emailError: false, passwordError: false }
      }}
      loginAction={action('Login')}
      validate={(d) => action(`Validate ${JSON.stringify(d)}`)} />
  )
  .add('logging in', () => <Login
    navigation={{}}
    identity={
      {
        loggedIn: false,
        loggingIn: true, 
        credentials: { email: 'don@educe.nz', password: 'goodgood' },
        validations: { emailError: false, passwordError: false }
      }
    }
    loginAction={action('Login')}
    validate={(d) => action(`Validate ${JSON.stringify(d)}`)} />
  )
