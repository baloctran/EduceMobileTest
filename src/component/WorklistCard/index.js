import * as React from 'react'
import { Card, CardItem, Body, Text, Left } from 'native-base'
import { Image } from 'react-native'
import styles from './styles'
import appCommonStyles from '../../appCommonStyles'

export default class WorklistCard extends React.Component {
  iconSource = '';
  componentWillMount() {
    const { navigation, worklist } = this.props

    if (worklist !== undefined && worklist.type == 'Theater') {
      this.iconSource = require('../../assets/2.png')
    }
    else {
      this.iconSource = require('../../assets/1.png')
    }
  }
  render() {
    const { navigation, worklist, tablet } = this.props

    return (
      <Card style={tablet ? appCommonStyles.tabletCardCss : appCommonStyles.cardsView}>
        {worklist &&
          <CardItem style={tablet ? styles.tabletCardsViews : appCommonStyles.cardsViews} 
            button 
            onPress={() => navigation.navigate('WorklistDetail', {
              worklistId: worklist._id
            })}>
            <Left>
              <Image style={tablet ? appCommonStyles.tabletIconDash : appCommonStyles.iconDash}
                source={this.iconSource}
              />
              {worklist.type && worklist.interventions &&
                <Body style={tablet ? styles.worklistBody : styles.listtexts}>
                  <Text style={tablet ? appCommonStyles.tabletListText : appCommonStyles.listText}>
                    <Text style={tablet ? styles.tabletListNo : appCommonStyles.listNo}>{worklist.time} </Text> AM  {worklist.type}</Text>
                  <Left style={styles.captionDiv}>
                    <Text style={appCommonStyles.caption} note>{worklist.interventions.length} Patient{worklist.interventions.length > 1 ? "s" : ""}</Text>
                    <Text style={tablet ? styles.tabletCaption : appCommonStyles.captions} note>{worklist.location}</Text>
                  </Left>
                </Body>
              }
            </Left>
          </CardItem>
        }{!worklist &&
          <Text> Something Went Wrong!!! </Text>
        }
      </Card>
    )
  }
}
