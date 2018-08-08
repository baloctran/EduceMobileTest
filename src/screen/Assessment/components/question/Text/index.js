import React from 'react'
import { View, Text } from 'react-native'
import { Input, Item, Left } from 'native-base'
import styles from '../../QuestionsCommonStyles'
import stylesMediaQuery from '../../Chapter/mediaStyle'
export default class TextInput extends React.Component {
 
  render() {
    const { question = {}, response = {}, label = true, changeResponse, initial = 0 } = this.props
    const handleChange = (event) => {
      event.preventDefault()
      const updatedResponse = { ...response, response: event.target.value }
      changeResponse(updatedResponse)
    }
    // This needs some styling to make the input actually appear I think.
    return (
      <View style={styles.question}>
        <View style={styles.flexs}>
          <Left style={styles.flesSubComponent}>
            {label &&  question && <Text style={styles.questionhead} >{initial + 1}. {question.question}</Text>}
          </Left> 
        </View>
        <Item style={stylesMediaQuery.inputBoxs}>
          <Input style={styles.inputBox} onChange={handleChange} placeholderTextColor="grey" placeholder={question.placeholder  || 'Your answer'} value={(response.response ? response.response : '')} />
        </Item>
      </View>
    )
  }
}
