import React, { Component, PropTypes } from 'react'
import styles from './styles'

export default class Text extends Component {

  render() {
    const { question,  abbr } = this.props
    
    return (
      <Text>
        {!abbr && question &&
          <Text style={styles.questions}>{question.question}</Text>
        }
        {abbr && question &&
          <Text style={styles.questions}>{question.abbr}</Text>
        }
      </Text>
    );
  }
}
