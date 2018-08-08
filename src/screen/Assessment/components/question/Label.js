import React from 'react'
import { View } from 'react-native'

const style = {}

export default class Label extends React.Component {

  render() {
    const { question, oneOf = 1 } = this.props
    return (
      <View style={{ width: (100 / oneOf) + '%' }}>
        {question.questionType !== 5 &&
          <Text className={style.label}>{question.question}</Text>
        }
      </View>
    )
  }
}
