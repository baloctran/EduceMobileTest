import * as React from 'react'
import {  Header, Button, Icon, Left, Body } from 'native-base'

import styles from './style'

export default (props) => 
  <Header style={styles.headerFooterBg} >
    <Left style={{ width: 'auto', flex: 0 }}>
      <Button transparent  >
        <Icon name="menu" style={styles.dashboardMenuIcon}
          onPress={() => props.navigation.navigate('DrawerOpen')}
        />
      </Button>
    </Left>
    <Body style={styles.listName}>
      {this.children}
    </Body>
  </Header>