import React, { Component, PropTypes } from 'react'
import { Container,Header,Title,Content,Button,Icon,Left,Body,Right } from 'native-base'
import { View, Text, Image, Dimensions, ActivityIndicator } from 'react-native'
import appCommonStyles from '../../../appCommonStyles'
import { FontAwesome } from '@expo/vector-icons'
import stylesMediaQuery from '../mediaqueryStyles'
import styles from './styles'
import FullHistoryModal from '../components/LabTest/components/FullHistoryModal'
import moment from 'moment'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { WithTabletSeparateComponents } from '../components/WithTabletSeparateComponents'
import {ColumnsOfThree} from '../../../../shared/helpers/utils'
const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class SummaryTablet extends React.Component {
  componentWillMount () {
    // this.props.loadWorklist()   //loads the worklist,interventions(patients information) and procedures from saga into the store.
    if (aspectRatio > 1.6)  this.tablet = false  
    else this.tablet = true
  }
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      modifiedAllChaptersData: [[]]
    }
  }

  componentDidMount () {
    /* this logic is for allchapters - tablet rendering and show it in columns in a row format , this will modify the allchapter section into
            [
                  [column1, column2, column3],
                    [column4, column5, column6],
                      [column6, column7, column8],
            ]
            to show it as per the design.
      */
    const { output } = this.props

    output.sections && output.sections.map((section, sKey) => {
      if (section.component === 'allChapters') {
        // const gridData = [[]]
        // const totalColumns = 3
        // let countColumns = 1
        // const  length = section.columns.length
        // section.columns.map((column,key) =>{
        //   gridData[gridData.length - 1].push(column)
        //   if (countColumns <= totalColumns) { countColumns++ }

        //   if (countColumns > totalColumns && key !== length - 1) {
        //     countColumns = 1
        //     gridData.push([])
        //   }
        // })

        this.setState({ modifiedAllChaptersData: ColumnsOfThree(section.columns) })
      }
    })
  }
  toggleModal () {
    this.setState({ modalVisible: !this.state.modalVisible })
  }


  styleNames = (section) => {
    // this gives dynamic styling for each section only for tablet view
    switch (section.component) {
      case 'GeneralFindings': return stylesMediaQuery.GeneralFinding
      case 'LabTest': return stylesMediaQuery.LabTest
      case 'allChapters': return stylesMediaQuery.allChapters
    }
  }

  render () {
    const { output, patient, instances, questiongroups,
      questions, answers, responses, interventions, procedures, navigation  } = this.props

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
          <Grid>
            <Row>
              <View style={styles.patientName}>
                <Left style={styles.leftSide} >
                  <Grid style={styles.profileLeftGrid}>
                    <Col style={{ width: 95 }}>

                      <Image style={stylesMediaQuery.profileimg} source={require('../../../assets/profiel_pic.png')} />
                    </Col>
                    <Col style={styles.profileInformation}>
                      {output && patient && <Text style={stylesMediaQuery.patientText}><Text style={styles.patientName}>{patient.lastName} {patient.firstName}</Text> ,<Text note style={styles.patientGender}> Female 42 Years</Text> </Text>}
                      {output && patient && <Text style={styles.nhi}>NHI Number : <Text style={styles.nhiValue}>{patient.nhi},</Text><Text note style={styles.caption}> D.O.B : <Text style={styles.dobValue}>{moment(patient.dateOfBirth).format('MM-DD-YYYY')}</Text></Text></Text>}
                    </Col>
                  </Grid>
                </Left>
                <Right style={styles.rightSide} >
                  <View>
                    <Text style={stylesMediaQuery.patientTexts}>
                      <Text note style={styles.caption}>Procedure : </Text>
                      {procedures && interventions.procedure &&
                      <Text style={styles.capDetail}>{procedures[interventions.procedure].name}</Text>
                      }
                    </Text>
                    {interventions &&
                    <Text>
                      <Text note style={styles.caption} >Surgeon : </Text>
                      <Text style={styles.capDetail}> {interventions.Surgeon}  {'\t'}</Text>
                      <Text note style={styles.caption}>Surgery Date : </Text>
                      <Text style={styles.capDetail}>{moment(interventions.SurgeonDate).format('MM-DD-YYYY')}</Text>
                    </Text>
                    }

                  </View>
                </Right>
              </View>
            </Row>
            <Row style={styles.row}>

              <View style={styles.contentContainer} >
                {output && output.sections && output.sections.map((section, sKey) => {
                  return (
                    <View key={sKey} style={this.styleNames(section)} >
                      {section.columns &&
                      <View style={{ width: '100%' }} >
                        {
                          WithTabletSeparateComponents(section, this.props, this.toggleModal.bind(this), this.state.modifiedAllChaptersData)
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

            </Row>
          </Grid>
        </Content>
      </Container>

    )
  }
}
