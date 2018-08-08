import * as React from 'react'
import { Container, Content, Text,  Icon, Body, Item, Input, List } from 'native-base'
import { View } from 'react-native'
import EduceHeader from '../../component/Layout/Header'
import styles from './styles'
import PatientDetail from './components/PatientDetail'

class SearchAdd extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nhi: ''
    }
  }
  handleSearch() {
    this.props.requestPatient(this.state.nhi)
    console.log(this.state.nhi)
  }
  render() {
    const { navigation, patients } = this.props
    console.log(this.props)
    return (
      <Container style={styles.container}>
        <EduceHeader title="Find & Admit" navigation={navigation} />
        <Content  >
       
          <View style={styles.searchPatient}>
            <Body >
              <View  style={styles.bodyAlign}>
                <Text  style={styles.findText}>Find Patient <Text note style={styles.findTextCaption}>(using NHI number)</Text></Text></View>
              <View searchBar style={styles.searchBarText} >
                <Item  >
                  <Input  style={styles.searchBarInput}  placeholder="Search" onChangeText={(value) => this.setState({ nhi:value })}/>
                  <Icon style={styles.searchIcon} name="search"  onPress={() =>this.handleSearch() }/>
                </Item>
              </View>
            </Body>
          </View>
           
          <List style={styles.list}>
            {patients.map(patient => {
              return <PatientDetail
                patient={patient} 
                navigation={navigation}
              />
            })}
           
          </List>
          
        </Content>
      </Container>
    )
  }
}

export default SearchAdd
