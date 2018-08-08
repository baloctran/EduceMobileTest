import * as React from 'react'
import { View, Card, CardItem, Text } from 'native-base'
import { VictoryArea, VictoryChart } from 'victory-native'
import styles from './styles'

export default (props) =>
  <Card style={props.tablet ? styles.tabletCardCss : styles.cardsViewMobile}>
    <CardItem style={props.tablet ? styles.tabletcCardsViews : styles.cardsViews}>
      <View style={styles.containers}>
        {props.data &&
          <VictoryChart width={320} height={150} >
            <VictoryArea style={{ data: { fill: "#9873ef" } }} interpolation="natural" data={props.data} x="quarter" y="earnings" />
          </VictoryChart>
        }
        {!props.data && <Text> Something went wrong!! </Text>}
      </View>
    </CardItem>
  </Card>
