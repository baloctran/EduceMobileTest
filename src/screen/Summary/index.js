import React, { Component, PropTypes } from 'react'
import { Container, Header, Title, Content, Button, Icon, Left, Body, Right } from 'native-base'
import { View, Text, ScrollView, Image, ActivityIndicator } from 'react-native'
import appCommonStyles from '../../appCommonStyles'
import { FontAwesome } from '@expo/vector-icons'
import stylesMediaQuery from './mediaqueryStyles'
import styles from './styles'
import FullHistoryModal from './components/LabTest/components/FullHistoryModal'
import moment from 'moment'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { WithSeparateComponents } from './components/WithSeparateComponents'

// - Separate Component Named - WithSeparateSections for mobile view only.

export default class Summary extends React.Component {

  constructor (props) {
    super(props)
    this.state = { modalVisible: false }
  }

  toggleModal () {
    this.setState({ modalVisible: !this.state.modalVisible })
  }
  render () {

    const { output, patient, instances, questiongroups,
      questions, answers, responses, interventions, procedures, navigation } = this.props

    const styleNames = (key) => {
      if (key === 0 )
        return styles.mobSummaryComponent1
      if (key === 1)
        return styles.mobSummaryComponent2
      if (key === 2)
        return styles.MobSummaryComponent3
    }

    if (!output || !output.sections) 
      return <View style={[styles.containerActivity, styles.horizontal]}>
        <ActivityIndicator size="large" color="#4cb050" />
      </View>
    return (
      <Container style={stylesMediaQuery.summaryColor}>
        <Header style={appCommonStyles.headerFooterBg} >
          <Left style={styles.leftNavigation} >
            <Button transparent >
              <Icon style={styles.dashboardMenuIcon}
                name="menu"
                onPress={() => navigation.navigate('DrawerOpen')}
              />
            </Button>
          </Left>
          <Body style={styles.listName}>
            {output &&
              <Title style={styles.displayText}>{output.name}</Title>
            }
          </Body>
          <Right style={styles.rightNavigation} >
            <Button transparent>
              <FontAwesome name="download" style={styles.actionButtonIcon} />
            </Button>
          </Right>
        </Header>
        <Content >
          <View style={styles.patientGrid}>
            <Grid>
              <Row>
                <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
                  <Grid style={styles.profileLeftGrid}>
                    <Col style={{ width: 65, paddingTop: 1 }}>
                      <Image style={stylesMediaQuery.profileImg} source={require('../../assets/profiel_pic.png')} />
                    </Col>
                    <Col style={styles.profileInformation}>
                      {output && patient && <Text style={stylesMediaQuery.patientText}><Text style={styles.patientName}>{patient.lastName} {patient.firstName}</Text>,<Text note style={styles.patientGender}>Female 42 Years</Text> </Text>}
                      {output && patient && <Text style={styles.nhi}>NHI Number : <Text style={styles.nhiValue}>{patient.nhi},</Text><Text note style={styles.caption}> D.O.B : <Text style={styles.dobValue}>{moment(patient.dateOfBirth).format('MM-DD-YYYY')}</Text></Text></Text>}
                    </Col>
                  </Grid>
                </View>
              </Row>
              <Row>
                <Grid >
                  <Row >
                    <Text style={stylesMediaQuery.patientTexts}>
                      <Text note style={styles.caption}>Procedure : </Text>
                      {procedures && interventions.procedure &&
                        <Text style={styles.capDetail}>{procedures[interventions.procedure].name}</Text>
                      }
                    </Text>
                  </Row>
                  <Row style={styles.surgeonInformation}>
                    {interventions &&
                      <Text>
                        <Text note style={styles.caption} >Surgeon : </Text>
                        <Text style={styles.capDetail}> {interventions.Surgeon}  {'\t'}</Text>
                        <Text note style={styles.caption}>Surgery Date : </Text>
                        <Text style={styles.capDetail}>{moment(interventions.SurgeonDate).format('MM-DD-YYYY')}</Text>
                      </Text>
                    }

                  </Row>
                </Grid>
              </Row>
            </Grid>

          </View>
          <Grid>
            <Row style={styles.row}>
              <ScrollView >
                <View >
                  {output && output.sections && output.sections.map((section, sKey) => {
                    return (
                      <View key={sKey}  >
                      <Text>Temporary indicator: {JSON.stringify(section.title)}</Text>
                        {section.columns &&
                          <View style={styleNames(sKey)} >
                            {
                              WithSeparateComponents(section, this.props, this.toggleModal.bind(this))
                            }
                            {section.component === 'LabTest' &&
                              <FullHistoryModal modalView={this.state.modalVisible} close={this.toggleModal.bind(this)}
                                section={section}
                                key={sKey}
                                instances={instances}
                                questions={questions}
                                responses={responses}
                                answers={answers}
                                questiongroups={questiongroups}
                              />
                            }
                          </View>
                        }
                      </View>
                    )
                  })}
                </View>
              </ScrollView>
            </Row>
          </Grid>
        </Content>
      </Container>
    )
  }
}
