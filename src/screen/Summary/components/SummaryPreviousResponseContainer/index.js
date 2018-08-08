import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'
import GeneralFindingsPreviousResponse from '../GeneralFindingsPreviousResponse'
import AllChaptersPR from '../AllChaptersPR'
import MatrixCurrentDetailPR from '../LabTest/components/MatrixCurrentDetailPR'

export default class SummaryPreviousResponseContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { noOfResponses: 0 }
  }

  componentDidMount () {
    const { instances, questionId } = this.props
    if (instances !== undefined)
      instances.map((instance) => {

        if (instance.questions[questionId]) 
          this.setState(previousState => {
            return { noOfResponses: previousState.noOfResponses + 1 }
          })
      })
  }

  render () {
    const { instances, questionId, responses, type, answers } = this.props
    if (this.state.noOfResponses > 0)
      return (
        <View>
          {instances !== undefined && instances.map((instance, iKey) => {
            const response = responses[instance.questions[questionId]]
            if (type === 'GeneralFindings') 
              return <GeneralFindingsPreviousResponse key={iKey} response={response} noOfResponses={this.state.noOfResponses} answers={answers}/>

            else if(type === 'AllChapters') 
              return <AllChaptersPR key={iKey} response={response} noOfResponses={this.state.noOfResponses} answers={answers} />

            else
              return <MatrixCurrentDetailPR key={iKey} response={response} noOfResponses={this.state.noOfResponses} answers={answers} />

          })
          }
        </View>
      )
    else
      return <Text> No responses </Text>
  }
}
