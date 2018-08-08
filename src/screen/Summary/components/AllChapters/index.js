import * as React from 'react'
import { View, Dimensions } from 'react-native'
import { Text, Left, Right, List, ListItem } from 'native-base'
import styles from './styles'
import { Questiongroup } from '../../components'
import { FontAwesome } from '@expo/vector-icons'
import Display from 'react-native-display'
const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class AllChapters extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showColumnSummary: false,
      tablet: false
    }
  }

  componentWillMount () {
    if (aspectRatio > 1.6)
      { this.setState({
      tablet: false
    })}
    else {this.setState({
      tablet: true
    })}
  }
  toggle () {
    this.setState({
      showColumnSummary: !this.state.showColumnSummary
    })
  }
  render () {
    const { questions, questiongroup, patient, instances, questiongroups, answers, responses, column } = this.props
    return (
      <View style={this.state.tablet ? styles.allChaptersColumn : null}>
        <ListItem style={styles.listHeader}>
          <Left style={styles.listSumLeft}>
            {this.state.tablet ? null
              : <FontAwesome
                onPress={() => this.toggle()}
                name={this.state.showColumnSummary ? 'minus-circle' : 'plus-circle'}
                style={styles.actionButtonIcon} />
            }

            {column &&
            <Text style={styles.chapterTitle}>{column.title.toUpperCase()}</Text>
            }
          </Left>
          <Right style={styles.listSumRight}>
            <FontAwesome name='pencil-square-o' style={styles.actionButtonEdit} />
          </Right>
        </ListItem>
        <Display style={styles.summaryAnswer} enable={this.state.showColumnSummary || this.state.tablet} >
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
                type={'AllChapters'}
              />
            )
          })}
        </Display>

      </View>

    )
  }
}
