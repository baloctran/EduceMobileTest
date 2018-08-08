import React from 'react'
import { View } from 'react-native'
import AutoCompleteComponent from './AutoCompleteComponent'
import Date from './Date'
import Number from './Number'
import SelectComponent from './Select'
import Text from './Text'
import TextArea from './TextArea'
import Toggle from './Toggle'

//HOC to add PreviousResponseContainer
const WithPRC = (Question, props) => 
  <View>
    <Question {...props} />
  </View>

export default inputElement = (props) => {

  switch (props.question.inputType) {
    case 1: return WithPRC(Text, props)
    case 2: return WithPRC(TextArea, props)
    case 3: return WithPRC(SelectComponent, props)
    case 4: return WithPRC(Date, props)
    case 5: return WithPRC(Toggle, props)
    case 6: return WithPRC(Number, props)
    case 7: return WithPRC(AutoCompleteComponent, props)
    default: return WithPRC(Text, props)
  }
}
