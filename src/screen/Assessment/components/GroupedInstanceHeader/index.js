import React from 'react'
import { View, Text } from 'react-native'
import { Left, Right,Button } from 'native-base'
import styles from './styles'
import GroupedInstancesContainer from '../GroupedInstancesContainer'
import { FontAwesome,Ionicons } from '@expo/vector-icons'
import Display from 'react-native-display'
import stylesMediaQuery from '../Chapter/mediaStyle'

export default class GroupedInstanceHeader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showGroupedInstances: false
    }
  }

  toggle() {
    this.setState({
      showGroupedInstances: !this.state.showGroupedInstances
    })
  }

  render() {
    const { questiongroup, answers, responses, instances , typeOfQuestionGroup } = this.props
    return (
      <View>
        {/* The Below component is for Grouped previous instances for the questiongroup type */}

        
        <View style={stylesMediaQuery.groupedInstancesContainer}>
          <View style={styles.groupInstanceHeadingBtn}>
            <Left style={styles.accordionHeading}>
              <Text note style={styles.answerCaption}>Grouped Answers Summary </Text>
            </Left>
            <Right style={styles.accordionAns}>
              { typeOfQuestionGroup ==='Many' ? 
                <FontAwesome
                  onPress={() => this.toggle()}
                  size={20}
                  name={this.state.showGroupedInstances ? 'minus-circle' : 'plus-circle'}
                /> 
                : 
                <View style={styles.mobileShowMoreText}>
                  <Button transparent onPress={() => this.toggle()}>
                    <Text style={styles.showMore}>{instances.length} Answer  </Text><Ionicons color="#67a0fc" size={18} name={this.state.showGroupedInstances ? 'ios-arrow-up' : 'ios-arrow-down'} />
                  </Button>
                </View>
              }

            </Right>
          </View>
          <Display enable={this.state.showGroupedInstances}>
            {instances ?
              <View style={styles.answerContainer}>
                {
                  instances.map((instance, iKey) => {
                    return <GroupedInstancesContainer
                      key={`${iKey}-${instance.instance}`}
                      instance={instance}
                      responses={responses}
                      questiongroup={questiongroup}
                      answers = {answers}
                    />
                  })
                }
              </View>
              : <Text> No Instances Found...</Text>
            }
          </Display>
        </View>
        
      </View>
    )
  }
}
