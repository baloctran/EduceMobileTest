import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  matColVal: {
    flex: 1.001,
    top: 10

  },
  matColLine: {
    flex: 0.001
  },
  matLine: {
    borderLeftColor: '#ccc',
    width: 1,
    height: 81,
    borderLeftWidth: 1,
    top: 10,
    transform: [{ rotate: '-13deg' }]

  },
  matVals: {
    width: '100%',
    height: 40,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)'
  },

  indicator: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 14,
    paddingRight: 4,
    fontWeight: 'normal'
  },
  matBotLine: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 1

  },
  // labTestMatrixTitle: {
  //   width: '30%',
  //   marginLeft: 16,
  //   marginBottom: 10,
  //   justifyContent: 'center',
  //   alignSelf: 'center'
  //
  // },
  // labTestMatrixTitleMobile: {
  //   width: '40%',
  //   marginLeft: 16,
  //   marginBottom: 10,
  //   justifyContent: 'center',
  //   alignSelf: 'center'
  // },
  // labTestMatrixText: {
  //   color: 'rgba(0,0,0,0.87)',
  //   fontSize: 14
  // },

  matrixViewTablet: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 16,
    paddingBottom: 10,
    width: '55%'
  },
  matrixViewMobile: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 16,
    paddingBottom: 10
  },
  // matrixData: {
  //   paddingLeft: 15,
  //   width: '80%'
  // }

})
