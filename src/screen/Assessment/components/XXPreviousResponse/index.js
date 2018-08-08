import React from 'react';
import { View } from 'react-native';
// import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text, Right, Left, List, ListItem } from 'native-base';
import { QuestiongroupLatest, QuestiongroupMany } from '../../components';
import styles from "./styles"
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment'


export default class PreviousResponse extends React.Component {




  render() {
    const { response } = this.props

    console.log(this.props);


    return (
      <View>
        {response &&
          <View style={styles.row}>
            <View style={styles.timeline}>

              <View style={styles.line}>
                <View style={styles.bottomLine} />
              </View>
              <View style={styles.dot} />
            </View>
            <View style={styles.content}>
              <View>
                <Text style={styles.answerText}>{response.response}</Text>
                
                <View style={styles.answerGroup}>
                 <Left>
                 <Text note style={styles.answerCaption}>Taken By: {response.by} </Text>
                 </Left>
                 <Right>
                 <Text note style={styles.answerCaptions}> <FontAwesome name="calendar-check-o" /> {moment(response.created).format('MM-DD-YYYY, h:mm a')}
                </Text>
                 </Right>
               
                </View>
              </View>

            </View>
          </View>
        }


      </View>

    )
  }
}
