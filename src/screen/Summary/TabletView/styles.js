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
    width: '75%',
    alignItems: 'flex-start',
    alignSelf: 'center',

    justifyContent:'flex-start'
  },
  leftNavigation: {
    width: 50, flex: 0,justifyContent:'flex-start'
  },
  rightNavigation: {
    width: '15%', flex: 0,
    alignItems: 'flex-end'
  },
  actionButtonIcon: {
    fontSize: 18,
    color: '#fff'
  },

  listHeader: {
    backgroundColor: '#a9a9a9',
    fontSize: 18,
    height: 40,
    color: '#fff',
    width: '100%'
  },

  // generalHeading: {
  //   borderBottomColor: '#e8e8e8',
  //   borderBottomWidth: 0.5,
  //   backgroundColor: '#fff',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingRight: 15,
  //   paddingLeft: 15
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
    marginLeft: 0

  },
  headingLabResultSeeFull: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#4cb050',
    marginRight: 0

  },
  sectionHeadingLabResult: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  labSectionLeft: {
    flex: 0,
    width: '60%'

  },
  labSectionRight: {
    flex: 0,
    width: '40%'

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
  leftSide: {
    flex: .5,
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    height: '100%'
  },
  profileLeftGrid: {
    flex: 1,
    flexDirection: 'row'
  },
  rightSide: {
    flex: .5,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    paddingLeft: 10,
    justifyContent: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  patientName: {
    color: 'rgba(0,0,0,.87)',
    fontWeight: 'bold',
    fontSize:14

  },
  patientGender: {
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'

  },
  nhi: {
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'
  },
  caption: {
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'
  },
  capDetail:{
    fontSize: 14,
    color: 'rgba(0,0,0,.87)'
  },
  sectionHeading: {
    fontSize: 16,
    width: '100%',
    color: 'rgba(0,0,0,.87)',
    fontWeight: 'bold'
  },
  historyBtn: {
    fontSize: 14,
    color: '#fb9c2f',
    fontWeight: 'bold'
  },
  patientName: {
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',

    marginBottom: 0,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    position: 'relative',
    height: 'auto',
    backgroundColor: '#fff'


  },
  profileInformation: {
    width: '77%',
    justifyContent: 'center'

  },
  row: {
    elevation: 8,
    position: 'relative',
    height: 'auto',
    flex: 1,
    flexDirection: 'row'
  },
  nhiValue: {
    color: 'rgba(0,0,0,.87)',

    fontSize:14

  },
  dobValue: {
    color: 'rgba(0,0,0,.87)',

    fontSize:14

  },
  scrollContainer: {
    position: 'relative',
    width: '100%',
    height: '100%'

  },
  contentContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f3f3',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  },

  dashLine: {
    width:2,
    height: '100%',
    flexDirection: 'column'

  },
  colOfDashLineDivider: {
    width: '2%',
    height: '100%',
    paddingBottom:10,
    paddingTop:50

  },
  // summaryGrid:{
  //   backgroundColor: '#fcf9f2',
  //   borderTopColor:'#fff',
  //   borderTopWidth:1,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 6,
  //   elevation:6,
  //   zIndex:6
  // },
  summaryGridCol:{
    flexDirection: 'row' ,
    height:'100%'
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
