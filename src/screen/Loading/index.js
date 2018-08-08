import * as React from 'react'
import {
  Container,
  Content,
  Text
} from 'native-base'

import styles from './styles'

export default class Loading extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text>Loading...</Text>
          <Text>Please wait a bit!</Text>
        </Content>
      </Container>
    )
  }
}
