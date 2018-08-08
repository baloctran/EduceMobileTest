import React, { Component } from 'react'
import { Question } from '../../components'
import { View, Text, Dimensions } from 'react-native'
import { Left, Right } from 'native-base'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class Questiongroup extends Component {

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

  render() {
    const { questions, outputQuestiongroup, patient, allinstances, questiongroups, answers, responses, type } = this.props
    const instances = allinstances[outputQuestiongroup.questiongroup]

    const questiongroup = this.props.questiongroups[outputQuestiongroup.questiongroup] || {}
    return (
      <View>
        {instances &&

          <View style={styles.qgBg}>
            {instances.length > 0 && outputQuestiongroup.includeTitle && type !== 'MatrixDetail' && <Text style={styles.qgTitle}>{questiongroup.title.toUpperCase()}</Text>}

            {
              instances.length > 0 && outputQuestiongroup.includeTitle && type === 'MatrixDetail' &&
              <View style={styles.matrixCurrentDetailHeader}>
                <Left style={styles.tableLeft} >
                  <View style={styles.leftTableView}>
                    <Left style={this.state.tablet ? null : styles.leftIcon}>
                      {!this.state.tablet &&
                        <FontAwesome size={16} name={questiongroup.icon} style={{ paddingRight: 5, paddingTop: 3 }} />
                      }
                      {this.state.tablet &&
                        <Text>
                          <FontAwesome size={16} name={questiongroup.icon} style={{ paddingRight: 5, paddingTop: 3 }} /><Text style={styles.testName}> {questiongroup.title}<Text note style={styles.testLabel}>  Fasting, may 2012 </Text></Text>
                        </Text>

                      }
                    </Left>
                    {!this.state.tablet &&
                      <Right style={styles.rightText}>
                        {questiongroup &&
                          <Text style={styles.testName}>{questiongroup.title}</Text>
                        }
                        <Text note style={styles.testLabel}>Fasting, may 2012 </Text>
                      </Right>
                    }
                  </View>
                </Left>            
                <Right style={styles.tableRight} >
                  <Text note style={styles.testLabel}> CURRENT RESULT </Text>
                </Right>

              </View>
            }

            <View >
              {outputQuestiongroup && outputQuestiongroup.questions.map((question, qKey) => {
                if (question.selected) 
                  return (
                    <Question key={qKey}
                      questionId={question.id}
                      qgq={question}
                      questions={questions}
                      responses={responses}
                      answers={answers}
                      instances={instances}
                      type={type}
                    />
                  )
                
                return ''
              })}
            </View>
          </View>
        }
        {!instances &&
          <Text note style={styles.noResponseText}> No Summary Data Yet </Text>
        }
      </View>
    )
  }
}
