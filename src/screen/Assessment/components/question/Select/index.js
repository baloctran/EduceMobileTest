import React from 'react'
import { View } from 'react-native'
import {  Text, Left } from 'native-base'
import stylesMediaQuery from '../../Chapter/mediaStyle'
import styles from '../../QuestionsCommonStyles'
import { Select, Option } from 'react-native-chooser'

export default class SelectComponent extends React.Component {

  render() {
    const { question, answers, response, label = true, initial } = this.props
    console.log('checking')
    console.log(this.props)
    const handleChange = (event) => {
      event.preventDefault()
      const updatedResponse = { ...response, answer: this.refs.select.value }
      this.props.changeResponse(updatedResponse)
    }
    return (
      <View className={styles.question}>

        <View style={styles.flexs}>
          <Left style={styles.flesSubComponent}>
            {label && question && <Text style={styles.questionhead} >{initial + 1}. {question.question}</Text>}
          </Left>

        </View>
        <View style={stylesMediaQuery.inputBoxs}>
          <Select
            onSelect={handleChange}
            indicatorIcon={true}
            indicator={'down'}
            transparent = {true}
            defaultText={question.placeholder  || 'Your answer'}
            style={[styles.inputBox,{ borderWidth:0,width:'100%' }]}
            optionListStyle={{ backgroundColor: '#fff', height: '20%' }}
            textStyle={{ paddingTop:5 }}
          >
            {question.answers && question.answers.map((answerId, key) => {
              const answer = answers[answerId]

              return <Option key={key} value={answer._id}>{answer.name}</Option>
            })}

          </Select>
        </View>
      </View>
    )
  }
}
