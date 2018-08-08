
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  welcomeMsg: {
    paddingTop: 18,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 4,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  helloMsg: {
    width: '90%',
    paddingTop: 5,
    paddingLeft: 0,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  name: {
    fontSize: 24,
    lineHeight: 48,
    textAlign: 'center'
  },
  textOne: {
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1
  },
  notice: {
    color: '#000'
  },
  textTwo: {
    color: '#9a9a9a',
    paddingLeft: 1,
    paddingBottom: 4,
    fontSize:12
  }
})
