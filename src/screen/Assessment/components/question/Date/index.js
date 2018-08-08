import React from 'react'
import { View, Text,Dimensions } from 'react-native'
import { Item, Left } from 'native-base'
import styles from '../../QuestionsCommonStyles'
// const { height, width } = Dimensions.get('window')
import DatePicker from 'react-native-datepicker'
import stylesMediaQuery from '../../Chapter/mediaStyle'

export default class Date extends React.Component {

  componentWillUpdate(nextProps) {
    // console.log('DATE will update props', this.props, nextProps);
  }

  render() {
    const { question, response = {}, changeResponse, label = true, initial } = this.props

    const handleChange = (date) => {
      const updatedResponse = { ...response, response: date }
      this.props.changeResponse(updatedResponse)
    }

    return (
      <View style={styles.question}>

        <View style={styles.flexs}>
          <Left style={styles.flesSubComponent}>
            {label && question &&  <Text style={styles.questionhead} >{initial + 1}. {question.question}</Text>}
          </Left>
        </View>
        {response && response.response &&
          <Item style={stylesMediaQuery.inputBoxs}>
            <DatePicker style={[styles.inputBox, { width: '100%' }]}
              showIcon={true}
              iconSource={require('../../../../../assets/calendarIcon.png')}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  width: '100%'
                },
                dateIcon: {
                  padding: 10,
                  height: 'auto',
                  width: 20
                }
              }}
              date={response.response}
              mode="date"
              placeholder={question.placeholder || 'Your answer'}
              format="DD MM YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"

              onDateChange={() => handleChange(date)}
            />
          </Item>
        }
        {(!response || !response.response) &&
          <Item style={stylesMediaQuery.inputBoxs}>
            <DatePicker style={[styles.inputBox, { width: '100%' }]}
              showIcon={true}
              iconSource={require('../../../../../assets/calendarIcon.png')}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  width: '100%'
                },
                dateIcon: {
                  padding: 10,
                  height: 'auto',
                  width: 20
                }
              }}
              date={'29-09-2018'}
              mode="date"
              placeholder={question.placeholder || 'Your answer'}
              format="DD MM YYYY"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"

              onDateChange={() => handleChange(date)}
            />
          </Item>
        }

      </View>
    )
  }
}
