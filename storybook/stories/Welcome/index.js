import { storiesOf } from '@storybook/react-native'
import { linkTo } from '@storybook/addon-links'
import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

export default (module) => storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center'
    },
    header: {
      fontSize: 18,
      marginBottom: 18
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18
    }
  };

  showApp(event) {
    event.preventDefault()
    this.props.showApp()
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Welcome to Educe Native Storybook</Text>
        <Text style={this.styles.content}>
          This is a UI Component development environment. Here you can
          display and interact with your UI components as stories. A story is a single state of one
          or more UI components. 
        </Text>
          
        <Text style={this.styles.content}>
          You can have as many stories as you want. In other words a story is
          like a visual test case.
        </Text>
        <Text style={this.styles.content}>
          This will help to simplify and accellerate the development process. Because Stories do not 
          rely on couchdb, pouchdb, redux, sagas, DNS, IP addresses or networks at all, there is far 
          less involved in making things 'work'.
        </Text>
        <Text style={this.styles.content}>
          React is fundamentally about providing properties to components. Storybook does just that. 
          Nothing more, nothing less. If you need to test a UI component renders correctly with a 
          certain piece of data (state), then provide that data in a story, and see. There is no need
          to prime the database, or to log out, and back in. Which makes things MUCH quicker (and less
          fragile)
        </Text>
      </View>
    )
  }
}

Welcome.propTypes = {
  showApp: PropTypes.func
}
Welcome.defaultProps = {
  showApp: () => {}
}
