import * as React from 'react'
import { View } from 'react-native'
import { Col, Grid } from 'react-native-easy-grid'
import { Container, Content, Text } from 'native-base'

import EduceHeader from '../../component/Layout/Header'
import GraphCard from '../../component/GraphCard'
import DateCard from '../../component/DateCard'
// import CalenderCard from '../../component/CalenderCard'
import WorklistCard from '../../component/WorklistCard'
import SpecialInterestCard from '../../component/SpecialInterestCard'
import  FirstLetterInCircle  from '../../component/FirstLetterInCircle'

import appCommonStyles from '../../appCommonStyles'
import styles from './styles'

//This is a good candidate for optimising with a memoised selector
const countInterventions = worklists => {
  return worklists.reduce((number, worklist) => { 
    return number + worklist.interventions.length}
    , 0)
}

export default class Home extends React.Component {

  render() {
    const { navigation, context, graphData, setFocusDate, worklists, identity } = this.props
    const numberOfInterventions = countInterventions(worklists)
    return (
      <Container style={styles.container}>
        <EduceHeader title="Dashboard" navigation={navigation} />
        <Content>
          <Grid>
            <Col>
              <View style={styles.welcomeMsg}>
                <FirstLetterInCircle word={'Welcome'} />
                <View style={styles.helloMsg} >
                  <Text style={[styles.textOne, appCommonStyles.normalText]} >Welcome to Educe Dashboard</Text>
                  {numberOfInterventions > 0 && 
                  <Text note style={styles.textTwo} >
                    You have 
                    <Text style={styles.notice} > {numberOfInterventions} </Text> 
                    new patient{numberOfInterventions > 1 ? "s" : ""}
                  </Text>                  
                  }
                </View>
              </View>
              {graphData &&
                <GraphCard data={graphData} />
              }

              <DateCard date={context.date} setDate={setFocusDate} />
              {
                /* Since we are using expo now for development and expo(already added) plugin(Constants) gives the istablet value only for ios and there is no istablet for android, plugin
                  react-native-device-info(already added) has istablet property, this plugin doesn't work with expo, so when we build apk or ipa , we need to change to this plugin for stability and
                  native components usage.
                 */
              }
              {worklists && worklists.map(worklist => <WorklistCard key={worklist._id} worklist={worklist} navigation={navigation}/>)}
              <SpecialInterestCard />
            </Col>
          </Grid>
        </Content>
      </Container>
    )
  }
}
