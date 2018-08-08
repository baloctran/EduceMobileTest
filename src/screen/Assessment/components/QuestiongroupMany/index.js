import React from 'react'
import { View } from 'react-native'

// import { Col, Row, Grid } from 'react-native-easy-grid'
import { Question } from '../../components'
import GroupedInstanceHeader from '../GroupedInstanceHeader'
import stylesMediaQuery from '../Chapter/mediaStyle'


export default class QuestiongroupMany extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showGroupedInstances: false
    }
  }

  toggle() {
    this.setState({
      showGroupedInstances: !this.state.showGroupedInstances
    })
  }

  render() {
    const { questiongroup, questions, responses, instances, changeResponse, answers } = this.props

    return (
      <View>
        {/* The Below component is for Grouped previous instances for the questiongroup Many type */}

        <GroupedInstanceHeader 
          instances= {instances}
          questiongroup={questiongroup}
          answers={answers}
          responses={responses}
          typeOfQuestionGroup ="Many"
        />
        {questiongroup &&

          <View style={stylesMediaQuery.questionAnswerContainer}>
            {/* <Text>Hello! {JSON.stringify(instance)}</Text> */}
            {questiongroup.questions.map((questionId, questionKey) => {
              const question = questions[questionId]
              return Question({
                key: `${questiongroup._id  }-${  questionId  }/${  question._id}`,
                question,
                response: {},
                labels: false,
                changeResponse,
                oneOf: questiongroup.questions.length,
                initial: questionKey,
                responses: responses,
                questionId: questionId,
                instances: instances,
                answers : answers
              })
            })}
          </View>
        }
      </View>
    )
  }
}
