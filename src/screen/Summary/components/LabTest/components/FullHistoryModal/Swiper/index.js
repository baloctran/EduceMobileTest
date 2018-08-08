import React, { Component } from 'react'
import { Text, View } from 'native-base'
import styles from './styles'
import { FontAwesome } from '@expo/vector-icons'
import { Col, Row, Grid } from 'react-native-easy-grid'
import Swiper from 'react-native-swiper'
import { Question } from '../../../../../components'
import SwiperResponseGrid from './SwiperResponseGrid'
import {ColumnsOfThree} from '../../../../../../../../shared/helpers/utils'

export default class SwiperComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modifiedQuestionArray: [[]]
    }
  }
  componentDidMount () {
    const { questionGroupQG } = this.props
    if (questionGroupQG) {
      // const gridData = [[]]
      // const totalColumns = 3
      // let countColumns = 1
      // const length = questionGroupQG.questions.length
      // questionGroupQG.questions.map((question, key) => {
      //   gridData[gridData.length - 1].push(question)
      //   if (countColumns <= totalColumns) { countColumns++ }

      //   if (countColumns > totalColumns && key !== length - 1) {
      //     countColumns = 1
      //     gridData.push([])
      //   }
      // })
      this.setState({ modifiedQuestionArray: ColumnsOfThree(questionGroupQG.questions) })
    }
  }

  render () {
    const { questions, patient, instances, questiongroups, answers, responses, instancesOfQg, questionGroupQG, questiongroup } = this.props
    const dynamicHeightOfRows = instancesOfQg.length * 45 + 55
    return (
      <View style={styles.modalViews} >
        {questiongroup && questionGroupQG && questionGroupQG.includeTitle
          ? <Text style={styles.popupqgTitle}>
            <FontAwesome style={styles.flaskIcon} name={'flask'} />{questiongroup.title}
          </Text>
          : null
        }

        {this.state.modifiedQuestionArray && questionGroupQG &&
        <Swiper style={[styles.wrapper, { height: dynamicHeightOfRows }]}
          showsButtons={<View style={styles.showButtons} />} dot={<View style={styles.dot} />}
          activeDot={<View style={styles.dot} />}
          nextButton={<Text ><FontAwesome name="arrow-circle-o-right" size={16} /></Text>}
          prevButton={<Text ><FontAwesome name="arrow-circle-o-left" size={16} /></Text>}
          buttonWrapperStyle={styles.buttonWrapperStyle}
        >
          {
            this.state.modifiedQuestionArray.map((column, cKey) => {
              return (
                <View style={styles.slideOne}>
                  <Grid style={[styles.popTableHead]}>
                    <Row style={[styles.tableHeadOne]}>
                      <Col style={[styles.tableColumns]}>
                        <Text />
                      </Col>
                      {
                        column && column.map((question, qKey) => {
                          return (
                            <Col style={[styles.tableColumns]}>

                              <Question key={qKey}
                                questionId={question.id}
                                qgq={question}
                                questions={questions}
                                responses={responses}
                                answers={answers}
                                instances={instances}
                                abbr
                                type={'FullHistoryQuestions'}
                              />
                            </Col>
                          )
                        })
                      }
                    </Row>
                    <Row style={[styles.tableHeadTwo]}>
                      <SwiperResponseGrid column={column} instancesOfQg={instancesOfQg} responses={responses} />
                    </Row>
                  </Grid>
                </View>
              )
            })
          }

        </Swiper>
        }
        {!questionGroupQG &&
        <View>
          <Text>
                            No Data Provided
          </Text>
        </View>

        }
      </View>

    )
  }
}
