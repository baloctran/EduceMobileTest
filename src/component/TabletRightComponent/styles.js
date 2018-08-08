import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4cb050'
  },
  // chatIcon: {
  //   fontFamily: 'FontAwesome',
  //   color:'rgba(0,0,0,.54)',
  //   fontSize:16
  // },
  // chatHeader: {
  //   backgroundColor: '#4cb050'
  // },
  messageContainer:{
    borderRadius:4,
    backgroundColor:'#fff',
    height:'90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 2
  },
  msgContainer:{
    backgroundColor:'#4cb050',borderTopLeftRadius:6,
    borderTopRightRadius : 6,
    paddingTop:15,
    paddingBottom:15,
    paddingLeft:10,
    paddingRight:10,
    color:'#fff'
  },
  white:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold'
  },
  messageAnswer:{
    padding:10
  },
  msgAns:{
    color:'rgba(0,0,0,.87)',
    fontSize:13,
    textAlign:'left',
    marginBottom:5
  },
  msgDate:{
    color:'rgba(0,0,0,.54)',
    fontSize:12,
    textAlign:'right'
  },
  msgDiv:{
    borderColor:'#f2f2f2',
    borderBottomWidth:1,
    paddingTop:10,
    paddingBottom:10
  }

})

export default styles
