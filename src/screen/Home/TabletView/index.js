import * as React from 'react'
import moment from 'moment'
import { Container, Content, Text } from 'native-base'
import { View } from 'react-native'
import EduceHeader from '../../../component/Layout/Header'
import GraphCard from '../../../component/GraphCard'
import CalenderCard from '../../../component/CalenderCard'
import WorklistCard from '../../../component/WorklistCard'
import SpecialInterestCard from '../../../component/SpecialInterestCard'
import TabletRightComponent from '../../../component/TabletRightComponent'
import Sidebar from '../../Sidebar'
import appCommonStyles from '../../../appCommonStyles'
import { Col, Grid } from 'react-native-easy-grid'
import { FontAwesome } from '@expo/vector-icons'

import styles from './styles'

//This is a good candidate for optimising with a memoised selector
const countInterventions = worklists => {
  if (worklists) {
    // console.log('WORKLISSTS', worklists)
    return 99
    // return worklists.reduce((number, worklist) => number + worklist.interventions.length, 0)
  }
  return 0
}
export default class HomeTablet extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedDate: null }
    this.changeSelectedDate = this.changeSelectedDate.bind(this)
  }

  changeSelectedDate(day) {
    this.setState({
      selectedDate: new Date(day.dateString)
    })
    // this.props.setContextDate(new Date(day.dateString)),
    // we can use the redux context state in this component instead of component state ,
    // and can use setDate to change the context state like wise the render() will have some changes 
  }

  render() {
    const { navigation, context, graphData, setContextDate, worklists, identity } = this.props
    // const numberOfInterventions = countInterventions(worklists)

    return (
      <Container style={styles.container}>
        <EduceHeader title="Dashboard" navigation={navigation} tablet={true} />
        <Content style={styles.dashGrid}>
          {
            /*MAIN GRID */
          }
          <Grid>
            {
              /*first column  */
            }
            {<Col style={styles.sidebarContent}>
              <Sidebar navigation={navigation} identity={identity} selected={true} tablet={true} />
            </Col>
            }
            {
              /*first column ends */
            }
            {
              /*second column  */
            }
            <Col style={{ width: '80%', Top: 10, elevation: 1, zIndex: 1 }}>
              <View style={styles.welcomeMsg}>
                <View style={styles.helloMsgDash} >
                  <Text style={[styles.textDash, appCommonStyles.normalText]} >Welcome to Educe Dashboard</Text>
                  {countInterventions &&
                    <Text note style={[styles.textDashboard, appCommonStyles.normalText]} >You have <Text style={[styles.notice, appCommonStyles.normalText]} > {countInterventions} </Text> new patients</Text>
                  }
                </View>
              </View>
              <View style={styles.gridContainer}>
                {
                  /*first grid for second column */
                }
                <Grid>
                  {
                    /*first grid for first column column */
                  }
                  <Col style={{ width: '75%' }}>
                    
                    {graphData &&
                        <GraphCard data={graphData} tablet={true} />
                    }
                    
                    <Grid>
                      <Col style={[styles.calenderDiv, { width: '38%', height: '100%' }]}>
                        <View style={styles.calenderTitle}>
                          <Text style={styles.calenderheading}> <FontAwesome style={styles.dashboardIcon} name="calendar" /> {this.state.selectedDate !== null && moment(this.state.selectedDate).format('DD MMMM YYYY') || 'Select a date'}</Text>
                        </View>
                        <View style={styles.calenderView} >
                          <CalenderCard date={context.date} setDate={setContextDate} changeSelectedDate={(day) => this.changeSelectedDate(day)} />
                        </View>
                      </Col>
                      <Col style={styles.tabDash}>
                        {worklists && worklists.map(worklist =>
                          <View style={styles.heightAuto} key={worklist._id}>
                            <WorklistCard key={worklist._id} worklist={worklist} tablet={true} />
                          </View>
                        )}
                        <View style={styles.heightauto}>
                          <SpecialInterestCard tablet={true} />
                        </View>
                      </Col>
                    </Grid>
                  </Col>
                  {
                    /*first grid for first column column */
                  }
                  <Col Style={styles.messageView}>
                    <View style={{ width: '100%', paddingLeft: 12, borderRadius: 6 }}>
                      <TabletRightComponent />
                    </View>
                  </Col>
                </Grid>
              </View>
              {
                /*first grid for second column ends */
              }
              {
                /*Since we are using expo now for development and expo(already added) plugin(Constants) gives the istablet value only for ios and there is no istablet for android, plugin
                  react-native-device-info(already added) has istablet property, this plugin doesn't work with expo, so when we build apk or ipa , we need to change to this plugin for stability and
                  native components usage.
                 */
              }
            </Col>
            {
              /*second column ends */
            }
          </Grid>
          {/*MAIN GRID ends */}
        </Content>
      </Container>
    )
  }
}
