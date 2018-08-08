import React, { Component, PropTypes } from 'react'

import { Text } from 'react-native'
import styles from './styles'

export default class Toggle extends Component {

  render() {
    const { question,response,answer, abbr } = this.props
    
    // console.log('QUESTION', question.classes);
    return (
      <Text>
        {question && <Text >{question.question}</Text>}
        
        {abbr && question &&
          <Text style={styles.questions}>{question.abbr}</Text>
        }
      </Text>
    )
  }
}
      //  <h3>{JSON.stringify(question.classes)}</h3>
      //  {question.classes == 'pos' && <h3>{question.question}<i className="fa fa-check" /></h3>}
      //  {question.classes == 'neg' && <h3>{question.question}<i className="fa fa-times" /></h3>}
        // {response.checked && <button className={className}>{question.question}</button>}
