import React, { Component, PropTypes } from 'react'

import { TextComponent, Date, Number } from '../Question'
import { WithPRC } from './WithPRC'

export default class Question extends Component {
  render () {
    const { questions, responses, questionId, responseId, answers, type, abbr } = this.props // changeResponse, index
    const question = questions[questionId]
    const response = responses[responseId]
    switch (question.questionType) {
      case 1: return WithPRC(TextComponent, question, response, answers, this.props, type, abbr)
      case 2: return WithPRC(TextComponent, question, response, answers, this.props, type, abbr)
      case 3: return WithPRC(TextComponent, question, response, answers, this.props, type, abbr)
      case 4: return WithPRC(Date, question, response, answers, this.props, type, abbr)
      case 5: return WithPRC(TextComponent, question, response, answers, this.props, type, abbr)
      case 6: return WithPRC(Number, question, response, answers, this.props, type, abbr)
      case 7: return WithPRC(TextComponent, question, response, answers, this.props, type, abbr)
      default: return WithPRC(TextComponent, question, response, answers, this.props, type, abbr)
    }
  }
}
