import * as React from 'react'
import { Col, Grid } from 'react-native-easy-grid'
import { Container, Content, Text } from 'native-base'
import EduceHeader from '../../component/Layout/Header'
import styles from './styles'

export default class Store extends React.Component {
  render() {
    const { state, navigation } = this.props
    const keys = Object.keys(state)
    const countProcs = Object.keys(state.procedures.byId).length
    return (
      <Container style={styles.container}>
        <EduceHeader title="Store" navigation={navigation} />
        <Content>
          <Grid>
            <Col >
              <Text>{JSON.stringify(keys)}</Text>
              <Text>CountProcs: {countProcs}</Text>
              <Text>{JSON.stringify(state.worklists)}</Text>
              <Text>{JSON.stringify(state.patients)}</Text>
              {/* <Text>{JSON.stringify(state.all)}</Text> */}
              {/* <Text>{JSON.stringify(state.pouch.Pouch.localDB)}</Text> */}
            </Col>
          </Grid>
        </Content>
      </Container>
    )
  }
}
