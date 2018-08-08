import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  qgBg:{
    fontSize:14,
    fontWeight:'bold'
  },
  matrixCurrentDetailHeader : {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    backgroundColor:'#fefdfb',
    flex:1,
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
    borderTopColor: '#e8e8e8',
    borderTopWidth: 0.5
  },
  qgTitle:{
    paddingLeft:25,
    fontWeight:'bold',
    paddingTop:15,
    fontSize:14
  },
  tableLeft:{
    width:'50%',
    paddingLeft:16,paddingRight:15,
    flexWrap:'wrap',flexDirection:'row'
  },
  tableRight:{
    paddingLeft:15,
    paddingRight:15,
    alignItems: 'center',
    alignSelf: 'center',
    width:'50%'
  },
  leftTableView:{
    flexWrap:'wrap',flexDirection:'row',
    flex:1

  },
  leftIcon:{
    width:30,
    flex:0,flexDirection:'column',
    justifyContent:'flex-start',
    borderColor: '#ff0',
    alignItems: 'flex-start'
  },
  rightText:{
    width:'80%',flexDirection:'column',
    flex:0,
    justifyContent:'flex-start',
    borderColor: '#ddd',
    alignItems: 'flex-start'
  },
  testName:{
    fontSize:14,
    color: 'rgba(0,0,0,.87)',
    fontWeight:'bold',
    width:'100%'
  },
  testLabel:{
    fontSize:12,
    color: 'rgba(0,0,0,.54)'

  },
  noResponseText:{
    paddingLeft:15,
    fontWeight:'bold',
    paddingTop:15,
    fontSize:14
  }
})
