import * as React from 'react'
import { View } from 'native-base'
import { ScrollView, Dimensions } from 'react-native'
import styles from './styles'
import MatrixTabItems from './components/MatrixTabItems'

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class LabTest extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      tablet: false
    }
  }

  componentWillMount () {
    if (aspectRatio > 1.6)
      this.setState({
        tablet: false
      })
    else
      this.setState({
        tablet: true
      })
  }
  render () {
    const { questions, questiongroup, patient, instances, questiongroups, answers, responses, matrixindicators } = this.props
    if (this.state.tablet === true)

      return (
        <View>
          <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={true} >
            <MatrixTabItems questiongroup={questiongroup}
              questiongroups={questiongroups}
              instances={instances}
              patient={patient}
              questions={questions}
              responses={responses}
              answers={answers}
              matrixindicators={matrixindicators}
            />
           
          </ScrollView>
        </View>
      )
    else
      return (
        <View>
          <MatrixTabItems questiongroup={questiongroup}
            questiongroups={questiongroups}
            instances={instances}
            patient={patient}
            questions={questions}
            responses={responses}
            answers={answers}
            matrixindicators={matrixindicators}
          />

        </View>
      )
  }
}
