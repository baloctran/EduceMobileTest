import * as React from 'react'
import { Text } from 'react-native'
import styles from './style'

export default (props) => 
  <Text style={styles.patientLabelTablet2}>NHI: {props.patient.NHI}</Text>