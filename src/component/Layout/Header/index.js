import * as React from 'react'
import { Header, Title, Left, Icon, Button, Body, View, Right } from 'native-base'
import styles from './styles'
import { Image } from 'react-native'

export default class EduceHeader extends React.Component {
  render() {
    const { title, navigation } = this.props
    return (
      <Header style={this.props.tablet ? styles.tabletHeaderDash : styles.headerBg} >

        {/*The Below renders if tablet prop is passed. Basically for tablet Home Screen.  */
        }
        {this.props.tablet &&
          <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
            <Left style={styles.dashHeaderLeftTab} >
              <Image style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%' }}
                source={require('../../../assets/spiral.png')}
              />

            </Left>
            <Body style={styles.dashHeadBody}>
              <Left style={styles.dashLeft}>
                <Button transparent>
                  <Icon style={styles.dashboardMenuIcon}
                    name="menu"
                    onPress={() => navigation.navigate('DrawerOpen')}
                  />
                </Button>
              </Left>
              <Right style={styles.dashRight}>
                {title &&
                  <Title style={styles.displayTexts}>{title}</Title>
                }
              </Right>
            </Body>
          </View>
        }
        {/*The Below renders if tablet prop is not passed. */
        }
        {!this.props.tablet &&
          <View style={{ width: '100%', flex: 1, flexDirection: 'row' }}>
            <Left style={{ width: 'auto', flex: 0 }} >
              <Button transparent style={styles.btnDashboard}>
                <Icon style={styles.dashboardMenuIcon}  name="menu"  onPress={() => navigation.navigate('DrawerOpen')}
                />
              </Button>
            </Left>
            <Body style={styles.listName}>
              {title &&
                <Title style={styles.displayText}>{title}</Title>
              }
            </Body>
          </View>
        }
      </Header>
    )
  }
}
