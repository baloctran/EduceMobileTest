import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native'
import styles from './styles'
export default class Date extends Component {

  componentWillUpdate(nextProps) {
    // console.log('DATE will update props', this.props, nextProps);
  }

  render() {

    const { question,  abbr } = this.props
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
