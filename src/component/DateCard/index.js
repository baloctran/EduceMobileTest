import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import { Card, CardItem, View, Text } from 'native-base'
import { FontAwesome,  } from '@expo/vector-icons'
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import styles from './styles'
import { logIt } from '../../../shared/redux/helpers/utils'


export default class DateCard extends React.Component {

  incrementDate() {
    const { date, setDate } = this.props
    setDate(moment(date).add(1, 'day'))
  }
  decrementDate() {
    const { date, setDate } = this.props
    setDate(moment(date).subtract(1, 'day'))
  }
  render() {
    const { date, setDate } = this.props
    if (!date || !setDate) return <View/>
    return (
      <Card style={styles.cardsView}>
        <CardItem button style={styles.cardsViews}>
          <View style={styles.datePickers}>


            <TouchableOpacity onPress={this.decrementDate.bind(this)}>
            <View style={styles.leftArrow} >
                <Text>{'<<'}</Text>
            </View>
            </TouchableOpacity>

            <DatePicker style={styles.date}
              showIcon={false}
              style={{ width: 150, borderWidth: 0 }}
              date={date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 0,
                  borderWidth: 0
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(date) => {
                if (typeof date === 'string') {
                  date = new Date(date)
                }
                setDate(date)
              }}
            />

            <TouchableOpacity onPress={this.incrementDate.bind(this)}>
            <View style={styles.rightArrow}>
                <Text>{'>>'}</Text>
            </View>

            </TouchableOpacity>
          </View>
        </CardItem>
      </Card>
    )
  }
}
