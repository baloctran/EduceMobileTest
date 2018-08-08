import {  StyleSheet } from 'react-native'


export default StyleSheet.create({
  icon: {
    width: 48,
    height: 48,
    marginTop: 0,
    borderRadius: 60,
    marginRight: 7,
    marginLeft: 0,
    backgroundColor: '#4cb050'
  },
  userIcon: {
    marginLeft: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    lineHeight: 46
  },
  patCaption:{
    marginLeft:0
  },
  patientDocter:{
    fontSize: 14,
    marginLeft:0,
    color: 'rgba(0,0,0,.87)'
  },
  flexs: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 5,
    justifyContent: 'space-between'
  },
  leftFind:{
    marginLeft:0
  },

  patientNames: {
    fontWeight:'bold',
    fontSize: 14,
    marginLeft:0,
    color: 'rgba(0,0,0,.87)'
  },

  patientLabel: {
    fontSize: 14,
    color: 'rgba(0,0,0,.87)'
  },
  patientLabelTablet :{
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
    alignSelf : 'flex-end',
    fontWeight:'normal'
  },
  patientLabelTablet2:{
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
    fontWeight:'normal',
    marginLeft: 0,

    marginRight: 0
  },
  patientCap: {
    fontSize: 12,
    color: 'rgba(0,0,0,.54)'


  },
  patientCapTablet: {
    alignSelf: 'flex-end',
    fontSize: 12,
    color: 'rgba(0,0,0,.54)',
    marginLeft: 0,

    marginRight: 0
  },
  patientStatusRed: {
    fontSize: 14,
    color: '#4cb050',
    letterSpacing: 1

  },
  patientName: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgba(0,0,0,.87)'

  },
  // pateintDes: {
  //   fontSize: 14,
  //   fontWeight: 'normal',
  //   color: 'rgba(0,0,0,.87)',
  //   marginLeft: 0,
  //
  //   marginRight: 0,
  //   padding:0
  //
  // },
  patDetailsView:{ paddingBottom: 7,
    borderBottomWidth: 1,
    borderColor: 'rgba(214, 214, 214,.6)'
  },
  patientButton: {

    marginTop: 12,
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  summaryBtn: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 7,
    paddingRight: 7,
    color: '#fff',
    textAlign: 'center',
    marginRight: 8,
    height:38,
    borderRadius: 6,
    backgroundColor: '#efa31d'

  },
  assessmentBtn: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
    paddingLeft: 7,
    paddingRight: 7,
    textAlign: 'center',
    borderRadius: 6,
    backgroundColor: '#acacac',
    height:38

  }, summaryIcon: {
    color: '#fff',
    fontSize: 13
  },
  summText: {
    fontSize: 14,
    color: '#fff',
    lineHeight:39,
    paddingLeft: 0,
    paddingRight: 0
  },
  bodyView: {

    paddingBottom: 20,
    paddingRight: 0,
    marginRight: 0
  },
  // asesmentPatient: {
  //   width: '100%',
  //   paddingBottom: 0,
  //   paddingRight: 15,
  //   paddingLeft: 15,
  //   textAlign: 'center',
  //   alignItems: 'center',
  //   paddingTop: 20,
  //   marginLeft: 0,
  //   marginRight: 0,
  //   borderBottomWidth: 0
  // },
  // interventionIcon: {
  //   fontFamily: 'FontAwesome',
  //   color: 'rgba(0,0,0,.54)',
  //   fontSize: 12
  // },
  assessmentIcon: {
    fontFamily: 'FontAwesome',
    color: '#fff',
    fontSize: 13

  },
  patientCard:{
    marginBottom:15,
    paddingLeft:0,
    paddingRight:0
  },
  dateText:{
    flex:1
  }
})
