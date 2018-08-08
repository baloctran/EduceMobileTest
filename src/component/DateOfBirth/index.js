import React from 'react'
import moment from 'moment'
import { Text } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import styles from './style'

export default (props) => 
  <Text style={styles.patientCapTablet}>
    <FontAwesome name="birthday-cake" />{moment(props.patient.dateOfBirth).format('DD MMMM YYYY')}
  </Text>