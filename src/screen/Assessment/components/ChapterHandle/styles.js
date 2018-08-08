import { Dimensions, StyleSheet } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
  activeListItem: {
    backgroundColor: '#efa31d',
    color:'white'
  },
  listItemGeneral: {
    width: '100%',
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor:'#fff',
    borderBottomWidth:1,
    height:'auto',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
    alignItems:'flex-start'
    
  },
  chapterIcon: {
    width:30,
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0
   
  },
  activeIcon : {
    color:'white', 
    width:30
  },
  activeText :{
    color:'white' 
  },
  chapterHandleTitle: {
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomColor:'transparent'
  }
})
