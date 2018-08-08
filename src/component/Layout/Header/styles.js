import { StyleSheet ,Platform } from 'react-native'

module.exports = StyleSheet.create({

  
  headerBg: Platform.OS === 'ios' ? {
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
    alignItems: 'center',
    paddingLeft:0,
    paddingRight:0
  },
  btnDashboard:{
    paddingTop:2,
    paddingBottom:0,
    height:'auto'
  },
  tabletHeaderDash: {
    paddingLeft: 0, backgroundColor: '#4cb050',
    paddingRight: 0, paddingTop: 0


  },
  displayText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left'
  },

  displayTexts: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left'
  },
  dashboardMenuIcon: {
    color: '#fff',
    fontSize: 30
  },
  listName: {
    paddingLeft:0,
    alignItems:'flex-start',
    alignSelf:'center',
    justifyContent:'center'
  },
  dashHeaderLeftTab: {

    width: '20%', flex: 0,
    height: 64,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 1,
    backgroundColor: '#398d3d',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 2,
    elevation: 1
  },
  dashHeadBody: {
    flex: 1,
    flexDirection: 'row',
    height: 'auto'
  },
  dashLeft: {
    width: 'auto', flex: 0
  },
  dashRight: {
    width: '85%', flex: 0,
    alignItems: 'flex-start'
  }

})
