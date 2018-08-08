import * as React from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import styles from './styles'
import { Questiongroup } from '../../components'

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class GeneralFindings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tablet: false
    }
  }

  componentWillMount() {
    if (aspectRatio > 1.6) 
      this.setState({
        tablet: false
      })
    else 
      this.setState({
        tablet: true
      })
    
  }
  render() {

    const { questions, questiongroup, patient, instances, questiongroups, answers, responses } = this.props
    if (this.state.tablet === true) 
      return (

        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={true}>
          <View style={styles.generalView}>
            {questiongroup && questiongroup.map((qg, qgKey) => {
              return (
                <Questiongroup key={qgKey}
                  questiongroups={questiongroups}
                  outputQuestiongroup={qg}
                  patient={patient}
                  allinstances={instances}
                  questions={questions}
                  responses={responses}
                  answers={answers}
                  type={'GeneralFindings'}
                />
              )
            })}
          </View>
        </ScrollView>

      )
    else 
      return (
        <View style={styles.generalView}>
          {questiongroup && questiongroup.map((qg, qgKey) => {
            return (
              <Questiongroup key={qgKey}
                questiongroups={questiongroups}
                outputQuestiongroup={qg}
                patient={patient}
                allinstances={instances}
                questions={questions}
                responses={responses}
                answers={answers}
                type={'GeneralFindings'}
              />
            )
          })}
        </View>
      )
    
  }
}
