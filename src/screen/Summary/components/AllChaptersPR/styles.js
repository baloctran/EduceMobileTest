import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  responseView:{
    flex: 1,
    flexDirection: 'row' ,
    flexWrap:'wrap',
    paddingLeft:5,
    paddingRight:0,
    paddingBottom:8
  },
  squareSum: {
    color: 'rgba(0,0,0,.34)',
    fontSize:10,
    marginTop:-4,
    marginRight:4
  },
  responseLeft:{
    width:'70%',
    flex:0,
    justifyContent:'flex-start',
    borderColor: '#ff0',
    alignItems: 'flex-start'
  },
  responseRight:{
    width:'30%',
    flex:0,
    justifyContent:'flex-end',
    borderColor: '#ff0',
    alignItems: 'flex-end'
  },
  summaryResponseTitle: {
    fontSize:14,
    color: 'rgba(0,0,0,.87)'
  },
  lastUpdate:{
    fontSize:12,
    color: 'rgba(0,0,0,.54)'
  }

})
