import { StyleSheet, Platform } from "react-native"

export default StyleSheet.create({
  headerFooterBg: Platform.OS === 'ios' ? {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: '#4cb050',
    height:"auto",
    width: "100%",
    textAlign: "center",
    alignItems: 'center',
    elevation: 4,
    color:"#fff",
    textAlign: "center",
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
    height:"auto",
    width: "100%",
    textAlign: "center",
    alignItems: 'center',
    elevation: 4,
    color:"#fff",
    textAlign: "center",
    alignItems: 'center',
  },
  listName: {
    paddingLeft: 20,
    alignItems:'flex-start',
    alignSelf:'flex-start'
  },
  dashboardMenuIcon:{
    color: "#fff",
    fontSize: 30,
  }
})
