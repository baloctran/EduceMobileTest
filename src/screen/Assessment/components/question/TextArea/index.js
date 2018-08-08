import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { Item, Left } from 'native-base'
import styles from '../../QuestionsCommonStyles'
import stylesMediaQuery from '../../Chapter/mediaStyle'

export default class TextArea extends React.Component {

  render() {
    const { question, label = true, response, initial } = this.props
    // console.log('TEXTAREA', this.props)
    // const response = this.props.response || {response: 'THIS IS BROKEN'}

    const handleChange = (event) => {
      event.preventDefault()
      const updatedResponse = { ...response, response: this.refs.resp.value }
      this.props.changeResponse(updatedResponse)
    }

    return (
      <View style={styles.question}>
        <View style={styles.flexs}>
          <Left style={styles.flesSubComponent}>
            {label && question && <Text >{initial + 1}. {question.question}</Text>}
          </Left>

        </View>
        <Item style={stylesMediaQuery.inputBoxs}>
          <TextInput style={styles.inputBox} placeholder={question.placeholder  || 'Your answer'}
            placeholderTextColor="grey"
            onChange={handleChange}
            defaultValue={''} />
        </Item>

      </View>
    )
  }
}
// className={styles.element + ' ' + taStyles.textarea}
