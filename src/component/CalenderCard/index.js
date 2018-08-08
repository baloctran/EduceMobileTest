import * as React from 'react'
import { View } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'
import { Calendar } from 'react-native-calendars'

import styles from './styles'
export default class CalenderCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selected: '' }
    this.onDayPress = this.onDayPress.bind(this)
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    })
    this.props.changeSelectedDate(day)
  }

  render() {
    const {  setDate, changeSelectedDate } = this.props
    return (
      <View style={styles.calenderContainer} >
        <Calendar
          style={{ fontSize: 8, height: '80%' }}
          // Initially visible month. Default = Date()
          // current={'2012-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2018-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2020-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => { console.log('selected day', day); setDate; this.onDayPress(day) }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={(day) => { console.log('selected day', day) }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={' MMMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => { console.log('month changed', month) }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          renderArrow={(Direction) => {
            if (Direction === 'left') 
              return <FontAwesome name="long-arrow-left" color={'rgba(8,8,8,0.54)'} />
            
            if (Direction === 'right') 
              return <FontAwesome name="long-arrow-right" color={'rgba(8,8,8,0.54)'}  />
            
          }
          }

          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          //firstDay={1}
          // Hide day names. Default = false
          hideDayNames={false}
          // Show week numbers to the left. Default = false
          showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          onPressArrowRight={addMonth => addMonth()}
          markedDates={{
            [this.state.selected]: {
              selected: false, disableTouchEvent: true, periods: [
                { startingDay: false, endingDay: false, color: '#c44529' }
              ]
            }
          }}
          markingType="multi-period"
          theme={{
            arrowColor: 'rgba(8,8,8,0.54)',
            textDayFontSize: 13,
            textMonthFontSize: 14,
            monthTextColor: 'rgba(8,8,8,0.54)',
            textMonthFontWeight: '600',
            textDayHeaderFontSize: 12,
            textSectionTitleColor: 'rgba(0,0,0,0.87)'
          }}
        />
      </View>
    )
  }
}
