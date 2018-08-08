import React, { Component, PropTypes } from 'react'
import { View } from 'react-native'
import {
  Left,
  Right,
  Text

} from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'
import Dash from 'react-native-dash'

import SummaryPreviousResponseContainer from '../../SummaryPreviousResponseContainer'

const colorcode = () => {
  const code = `rgba(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${1})`
  return code
}
// TextComponentArea, Select, Autocomplete
const GeneralFindingQRRow = (question, response, answers, props, Question, type) =>
  <View style={styles.generalFindingQrRow}>
    <Left style={styles.singleQuestion}>
      <FontAwesome size={16} name={question.icon} style={[styles.icon, { color: colorcode() }]} />
      <Text style={styles.sumQueTitle}><Question question={question} response answers={answers} /></Text>
    </Left>
    <Dash style={styles.dashLineGeneralFinding} dashGap={3} dashLength={6} dashColor={'#d4d4d4'} dashThickness={1} />
    <Right style={styles.singleQuestions}>
      <SummaryPreviousResponseContainer {...props} type={type} />
    </Right>
  </View>
// Single row with question and its response for the MatrixCurrentDetail component
const MatrixCurrentDetailQRRow = (question, response, answers, props, Question, type) =>
  <View style={styles.generalFindingQrRow}>
    <Left style={styles.singleQuestion}>
      <Text style={styles.square}>{'\u25A0'}</Text>
      <Text style={styles.sumQueTitle}><Question question={question} response answers={answers} /></Text>
    </Left>
    <Dash style={styles.dashLine} dashGap={3} dashLength={6} dashColor={'#d4d4d4'} dashThickness={1} />
    <Right style={styles.matrixData}>
      <SummaryPreviousResponseContainer {...props} type={type} />
    </Right>
  </View>

export const WithPRC = (Question, question, response, answers, props, type, abbr) =>
  <View>
    {
      type === 'GeneralFindings' && question && GeneralFindingQRRow(question, response, answers, props, Question, type) //* when type is general findings from questiongroup, this function will be executed */
    }
    {
      type === 'MatrixDetail' && question && MatrixCurrentDetailQRRow(question, response, answers, props, Question, type) //* when type is general findings from questiongroup, this function will be executed */
    }
    {type === 'AllChapters' && question && // This is type is for AllChapters for rendering question and its responses - according to the design.
      <View style={styles.sumaryQesResponse}>
        <Text style={styles.questions}><Question question={question} response answers={answers} /></Text>
        <View style={styles.response}><SummaryPreviousResponseContainer {...props} type={type} /></View>
      </View>
    }
    {type === 'FullHistoryQuestions' && // This type is for fullhistorymodal - questions, it will render individual question from here in the row of the modal
      <Text style={styles.fullHistoryQuestion}>
        {question &&
        <Question question={question} response answers={answers} abbr={abbr} />
        }
      </Text>
    }
  </View>
