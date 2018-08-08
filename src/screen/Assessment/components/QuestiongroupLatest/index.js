import React from 'react'
import { Question } from '../../components'
import { View } from 'react-native'
import stylesMediaQuery from '../Chapter/mediaStyle'
import GroupedInstanceHeader from '../GroupedInstanceHeader'

const mostRecentForQuestiongroup = (state, patientId, questiongroupId) => {
  if (state.responses.byPatient[patientId])
    if (state.responses.byPatient[patientId].mostRecent) {
      if (state.responses.byPatient[patientId].mostRecent[questiongroupId]) 
        return state.responses.byPatient[patientId].mostRecent[questiongroupId]
      
    }

}

export default class QuestiongroupLatest extends React.Component {

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
    const { questiongroup, questions, answers, responses, instances } = this.props
    const latestResponses = responses && responses.mostRecent ? responses.mostRecent[questiongroup._id] : {}

    return (
      <View>
        {questiongroup && questiongroup.questions &&
          <View style={stylesMediaQuery.questionAnswerContainer}>
            {questiongroup.questions.map((questionId, qKey) => {

              const question = questions[questionId]

              return <Question initial={qKey}
                key={`${questiongroup._id}-${questionId}/${question._id}`}
                question={question}
                response={latestResponses[questionId]}
                answers={answers}
                changeResponse={() => { }}
                responses={responses}
                questionId={questionId}
                instances={instances}
                changeable

              />
            }
            )}
          </View>
        }

        {/* The Below component is for Grouped previous instances for the questiongroup Latest type */}
        <GroupedInstanceHeader 
          instances= {instances}
          questiongroup={questiongroup}
          answers={answers}
          responses={responses}
          typeOfQuestionGroup ="Latest"
        />

      </View>
    )
  }
}
