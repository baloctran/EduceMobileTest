import React from 'react'
import { Button } from 'native-base'
import { View, Text } from 'react-native'
import styles from './styles'

export default class Toggle extends React.Component {

  render() {
    const { question, response = { checked: false }, initial } = this.props
    const styleNames = () => {
      if (!question.neg && !response.checked)
        return styles.toggle
      if (!question.neg && response.checked)
        return styles.toggleChecked
      if (question.neg && !response.checked)
        return styles.toggleNeg
      if (question.neg && response.checked)
        return styles.toggleNegChecked
    }
    const handleChange = () => {
      event.preventDefault()
      const updatedResponse = { ...response, checked: response.checked ? false : true }

      this.props.changeResponse(updatedResponse)
    }


    return (
      <View>
        {question &&
          <Button style={[styles.base, styleNames()]} onClick={() => handleChange}><Text>{initial + 1}. {question.question}</Text></Button>
        }
      </View>
    )
  }
}
