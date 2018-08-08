import React from 'react'
import { View } from 'react-native'
// import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text, Right, Left } from 'native-base'
import moment from 'moment'
import styles from './styles'



export default class AllChaptersPR extends React.Component {

  render() {
    const { response, answers } = this.props
    console.log(this.props)
    return (
      <View>
        {response && response.response &&
          <View  style={styles.responseView} >
            <Left style={styles.responseLeft}>
              <Text style={styles.summaryResponseTitle}><Text style={styles.squareSum}>{'\u25A0'}</Text> {response.response}</Text>
            </Left>
            <Right  style={styles.responseRight}>
              <Text note style={styles.lastUpdate} > {moment(response.created).fromNow()}</Text>
            </Right>
          </View>

        }
        {response && response.answer &&
         <View style={styles.responseView}>
           <Left style={styles.responseLeft}>
             <Text style={styles.summaryResponseTitle}><Text style={styles.squareSum}>{'\u25A0'}</Text> {answers[response.answer].name}</Text>
           </Left>
           <Right style={styles.responseRight}>
             <Text note style={styles.lastUpdate}> {moment(response.created).fromNow()}</Text>
           </Right>
         </View>

        }
      </View>

    )
  }
}
