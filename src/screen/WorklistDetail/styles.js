import {  StyleSheet } from 'react-native'

export default StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0
  //
  // },
  // shadow: {
  //   flex: 1,
  //   width: undefined,
  //   height: undefined
  // },
  //
  // icon: {
  //   width: 48,
  //   height: 48,
  //   marginTop: 0,
  //   borderRadius: 60,
  //   marginLeft: 6,
  //   backgroundColor: '#049d8f'
  // },

  headerFooterBg: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#4cb050',
    height:'auto',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center'

  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop:3,
    paddingBottom:3
  },
  textOne: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 14
  },

  listName: {
    width: '90%',
    paddingRight:20,
    textAlign: 'center',
    alignItems: 'center'
  },
  // backS: {
  //   backgroundColor:'#fff'
  // },
  // flexs:{
  //   flex:1,
  //   flexDirection:'row',
  //   width:'100%',
  //   marginBottom:5,
  //   justifyContent: 'space-between'
  // },
  goBack : {
    fontSize: 18,
    color: '#fff'

  },
  headerFooterBgSub1 : {
    width: 'auto',
    flex: 0
  },
  headerFooterBgSub2 : {
    height: 'auto',
    top: -20
  },

  containerActivity: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
