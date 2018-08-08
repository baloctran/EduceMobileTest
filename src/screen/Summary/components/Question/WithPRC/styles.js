import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  generalFindingQrRow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 0.5

  },
  square: {
    color: 'rgba(0,0,0,.34)',
    fontSize: 8,
    lineHeight: 19,
    paddingRight: 4
  },
  // labTitle: {
  //   color: 'rgba(0,0,0,.87)',
  //   fontSize: 14
  // },
  singleQuestion: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: 'rgba(0,0,0,.87)',

    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'left',
    fontSize: 14,
    height: 35
  },
  singleQuestions: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    color:'rgba(0,0,0,87)'

  },
  sumaryQesResponse:{
    paddingLeft: 15,
    paddingRight: 15
  },
  response: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 14,
    color: 'rgba(0,0,0,.87)'
  },
  questions: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 8,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,.87)',
    fontSize: 14
  },
  matrixData: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    color: 'rgba(0,0,0,.87)',
    backgroundColor: '#fcf9f2',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'left',
    fontSize: 14,
    height: 35,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sumQueTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,.87)'
  },
  dashLine: {
    width: 2,
    height: 35,
    flexDirection: 'column'
  },
  dashLineGeneralFinding: {
    width: 2,
    height: 35,
    flexDirection: 'column'
  },
  icon: {
    paddingRight: 5,
    paddingTop: 3
  },
  fullHistoryQuestion: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 13,
    color: 'rgba(0,0,0,0.87)'
  }

})
