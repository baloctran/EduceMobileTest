import { Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  icon: {
    width: 48,
    height: 48,
    marginTop: 0,
    borderRadius: 60,
    marginRight: 7,
    marginLeft: 0,
    backgroundColor: "#4cb050",
  },
  userIcon: {
    marginLeft: 0,
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
    lineHeight: 46,
  },

  flexs: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    marginBottom: 5,
    justifyContent: "space-between",
  },

  patientName: {
    alignItems: 'flex-start',
    fontSize: 16,
    color: "rgba(0,0,0,.87)",
  },

  patientLabel: {
    fontSize: 14,
    color: "rgba(0,0,0,.87)",
  },
  patientLabelTablet :{
    fontSize: 14,
    color: "rgba(0,0,0,.87)",
    alignSelf : 'flex-end',
    fontWeight:'normal'
  },
  
  
  patientStatusRed: {
    fontSize: 11,
    color: "#ea4a4a",
    letterSpacing: 1,

  },
  patientName: {
    fontSize: 14,
    fontWeight: "600",
    color: "rgba(0,0,0,.87)",

  },
  pateintDes: {
    fontSize: 14,
    fontWeight: "normal",
    color: "rgba(0,0,0,.87)",
    marginLeft: 0,

    marginRight: 0,
    padding:0,

  },
  patientButton: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: 'flex-start',
  },
  summaryBtn: {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft: 12,
    paddingRight: 12,
    color: "#fff",
    textAlign: "center",
    marginRight: 10,

    borderRadius: 6,
    backgroundColor: "#efa31d",

  },
  assessmentBtn: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    paddingLeft: 12,
    paddingRight: 12,
    textAlign: "center",
    borderRadius: 6,
    backgroundColor: "#acacac",

  }, summaryIcon: {
    color: "#fff",
    fontSize: 14,
  },
  summText: {
    fontSize: 14,
    color: "#fff",
    paddingLeft: 3,
    paddingRight: 0,
  },
  bodyView: {

    borderBottomWidth: 1,
    borderColor: "rgba(214, 214, 214,.6)",
    paddingBottom: 20,
    paddingRight: 0,
    marginRight: 0,
  },
  asesmentPatient: {
    width: "100%",
    paddingBottom: 0,
    paddingRight: 15,
    paddingLeft: 15,
    textAlign: "center",
    alignItems: 'center',
    paddingTop: 20,
    marginLeft: 0,
    marginRight: 0,
    borderBottomWidth: 0,
  },
  interventionIcon: {
    fontFamily: 'FontAwesome',
    color: "rgba(0,0,0,.54)",
    fontSize: 12
  },
  assessmentIcon: {
    fontFamily: "FontAwesome",
    color: "#fff",
    fontSize: 14,
  },
});
