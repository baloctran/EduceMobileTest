import * as React from 'react'
import {  Text, View } from 'native-base'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styles from './styles'

export default class TabletRightComponent extends React.Component {

  render() {

    return (

      <View style={styles.messageContainer}>
        <View style={styles.msgContainer}>
          <Text style={styles.white}><Ionicons name="ios-chatbubbles" color="#fff" size={16} /> Messages</Text>
        </View>

        <View style={styles.messageAnswer}>
          <View style={styles.msgDiv} >
            <Text style={styles.msgAns}> Random data </Text>
            <Text note style={styles.msgDate}> Gibson <FontAwesome name="clock-o" color="rgba(0,0,0,.54)" /> 2 hrs ago </Text>
          </View>
          <View style={styles.msgDiv} >
            <Text style={styles.msgAns}> Random data </Text>
            <Text note style={styles.msgDate}> Gibson <FontAwesome name="clock-o" color="rgba(0,0,0,.54)" /> 2 hrs ago </Text>
          </View>
        </View>
      </View>
    )
  }
}
