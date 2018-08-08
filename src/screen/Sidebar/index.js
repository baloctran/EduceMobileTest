import * as React from 'react'
import { Text, Container, List, ListItem, Content, Header, Body } from 'native-base'
import styles from './styles'
import { View, ImageBackground } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'
import appCommonStyles from '../../appCommonStyles'
import { firstLetterOfString } from '../../../shared/helpers/utils'

// Routes should be coming in as props - it depends on the logged in user, so needs work.
const routes = [
  {
    route: 'Home',
    caption: 'Dashboard',
    icon: <FontAwesome style={styles.menuIcon} name='tachometer' />
  },
  {
    route: 'SearchAdd',
    caption: 'Find / Admit',
    icon: <FontAwesome style={styles.menuIcon} name='map' />
  },
  {
    route: 'Store',
    caption: 'Store',
    icon: <FontAwesome style={styles.menuIcon} name='map' />
  },
  {
    route: 'Document',
    caption: 'Messaging',
    icon: <FontAwesome style={styles.menuIcon} name='comment' />
  },
  {
    route: 'Login',
    caption: 'Logout',
    icon: <FontAwesome style={styles.menuIcon} name='power-off' />
  }
]

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Login' })]
})

export default class Sidebar extends React.Component {
  render () {
    const { identity = {} } = this.props
    return (
      <Container style={this.props.tablet ? styles.headerContainer : null}>
        <Header style={this.props.tablet ? styles.headerLogins : styles.headerLogin} >
          {!this.props.tablet &&
          <ImageBackground source={require('../../assets/profile.jpg')} style={styles.backgroundImage}>
            <Body style={{ width: '100%' }}>
              <View style={styles.labelBox}>
                <View style={styles.nameIcon}><Text style={styles.name}>{firstLetterOfString(identity.firstName)}</Text></View>

                <Text style={[styles.nameEmail, appCommonStyles.normalText]}>{identity.firstName || '?'}</Text>
              </View>

            </Body>
          </ImageBackground>
          }
          {
            this.props.tablet &&
            <Body style={{ width: '100%', height: 'auto' }}>
              <View style={styles.tabWelcomeMsg}>
                <View style={styles.dashNameIcon}>
                  <Text style={[styles.tabName, appCommonStyles.commonColor]}>
                    {firstLetterOfString(identity.firstName)}
                  </Text>
                </View>
                <View style={styles.helloMsg} >
                  <Text style={[styles.text, appCommonStyles.normalText]} >{identity.firstName}</Text>
                  <Text note style={[styles.sideText]} >{identity.speciality}</Text>
                </View>
              </View>
            </Body>
          }

        </Header>

        <Content style={
          this.props.tablet == true ? { backgroundColor: '#fff' } : null}>

          <List
            style={{ marginTop: 20 }}
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem style={data.route === 'Home' && this.props.tablet && this.props.selected ? [styles.itemTabletSelected] : [styles.menuItem, appCommonStyles.normalText]}
                  button
                  onPress={() => {
                    data.route === 'Login'
                      ? this.props.navigation.dispatch(resetAction)
                      : this.props.navigation.navigate(data.route)
                  }}
                >
                  {this.props.selected === true

                    ? data.caption === 'Dashboard'
                      ? <Text style={this.props.tablet ? styles.sideBarTextMain : [styles.dashboardTextMain, appCommonStyles.normalText]} >
                        <FontAwesome style={this.props.tablet ? styles.sidebarDashboardIcon : styles.dashboardIcon} name='tachometer' />
                        {'\t'} Dashboard
                      </Text>
                      : <Text style={[styles.sideBarTextMain, appCommonStyles.normalText]}>
                        {data.icon} {'\t'} {data.caption}
                      </Text>
                    : <Text style={styles.sideBarTextMain}> {data.icon} {'\t'} {data.caption}</Text>
                  }
                  {
                    /*
										this.props.selected has been passed from storybook to differentiate the dashboad colour from the other list items,
										currently done for only storybook UI not for the app, will need another logic for app.

										*/
                  }
                </ListItem>
              )
            }}
          />
        </Content>
      </Container>
    )
  }
}
