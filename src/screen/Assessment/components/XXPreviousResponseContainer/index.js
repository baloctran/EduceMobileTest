import React from 'react';
import { View } from 'react-native';
import { Text, Right, Left, List, ListItem } from 'native-base';
import styles from "./styles"
import { FontAwesome } from '@expo/vector-icons';
import PreviousResponse from '../PreviousResponse'


export default class PreviousResponseContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { noOfResponses: 0 };
  }

  componentDidMount() {
    const { instances, questions, questionId, responses } = this.props

    if (instances !== undefined) {
      instances.map((instance, iKey) => {

        if (instance.questions[questionId]) {
          this.setState(previousState => {
            return { noOfResponses: previousState.noOfResponses + 1 };
          })
        }
      })
    }
  }

  render() {
    console.log(this.props)
    const { instances, questions, questionId, responses } = this.props
    if (this.state.noOfResponses > 0) {
      return (
        <View>
          {instances !== undefined && instances.map((instance, iKey) => {
            const response = responses[instance.questions[questionId]];
            return <PreviousResponse key={iKey} response={response} noOfResponses={this.state.noOfResponses} />

          })
          }
        </View>
      )

    } else {
      return (<View style={styles.row}><Text> No responses </Text></View>)

    }
  }
}
