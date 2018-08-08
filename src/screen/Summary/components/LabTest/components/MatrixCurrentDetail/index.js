import * as React from 'react'
import {  View } from 'native-base'
import { Questiongroup } from '../../../../components'
export default class MatrixCurrentDetail extends React.Component {
  render () {
    const { questions, qgvalue, patient, instances, questiongroups, answers, responses } = this.props
    return (
      <View>
        <Questiongroup
          questiongroups={questiongroups}
          outputQuestiongroup={qgvalue}
          patient={patient}
          allinstances={instances}
          questions={questions}
          responses={responses}
          answers={answers}
          type={'MatrixDetail'}
        />
      </View>

    )

  }
}
