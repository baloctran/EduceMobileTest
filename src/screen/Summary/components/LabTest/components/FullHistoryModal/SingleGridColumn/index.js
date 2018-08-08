import React, { Component } from 'react'
import {  Text,  View } from 'native-base'
import { Row, Grid } from 'react-native-easy-grid'
import SwiperComponent from '../Swiper'

export default class SingleGridColumn extends Component {
  render () {
    const { instances, questiongroups, column } = this.props

    return (
      <Grid style={{ position: 'relative' }}>
        {column && column.questiongroups.map((qg, qKey) => {
          const instancesOfQg = instances[qg.questiongroup]
          const questiongroup = questiongroups[qg.questiongroup] || {}
          return (
            <Row size={25}>
              {instancesOfQg && questiongroup &&
              <SwiperComponent
                key={`${qKey}+${qg.questiongroup}`}
                questionGroupQG={qg}
                instancesOfQg={instancesOfQg}
                {...this.props}
                questiongroup={questiongroup}
              />
              }
            </Row>
          )
        })
        }
        {!column &&
        <View>
          <Text>No Data Provided!! Sorry </Text>
        </View>
        }
      </Grid>
    )
  }
}
