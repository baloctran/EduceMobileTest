
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  welcomeMsg: {
    paddingTop: 18,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 4,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  helloMsgDash: {
    width: '90%',
    paddingTop: 5,
    paddingLeft: 0,
    marginLeft: 0,
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },

  textDash: {
    color: 'rgba(0, 0, 0, .87)',
    fontWeight: '600',
    paddingTop: 1, paddingBottom: 4
  },
  notice: {
    color: '#000'
  },
  textDashboard: {
    color: 'rgba(0, 0, 0, .54)',
    paddingLeft: 1,
    paddingBottom: 4
  },
  tabDash: {
    height: 'auto',
    marginLeft: 12,
    width: '62%',
    padding: 0,

    marginTop: -5


  },
  heightAuto: {
    height: 'auto',
    marginBottom: 12

  },
  calenderDiv: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 2,
    borderRadius: 4,
    elevation: 3

  },
  calenderView: {
    height: '100%',

    flexDirection: 'column',
    flex: 1,
    width: 'auto',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: 14

  },
  dashGrid: {
    backgroundColor: '#f6f6f6'

  },
  messageView: {
    width: '25%',
    height: '100%'
  },
  gridContainer: {
    paddingTop: 8,
    paddingLeft: 15, paddingRight: 15
  },
  calenderTitle: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#f6f6f6',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    fontSize: 14,
    color: 'rgba(0, 0, 0, .87)'
  },
  calenderHeading: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .87)',
    fontWeight: 'bold'
  },
  sidebarContent: {
    width: '20%',
    borderRightColor: '#e4e4e4',
    borderRightWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: .2,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 2
  }

})
