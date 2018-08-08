import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import styles from './styles'

export default class TextComponent extends Component {

  render() {
    const { question,abbr } = this.props

    return (


      <Text >
        {!abbr && question &&
          <Text style={styles.questions}>{question.abbr || question.question}</Text>
        }
        {abbr && question &&
          <Text style={styles.questions}>{question.abbr || question.question}</Text>
        }

      </Text>

    );
  }
}
