import * as React from 'react'
import { Text, View} from 'native-base'
import { Dimensions } from 'react-native'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { ComputeMatrixValues } from '../ComputeMatrixValues'


import styles from './styles'

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

const columnOfTwoResponses = (response1, response2, key) =>
  <Row key={key}>
    <Col style={styles.matColVal} >
      <Text style={styles.matVals}>{response1.response} <Text style={styles.indicator}>{response1.indicator.text}
        <Text style={{ fontSize:14 * 1.6, color: 'rgba(0,0,0,0.54)' ,fontWeight:'normal', lineHeight:22 * 1.1, textAlignVertical: 'top',textAlignVertical :'left' }}>
          {response1.indicator.sub || response1.indicator.sup }
        </Text>
      </Text>
      </Text>

      <View style={styles.matBotLine}>

      </View>
      <Text style={styles.matVals}>{response2.response} <Text style={styles.indicator}>{response2.indicator.text}
        <Text style={{ fontSize:7 * 1.6, color: 'rgba(0,0,0,0.54)', lineHeight:22 * 1.1,paddingTop:40, textAlignVertical:  response2.indicator.sup ? 'top' : 'bottom' }}>
          {response2.indicator.sub || response2.indicator.sup }
        </Text>
      </Text>
      </Text>

    </Col>


  </Row>


export default class Matrix3 extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      tablet: false
    }
  }
  componentWillMount () {
    if (aspectRatio > 1.6)
      this.setState({
        tablet: false
      })
    else
      this.setState({
        tablet: true
      })
  }

  render () {
    const { questions, outputQuestiongroup,  instances, questiongroups, responses, questiongroupWithTitle, indicator } = this.props
    const matrixResponse = ComputeMatrixValues(outputQuestiongroup, questiongroups, instances, questions, responses, indicator)
    return (
      <View style={{ position: 'relative' }}>

        <View style={this.state.tablet ? styles.matrixViewTabletArea : styles.matrixViewMobileArea}>
          {questiongroupWithTitle && outputQuestiongroup.includeTitle &&
            <Grid>
              {/* <Col style={ this.state.tablet ? styles.labTestMatrixTitle : styles.labTestMatrixTitleMobile }>

                <Text style={styles.labTestMatrixText}>{questiongroupWithTitle.title}</Text>

              </Col> */}

              <Col style={this.state.tablet ? { paddingLeft: 15, width: '80%' } : { width: '90%', paddingLeft: 15 }} >
                <View style={this.state.tablet ? styles.matrixViewTablet : styles.matrixViewMobile}>
                  {matrixResponse &&
                    <Grid style={{ flexDirection: 'row', position: 'relative' }} >
                      {matrixResponse.map((response, rKey) => {
                        if (rKey % 2 === 0 && matrixResponse[rKey + 1])
                          return columnOfTwoResponses(response, matrixResponse[rKey + 1], rKey)
                      })
                      }
                    </Grid>
                  }
                  <View style={styles.matColLine}>
                    <View style={styles.matLine} />
                    <View style={styles.matLine1} />
                  </View>
                </View>
              </Col>
            </Grid>
          }

        </View>
      </View>
    )

  }
}
