import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native'
import styles from './styles'
export default class Number extends Component {


  render() {

    const { question, abbr } = this.props
    // let isWNL = (response.response === 'WNL') || false; // Initial value
    // console.log('Number', response, question);
    return (

      <Text >
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
