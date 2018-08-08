import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  matColVal: {
    flex: 1.001,
    top: 60,

    position: 'relative'
  },
  matColLine: {
    flex: 0.001

  },
  matLine: {
    borderLeftColor: '#ccc',
    width: 60,
    height: 60,
    borderLeftWidth: 2,
    top: 40,
    left: -4,
    right: 0,
    borderRadius: 100,
    position: 'absolute',
    transform: [{ rotate: '-1deg' }]
  },
  matLine1: {
    borderRightColor: '#ccc',
    width: 70,
    height: 70,
    borderRightWidth: 2,
    position: 'absolute',
    top: 96,
    left: -35,
    right: 0,
    borderRadius: 100,
    transform: [{ rotate: '1deg' }]

  },
  matVals: {
    width: '100%',
    height: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    paddingLeft: 3

  },
  matVals3: {
    width: '100%',
    height: 60,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    marginLeft: 41

  },
  // matVals1: {
  //   width: '100%',
  //   height: 60,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   fontSize: 16,
  //   color: 'rgba(0,0,0,0.87)',
  //   paddingLeft: 40,
  //   paddingBottom: -50
  //
  // },

  indicator: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 14,
    paddingRight: 20,
    fontWeight: 'normal',
    textAlign: 'right'

  },
  matBotLine: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 1,
    top: -22

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
  //   width: '85%'
  // },
  // matrixArea: {
  //   width: 320
  //
  // },
  matrixViewTabletArea: {
    width: 620
  },
  matrixViewMobileArea: {
    width: 320
  }
})
