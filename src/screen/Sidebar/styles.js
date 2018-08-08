import { Dimensions, StyleSheet } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
  headerContainer: {
    elevation: 2,
    zIndex: 2
  },

  headerLogins: {
    height: 'auto',
    width: '100%',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    margin: 0
  },
  headerLogin: {
    height: 170,
    paddingLeft: 0,
    paddingRight: 0,
    position: 'relative',
    elevation: 1,
    width: '100%'
  },

  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null
  },
  menuItem: {
    fontWeight: 'bold',
    color: '#999',
    borderColor: '#fff'
  },
  menuIcon: {
    fontSize: 18,
    color: '#999',
    paddingRight: 25
  },

  nameIcon: {
    width: 64,
    height: 64,
    lineHeight: 64,
    borderRadius: 200,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'

  },

  name: {
    color: '#rgba(0, 0, 0, .87)',
    fontSize: 24,
    lineHeight: 60, textAlign: 'center'

  },
  nameEmail: {
    color: 'rgba(255, 255, 255, .87)',
    flexDirection: 'row',
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 35
  },
  dashboardTextMain: {
    color: '#4cb050',
    fontWeight: 'bold',
    fontSize: 14
  },
  sidebarDashboardIcon: {
    fontSize: 18, color: '#373737'
  },
  sideBarTextMain: {
    color: '#373737',
    fontWeight: '600',
    fontSize: 14
  },
  dashboardIcon: {
    fontSize: 18,
    color: '#4cb050'
  },
  itemTabletSelected: {
    backgroundColor: '#e0e0e0',
    color: '#373737',
    marginLeft: -16,
    paddingLeft: 32,
    borderBottomWidth: 0
  },
  sideBarTextMain: {
    color: '#999',
    fontWeight: '600',
    fontSize: 14
  },

  labelBox: {

    alignSelf: 'flex-start',
    textAlign: 'left',
    paddingLeft: 20,
    paddingTop: 25,
    width: '100%'
  },

  tabWelcomeMsg: {
    paddingTop: 19,
    width: '100%',
    paddingBottom: 19,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 2
  },
  helloMsg: {
    width: '90%',
    paddingTop: 5,
    paddingLeft: 0,
    marginLeft: 8,
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  tabName: {
    fontSize: 22,
    lineHeight: 42,
    textAlign: 'center'

  },
  dashNameIcon: {

    width: 42,
    height: 42,
    borderRadius: 42,
    alignSelf: 'flex-start',
    flexDirection: 'column', backgroundColor: '#ff9801'
  },
  text: {
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1
  },

  sideText: {
    color: 'rgba(0, 0, 0, .54)',
    paddingLeft: 0,
    paddingBottom: 4
  }

})
