import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  answerCon:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    flex: 1,
    paddingTop:5,
    paddingBottom:5,
    borderColor:'#E0E0E0',
    marginBottom:5
  },
  answerLeft:{
    flex:0,
    width:'75%'
  },
  answerRight:{
    flex:0,
    width:'25%'
  },
  textAnswer:{
    flex: 1, flexWrap: 'wrap',
    fontSize:14,
    lineHeight:24,
    color: 'rgba(0,0,0,.87)'
  },
  textDate:{
    fontSize:12,
    color: 'rgba(0,0,0,.54)'
  }
})
