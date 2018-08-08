import * as React from 'react'
import { Container, Header, Title, Content, Button, Left, Body, List } from 'native-base'
import { View, Text, ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import moment from 'moment'
import InterventionCard from '../../component/InterventionCard'
import styles from './styles'

export default (props) => {
    const { navigation, worklist, interventions, procedures, patients } = props
    if (!worklist || !worklist.interventions) 
      return <View style={[styles.containerActivity, styles.horizontal]}>
        <ActivityIndicator size="large" color="#4cb050" />
      </View>

    return (
      <Container >
        <Header style={styles.headerFooterbg} >
          <Left style={styles.headerFooterbgSub1}>
            <Button transparent 
              style={styles.headerFooterbgSub2}
              onPress={navigation.goBack}>
              <FontAwesome style={styles.goBack} name="arrow-left"/>
            </Button>
          </Left>
          {worklist &&
            <Body style={styles.listName}>
              <Title style={styles.text}>{worklist.type}</Title>
              <Text style={styles.text}>{worklist.location}</Text>
              <Text style={styles.textOne} >{moment(worklist.date).format('MMMM Do YYYY')} {worklist.time}</Text>
            </Body>
          }
          {
            !worklist &&
            <Body>
              <Title> Something Went Wrong!! Worklist is missing</Title>
            </Body>
          }
        </Header>
        <Content>
          <List>
            {worklist.interventions.map(i => {
              const intervention = interventions[i._id]
              const patient = patients[intervention.patient]
              const procedure = procedures[intervention.procedure]
              if(patient && intervention && procedure) {
                return <InterventionCard 
                key={i._id}
                intervention={intervention}
                patient={patient}
                procedure={procedure}
                navigation={navigation}/>
              } else {
                return <Text>Not yet..</Text>
              }
            })}
          </List>
          {!worklist &&
            <Text> Something Went Wrong!! Worklist seems to be missing. </Text>
          }
        </Content>
      </Container>
    )
  }
