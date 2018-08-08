import * as React from 'react'
import styles from './styles'
import { View, Text } from 'react-native'
import FirstLetterInCircle from '../FirstLetterInCircle'
import NHI from '../NHI'

export default (props) => {
  const { patient } = props
  return (
    <View style={styles.patientName}>
      <FirstLetterInCircle word={patient.firstName} />
      <View style={styles.textViewPatient} >
        <Text style={styles.textOne} >{patient.firstName} {patient.lastName}</Text>
        {/* <Text note style={styles.textTwo} >NHI Number: {patient.nhi}</Text> */}
        <NHI patient = {patient}/>
      </View>
    </View>
  )
}
