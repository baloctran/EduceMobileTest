/* This Common - Style is only for assessment Question input type*/
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  
  inputBox: {
    height: 40,
    lineHeight: 30,
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: '#ccc',
    width : '100%'
  },
  flexs: {
    flex: 1,
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between'
  },
  showMore: {
    textDecorationLine: 'underline',
    color: '#67a0fc'
  },
  mobileShowMoreText :{
    flex:0,
    paddingLeft:25,
    paddingRight:0
  }
})
