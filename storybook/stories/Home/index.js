import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import { data } from './data'
import WithFonts from '../../hocs/WithFonts'

import H from '../../../src/screen/Home'
const Home = WithFonts(H)

export default (module) => {
  return storiesOf('Home', module)
  .add('Home', () => <Home
    navigation={{}}
    worklists={data.worklists}
    context={{date: new Date()}}
    graphData={data.graphData}
    setContextDate={action('activate date')}
    identity = {data.identity.sue}
    />
  )
}
