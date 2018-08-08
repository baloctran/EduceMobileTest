import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  responseTimeIcon: {
    fontFamily: 'FontAwesome',
    color: "rgba(0,0,0,.54)",
    fontSize: 12
  },
  row: {
    width: "100%",
    paddingLeft: 25,
    paddingRight: 0,

  },
  content: {
    marginLeft: 20,
    marginBottom: 10,
  },
  timeline: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 20,
    width: 20,
    justifyContent: 'center', // center the dot
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    top: 30,
    left: 9,
    width: 4,
    bottom: 0,
    height:45
  },
  topLine: {
    flex: 1,
    width: 1,

    backgroundColor: '#dee2e5',
  },
  bottomLine: {
    flex: 1,
    width: 1,
    backgroundColor: '#dee2e5',
  },
  hiddenLine: {
    width: 0,
  },
  dot: {
    width: 11,
    height: 11,
    borderRadius: 11,
    backgroundColor: '#f3a715',
    color: "rgba(0,0,0,.87)",
  },
  answerText: {
    fontSize: 14,
    marginBottom: 5,
  },
  answerCaption: {
    fontSize: 12,

    color: "rgba(0,0,0,.54)",
  },
  answerCaptions: {
    fontSize: 12,
   
    color: "rgba(0,0,0,.54)",
  },
  answerGroup: {
    flex: 1, flexDirection: "row",
    width: "95%",
  },

})
