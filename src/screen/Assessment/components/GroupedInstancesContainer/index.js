import React from 'react'
import { View, Dimensions } from 'react-native'
import { Text, Right, Left } from 'native-base'
import styles from './styles'
import GroupedInstance from '../GroupedInstance'
import moment from 'moment'
import { Row, Grid } from 'react-native-easy-grid'

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class GroupedInstancesContainer extends React.Component {

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
    console.log(this.props)
    const { instance, responses, questiongroup, answers, response } = this.props
    const { tablet } = this.state
    const length = instance.questions.length
    return (
      <View style={styles.answerCon} >
        {tablet &&
          <Left style={styles.answerLeft}>
            <Text style={{ flexDirection: 'row' }}>
              {questiongroup &&
                questiongroup.questions.map((questionID, qKey) => {
                  const responseID = instance.questions[questionID]
                  if (responseID !== undefined) 
                    return <Text style={styles.textAnswer}>{(qKey ? ',  ' : '')}
                      <GroupedInstance
                        responses={responses}
                        response={response}
                        responseID={responseID} 
                        answers={answers}
                      />
                    </Text>

                  else 
                    return null
                  
                })
              }
            </Text>
          </Left>
        }
        {instance && tablet &&
          <Right style={styles.answerRight}>
            <Text style={styles.textDate}>
              {moment(instance.created).format('MM-DD-YYYY')}
            </Text>
          </Right>
        }
        {!tablet &&
          <Grid>
            <Row>
              <Text style={styles.textDate}>
                {moment(instance.created).format('MM-DD-YYYY')}
              </Text>
            </Row>
            <Row>
              <Text style={{ flexDirection: 'row' }}>
                {questiongroup &&
                  questiongroup.questions.map((questionID, qKey) => {
                    const responseID = instance.questions[questionID]
                    if (responseID !== undefined) 
                      return <Text style={styles.textAnswer}>{(qKey ? ',  ' : '')}
                        <GroupedInstance 
                          responses={responses} 
                          response={response}
                          responseID={responseID}
                          answers={answers} 
                        />
                      </Text>
                    else 
                      return null
                  })
                }
              </Text>
            </Row>
          </Grid>
        }
      </View>
    )
  }
}
