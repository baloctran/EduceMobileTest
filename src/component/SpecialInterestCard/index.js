import * as React from 'react'
import { Card, CardItem, Body, Text, Left, Toast } from 'native-base'
import { Image } from 'react-native'
import styles from './styles'
import appCommonStyles from "../../appCommonStyles";


export default class SpecialInterestCard extends React.Component {
  render() {
    return (
      <Card style={this.props.tablet ? appCommonStyles.tabletCardCss : appCommonStyles.cardsView}>
        <CardItem 
          style={this.props.tablet ? styles.tabletCardsViews : appCommonStyles.cardsViews} 
          button 
          onPress={() => {
            Toast.show({
              text: 'Go to Worklist Detail',
              duration: 2000,
              position: 'top',
              textStyle: { textAlign: 'center' }
            })
          }} >
          <Left>
            <Image style={this.props.tablet ? appCommonStyles.tabletIconDash : appCommonStyles.iconDash}
              source={require('../../assets/3.png')}
            />
            <Body>
              <Text style={this.props.tablet ? appCommonStyles.tabletListText : appCommonStyles.listText}>
                <Text style={this.props.tablet ? appCommonStyles.tabletListNo : appCommonStyles.listNo}></Text>Special Interest</Text>
              <Left style={styles.captionDiv}>
                <Text style={appCommonStyles.caption} note>15 Patients</Text>

              </Left>
            </Body>
          </Left>
        </CardItem>
      </Card>
    )
  }
}
