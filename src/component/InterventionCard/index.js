import * as React from 'react'
import { Text, Button, Left, Body, Right, ListItem } from 'native-base'
import { View, Dimensions } from 'react-native'
import {DateOfBirth, NHI, FirstLetterInCircle} from '../../component'
import styles from './style'
import MyText from 'react-native-letter-spacing'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FontAwesome } from '@expo/vector-icons'
import { randomHex } from '../../../shared/helpers/utils'

const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class InterventionCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: randomHex(),
      tablet: false
    }
  }

  componentWillMount() {
    if (aspectRatio > 1.6)
      this.setState({
        tablet: false
      })
    else
      this.setState({
        tablet: true
      })

  }

  render() {
    const { intervention, patient, procedure, navigation } = this.props 

    return (
      <View>
        <ListItem style={styles.asesmentPatient}>
          { patient && intervention &&
            <Grid> 
              <Row> 
                <Col style={{ width: 60 }}> 
                  <View style={[styles.icon, { backgroundColor: this.state.backgroundColor }]}> 
                    {patient.firstName && 
                      <FirstLetterInCircle word={patient.firstName}/>
                    } 
                  </View> 
                </Col> 
                <Col> 
                  <Body style={styles.bodyView} > 
                    <View style={styles.patient_info}> 
                      <View style={styles.patient_infos}> 
                        <View style={styles.flexs}> 
                          <Left> 
                            <Text style={styles.patientName}>{patient.firstName} {patient.lastName}</Text> 
                          </Left> 
                          <Right> 
                            <MyText 
                              letterSpacing={1} 
                              style={styles.patientStatusRed}> EMERGENCY</MyText> 
                          </Right> 
                        </View> 
                        {!this.state.tablet && 
                          <View style={styles.flexs}> 
                            <Left> 
                              <NHI patient={patient}/>
                            </Left> 
                            <Right> 
                              <DateOfBirth patient={patient} />
                            </Right> 
                          </View> 
                        } 
                        {!this.state.tablet && 
                          <View style={styles.flexs}> 
                            <Left> 
                              <Text style={styles.patientLabel}>Mr. Gilkison</Text> 
                            </Left> 
                            <Right> 
                              <Text style={styles.patientCap}><Text style={styles.interventionIcon}>&#xf274;</Text> {intervention.time}</Text> 
                            </Right> 
                          </View> 
                        } 
                        {this.state.tablet && 
                          <Grid> 
                            <Row> 
                              <Col> 
                                <NHI patient={patient}/> 
                              </Col> 
                              <Col> 
                                <DateOfBirth patient={patient}/> 
                              </Col> 
                              <Col> 
                                <Text style={styles.patientLabelTablet}>Mr. Gilkison</Text> 
                              </Col> 
                              <Col> 
                                <Text style={styles.patientCapTablet}><Text style={styles.interventionIcon}>&#xf274;</Text> {intervention.time}</Text> 
                              </Col> 
                            </Row> 
                          </Grid> 
                        } 
                        <Text style={styles.pateintDes}>{procedure.name}</Text> 
                      </View> 
                      <View style={styles.patientButton}> 
                        <Button style={styles.summaryBtn} onPress={() => navigation.navigate('Summary', {
                              templateId: 'anaesoutput',
                              interventionId: intervention._id
                            })}>
                          <FontAwesome name="file-text" style={styles.summaryIcon} /> 
                          <Text style={styles.summText}>Summary</Text> 
                        </Button> 
                        <Button style={styles.assessmentBtn}  
                            onPress={() => navigation.navigate('Assessment', {
                              templateId: 'anaesPreAssess',
                              interventionId: intervention._id
                            })}>
                          <Text style={styles.summText}><Text style={styles.assessmentIcon}>&#xf48e;</Text> Assessment</Text> 
                        </Button> 
                      </View> 
                    </View> 
                  </Body> 
                </Col> 
              </Row> 
            </Grid>
          }
          {(!patient || !intervention) &&
            <Text> Something Went Wrong !! </Text>
          }
        </ListItem>
       
      </View>
    )
  }
}


