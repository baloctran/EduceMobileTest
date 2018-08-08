import React from 'react'
import { View } from 'react-native'
// import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text } from 'native-base'

export default class GeneralFindingsPreviousResponse extends React.Component {
  render() {
    const { response,answers } = this.props
    return (
      <View >
        {response.response &&
          <View>
            <Text> {response.response}</Text>

          </View>
        }
        {response.answer &&
          <View>
            <Text>{answers[response.answer].name}</Text>
          </View>
        }
      </View>

    )
  }
}
