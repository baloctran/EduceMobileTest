import React from 'react'
import { Text } from 'native-base'

export default class GroupedInstance extends React.Component {

  render() {
    console.log(this.props)
    const { responses, responseID, answers } = this.props
    const response = responses[responseID]

    return (
      <Text>
        {response && response.response &&
                    <Text style={{ fontSize: 13 }} >{response.response}</Text>
        }
        {
          response && response.answer &&
                    <Text style={{ fontSize: 13 }} >{answers[response.answer].name}</Text>
        }
      </Text>
    )

  }
}
