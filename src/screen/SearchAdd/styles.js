import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  
  searchPatient: Platform.OS === 'ios' ?  {
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign:'left',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: .3,
    shadowRadius: 3,
    elevation: 1,
    zIndex:3
    
	  }:
	  { paddingTop: 18,
      paddingLeft: 15,
      paddingRight: 15,
      paddingBottom: 18,
      textAlign:'left',
      backgroundColor: '#fff',
      marginBottom: 0,
      borderBottomColor: '#e4e4e4',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 4
    },
  bodyAlign:{
    flex:1,
    alignSelf:'flex-start',
    paddingBottom: 10,
    paddingTop:0
  },
  findText:{
    color:'rgba(0,0,0,0.87)',
    fontSize:16,
    fontWeight:'bold'
  },
  findTextCaption:{
    color:'rgba(0,0,0,0.54)',
    fontSize:12,
    fontWeight:'normal'
  },
  searchBarText:{
    flex:1,
    alignSelf:'flex-start',
    width:'100%',
    height:45,
    paddingBottom: 3,
    borderWidth:1,
    borderRadius:4,
    borderColor:'#e4e4e4',
    borderBottomWidth:Platform.OS === 'ios' ? 0:1
  },
  searchBarInput:{
    height:45,
    borderBottomWidth:0
  },
  searchIcon:{
    color:'rgba(0,0,0,0.54)',
    fontSize:26
  },
  list:{
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 16,
    paddingTop:13
  }
	 
})
