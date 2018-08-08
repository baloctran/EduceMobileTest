import React from 'react'
import { View } from 'react-native'
import { Input, Button, Text, Left, Item } from 'native-base'
import styles from '../../QuestionsCommonStyles'
import stylesMediaQuery from '../../Chapter/mediaStyle'

export default class Number extends React.Component {


  render() {
    const { question, response = {}, label = true, initial } = this.props
    let isWNL = response.response === 'WNL' || false // Initial value
    const toggle = () => { isWNL = !isWNL }

    const handleChange = (event) => {
      event.preventDefault()
      const updatedResponse = { ...response, response: this.refs.resp.value }
      this.props.changeResponse(updatedResponse)
    }

    function numberInput() { // Plain number, no WNL available
      return (
        <View style={styles.flexs}>
          <Left style={styles.flesSubComponent}>
            {label &&  question && <Text style={styles.questionhead} >{initial + 1}. {question.question}</Text>}
          </Left>

          <Item style={stylesMediaQuery.inputBoxs}>
            <Input style={styles.inputBox} keyboardType="numeric" placeholderTextColor="grey" placeholder={question.placeholder || 'Your answer'} />
          </Item>
        </View>
      )
    }

    function wnlInput() {
      return (
        <View className={styles.question}>

          <View style={styles.flexs}>
            <Left style={styles.flesSubComponent}>
              {label && question && <Text style={styles.questionhead} >{initial + 1}. {question.question}</Text>}
            </Left>
          </View>
          <Input ref="resp" onChange={handleChange}  style={styles.inputBox}>{response.response}</Input>
          <Button onPress={() => toggle()} style={{ wnl: isWNL }}>WNL</Button>
        </View>
      )
    }
    // console.log('Rendering Number');
    if (!question.wnl) return numberInput()
    if (question.wnl) return wnlInput()
  }
}
