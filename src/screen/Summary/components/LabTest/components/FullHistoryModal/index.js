import React, { Component } from 'react'
import { Modal }
  from 'react-native'
import { Text, Left, Icon, Right, Content, View, Header, Container } from 'native-base'
import styles from './styles'
import {  EvilIcons } from '@expo/vector-icons'
import MediaQuery from './MediaQuery'
import SingleGridColumn from './SingleGridColumn'


export default class FullHistoryModal extends Component {
    state = {
      modalVisible: false
    }
    toggleModal(visible) {
      this.setState({ modalVisible: visible })
    }
    render() {
      const { section } = this.props

      return (
        <Container style={styles.container}>
          <Modal animationType={'slide'} transparent={true}
            visible={this.props.modalView}
            onRequestClose={() => { console.log('Modal has been closed.') }}>

            <View style={MediaQuery.modalContainer}>
              <View style={MediaQuery.modalContentContainer}>
                <Header style={styles.modal}>
                  <Left style={styles.leftnavigation} >
                    <Text style={styles.popupHeading}>LAB HISTORY</Text>
                  </Left>
                  <Right style={styles.rightnavigation} >
                    <EvilIcons onPress={() => this.props.close()} name="close-o" size={30} />
                  </Right>
                </Header>
                <Content>
                  <View style={styles.modalView}>
                    {section && section.columns.map((column, cKey) => {
                      return (
                        <SingleGridColumn column={column} {...this.props} key={cKey} />
                      )
                    })
                    }
                  </View>
                </Content>
              </View>
            </View>
          </Modal>
        </Container>
      )
    }
}

