import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#f3f3f3'
  },
  dashboardMenuIcon: {
    color: '#fff',
    fontSize: 30

  },

  listName: {
    width: '70%',
    alignItems: 'flex-start'

  },
  leftNavigation: {
    width: '15%', flex: 0
  },
  rightNavigation: {
    width: '15%', flex: 0,
    alignItems: 'flex-end'
  },
  actionButtonIcon: {
    fontSize: 18,
    color: '#fff'
  },

  textThree: {
    width: '90%',

    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  listHeader: {
    backgroundColor: '#a9a9a9',
    fontSize: 18,
    height: 40,
    color: '#fff',
    width: '100%'
  },

  // generalHeading:{
  //   borderBottomColor: '#e8e8e8',
  //   borderBottomWidth: 0.5,
  //   backgroundColor:'#fff',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingRight:15,
  //   paddingLeft:15
  // },

  displayText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,.87)',
    marginLeft:0

  },
  headingLabResultSeeFull:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color:'#4cb050',
    marginRight:0

  },
  sectionHeadingLabResult:{
    flex:1,
    flexDirection: 'row',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    backgroundColor:'#fff',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:10,
    paddingBottom:10
  },

  sectionContainer: {

    borderColor: '#ccc',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3
  },
  textContent: {
    width: '90%',
    paddingTop: 2,
    paddingLeft: 0,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  leftSide:{
    flex: .5,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    height:'100%'
  },
  profileLeftGrid:{
    flex: 1,
    flexDirection:'row'
  },
  rightSide:{
    flex: .5,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingLeft: 10,
    textAlign:'right',
    justifyContent:'center',
    height:'100%',
    justifyContent:'center'
  },
  patientName:{
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
    fontWeight: 'bold'

  },
  patientGender:{
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'

  },
  nhi:{
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'
  },
  caption:{
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'
  },
  capDetail:{
    fontSize: 14,
    color: 'rgba(0,0,0,.87)'
  },
  sectionHeading:{
    fontSize: 16,
    width:'100%',
    color: 'rgba(0,0,0,.87)',
    fontWeight: 'bold'
  },
  historyBtn:{
    fontSize: 14,
    color: '#fb9c2f',
    width:'100%',
    textAlign:'right',
    fontWeight: 'bold'
  },
  patientName:{
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 0,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    justifyContent: 'space-between',

    position:'relative',
    height:'auto',
    flex:1,
    flexDirection:'row'

  },
  profileInformation:{
    width:'77%',
    justifyContent:'center',
    textAlign:'left'
  },
  row:{

    position:'relative',
    height:'auto',
    flex:1,
    flexDirection:'row'
  },
  nhiValue:{

    fontSize: 14,

    color: 'rgba(0,0,0,.87)'
  },
  dobValue :{
    fontSize: 14,
    color: 'rgba(0,0,0,.87)'
  },
  patientGrid:{

    marginBottom: 0,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    height:'auto',
    flex:1,
    flexDirection:'row',
    position:'relative',
    shadowColor: '#eee',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 3,
    elevation:3,
    width:'100%',

    position:'relative',
    backgroundColor: '#fff'
  },
  mobSummaryComponent1:{
    width: '100%' ,
    shadowColor: '#000',

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowRadius: 3,
    elevation:3,

    backgroundColor:'#000'
  },

  mobSummaryComponent2:{
    width: '100%' ,
    shadowColor: '#000',

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .5,
    shadowRadius: 3,
    elevation:2,
    marginBottom:10,
    backgroundColor:'#000'
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
