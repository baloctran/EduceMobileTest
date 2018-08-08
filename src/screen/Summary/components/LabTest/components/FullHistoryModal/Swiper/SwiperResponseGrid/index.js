import React, { Component } from 'react'
import { Text } from 'native-base'
import styles from './styles'
import { Col, Row, Grid } from 'react-native-easy-grid'
import moment from 'moment'
import Dash from 'react-native-dash'

export default class SwiperResponseGrid extends Component {
  render () {
    const { responses, instancesOfQg, column } = this.props
    return (

      <Grid >
        {instancesOfQg &&
                           instancesOfQg.map((instance, iKey) => {
                             return (
                               <Row style={[styles.tableHeadThree]}>
                                 <Col style={[styles.tableColumns]}>
                                   <Text style={styles.tableColumnsText}>{moment(instance.created).format('MMM Do YYYY')}</Text>
                                 </Col>
                                 {
                                   column.map((question, qKey) => {
                                     return (
                                       <Col style={[styles.tableColumnNew, qKey % 2 === 0 ? styles.evenColBackgroundColor : null]}>
                                         <Col style={{ width: '1%' }} >
                                           <Dash style={styles.dashLine} dashThickness={1} dashGap={4} dashLength={4} dashColor={'#d4d4d4'} />
                                         </Col>
                                         <Col style={styles.colSecTwo} >
                                           <Text style={styles.tableColumnsTexts}>{responses[instance.questions[question.id]].response || '-'}</Text>
                                         </Col>
                                       </Col>
                                     )
                                   })
                                 }
                               </Row>
                             )
                           })
        }
      </Grid>
    )
  }
}
