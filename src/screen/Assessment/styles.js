import { StyleSheet,Platform } from 'react-native'

export default StyleSheet.create({
    
  headerFooterBg: Platform.OS === 'ios' ? {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#4cb050',
    height:'auto',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    elevation: 4,
    color:'#fff',
    textAlign: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    marginBottom: 10,
    elevation: 2,
    position: 'relative'

  }:{
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#4cb050',
    height:'auto',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    elevation: 4,
    color:'#fff',
    textAlign: 'center',
    alignItems: 'center'
  },


  patientName: Platform.OS === 'ios' ?  {
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: .3,
    shadowRadius: 3,
    elevation: 1,
    zIndex:3
  }:
    {
      paddingTop: 18,
      paddingBottom: 16,
      paddingLeft: 15,
      paddingRight: 15,
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
  textViewPatient: {
    width: '95%',
    paddingTop: 2,
    paddingLeft: 0,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  textChapter: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop:3,
    paddingBottom:3,
    paddingLeft:5
  },
  // nameIcon: {
  //   width: 48,
  //   height: 48,
  //   borderRadius: 48,
  //   backgroundColor: '#4cb050',
  //   alignSelf: 'flex-start',
  //   flexDirection: 'column'
  // },
  name: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 48,
    textAlign: 'center'
  },
  textOne: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1
  },
  textTwo: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .54)',
    paddingLeft: 1,
    paddingBottom: 4
  },
  displayText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  listName: {
    paddingLeft: 20,
    alignItems:'flex-start',
    alignSelf:'flex-start'
  },
  dashboardMenuIcon:{
    color: '#fff',
    fontSize: 30
  },
  mainContainer: {
    flex: 1
  },
  chapterHandleContainer: {
    backgroundColor: '#f2f2f2',
    height: '100%'
  },
 
  saveButton: {
    backgroundColor: '#4cb050',
    paddingLeft:25,
    paddingRight:25,
    height:45,
    width:150,
    marginTop:20,
    marginBottom:10,
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    textAlign:'center'
  },
  saveButtonText: {
    color: '#ffffff'
  },
  buttonView:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  tabletDisplayComponent:{
    width: '25%',
    height:'100%',
    position:'absolute',
    paddingLeft: 0,
    paddingRight: 0,
    zIndex:99
  },
  displayComponent: {
    width: 200,
    height:'100%',
    position:'absolute',
    paddingLeft: 0,
    paddingRight: 0,
    zIndex:99
  },
  buttonMain: {
    backgroundColor: '#f3a715',
    height: 80,
    elevation: 20,
    zIndex: 20,
    width: 30,
    top: Platform.OS === 'ios' ? 70 : '40%',
    position:'absolute',
    left:0,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    textAlign: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8
  },
  arrowBtn:{
    height: '100%',
    elevation:0,
    backgroundColor: 'transparent',
    borderColor:'transparent'
  },
  afterButtonMain: {
    backgroundColor: '#f3a715',
    height: 80,
    elevation: 20,
    zIndex: 20,
    width: 30,
    right:0,
    left:200,
    position:'absolute',
    top: Platform.OS === 'ios' ? 70 : '40%',
    color: '#fff',
    textAlign: 'center',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 8
  },
  buttonArrow: {
    textAlign: 'center',
    fontSize: 30
  },
  tabletChapterMainCol:{
    width: '75%',
    paddingLeft:15,
    marginLeft:'25%'
  },
  chapterMainCol:
  {
    width: '100%'
  },
  afterChapterMainColN:{
    width: '100%',
    marginLeft:200

  },
  chapterViewMain: {
    width: '100%',
    position: 'relative'
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
