import * as React from 'react'
import { Text, Button, Left, Right, Card, CardItem } from 'native-base'
import { View } from 'react-native'
import styles from './styles'
import MyText from 'react-native-letter-spacing'
import { firstLetterOfString, randomHex } from '../../../../../shared/helpers/utils'
import moment from 'moment'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FontAwesome } from '@expo/vector-icons'


export default class PatientDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: randomHex(),
      tablet: false
    }

  }

  addPatient(patient) {
    console.log(patient)
  }

  render() {
    const { patient, navigation } = this.props

    console.log(this.props)
    return (
      <Card style={styles.patientCard}>
        <CardItem >
          {patient &&
            <Grid>
              <Row>
                <Col style={{ width: 54 }}>
                  <View style={[styles.icon, { backgroundColor: this.state.backgroundColor }]}>
                    {patient.firstName &&
                      <Text style={styles.userIcon}>{firstLetterOfString(patient.firstName)}</Text>
                    }
                  </View>
                </Col>
                <Col>
                  <View style={styles.bodyView}>
                    <View style={styles.patDetailsView}  >
                      <View >
                        <View style={styles.flexs}>
                          <Left style={styles.leftFind}>
                            <Text style={styles.patientNames}>{patient.firstName} {patient.lastName}</Text>
                          </Left>
                          <Right>
                            {patient.from ==='Gov' &&
                              <MyText
                                letterSpacing={1}
                                style={styles.patientStatusRed}> NEW</MyText>
                            }
                            {patient.from === 'local' &&
                              <MyText
                                letterSpacing={1}
                                style={styles.patientStatusRed}> EXISTING</MyText>
                            }
                          </Right>
                        </View>

                        <View style={styles.flexs}>
                          <Left>
                            <Text note style={styles.patCaption} >NHI:<Text style={styles.patientLabel}> {patient.nhi}</Text></Text>

                          </Left>
                          <Right style={styles.dateText}>
                            <Text style={styles.patientCap}><FontAwesome name="birthday-cake" /> {moment(patient.dateOfBirth).format('DD MMMM YYYY')}
                            </Text>
                          </Right>
                        </View>
                        <View style={styles.flexs}>
                          <Left>
                            <Text style={styles.patientDocter} >Mr. Gilkison</Text>
                          </Left>
                          <Right>
                            <Text ></Text>
                          </Right>
                        </View>
                      </View>
                    </View>

                    {patient.from === 'local' &&
                        <View style={styles.patientButton}>
                          <Button style={styles.summaryBtn}  onPress={() => navigation.navigate('Summary', {
                            patientInfo: patient
                          })}>
                            <FontAwesome name="file-text" style={styles.summaryIcon} />
                            <Text style={styles.summText}> Summary</Text>
                          </Button>
                          <Button style={styles.assessmentBtn}  onPress={() => navigation.navigate('Assessment', {
                            patientInfo: patient
                          })}>

                            <Text style={styles.summText}> <Text style={styles.assessmentIcon}>&#xf48e;</Text> Assessment</Text>
                          </Button>
                        </View>
                    }
                    {patient.from ==='Gov' &&
                        <View style={styles.patientButton}>
                          <Button style={styles.summaryBtn}  onPress={() => this.addPatient(patient)}>
                            <FontAwesome name="plus" style={styles.summaryIcon} />
                            <Text style={styles.summText}> Add Record</Text>
                          </Button>
                        </View>
                    }
                  </View>

                </Col>
              </Row>
            </Grid>
          }
          {!patient &&
            <Text> Something Went Wrong !! </Text>
          }
        </CardItem>
      </Card>
    )
  }
}
