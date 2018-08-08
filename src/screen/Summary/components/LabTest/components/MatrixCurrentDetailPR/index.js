import React from 'react'
import { View } from 'react-native'
// import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text } from 'native-base'



export default class MatrixCurrentDetailPR extends React.Component {

  render() {
    const { response,answers } = this.props
    console.log(this.props)
    return (
      <View >
        {response && response.response && 
              <Text><Text ></Text> {response.response}</Text>
        }
        {response && response.answer &&
      
           <Text><Text></Text> {answers[response.answer].name}</Text>
        }
      </View>
    )
  }
}
