import * as React from 'react'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, Text, Button, Icon, Left, Body,Right } from 'native-base'

import styles from './styles'
class Home extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Worklist 1</Text>
          <Text>Worklist 2</Text>
          <Text>Worklist 3</Text>
        </Content>
      </Container>
    )
  }
}

export default connect()(Home)

{/* <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("BlankPage", {
                    name: { item }
                  })}
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List> */}
