
import * as React from 'react'
import appCommonStyles from '../../appCommonStyles'
import { firstLetterOfString } from '../../../shared/helpers/utils'
import { View, Text } from 'react-native'

export default class FirstLetterInCircle extends React.Component {
  render () {
    const { word, assesment } = this.props
    return <View style={[appCommonStyles.nameIcon ]} >
      <Text style={[appCommonStyles.name, appCommonStyles.commonColor]}>{firstLetterOfString(word)}</Text>
    </View>
  }
}
