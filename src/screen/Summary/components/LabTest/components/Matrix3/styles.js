import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  matColVal: {
    flex: 1.001,
    top: 70
  },
  matColLine: {
    flex: 0.001,
    position: 'absolute',
    top: 34,
    left: 127

  },
  matLine: {

    width: 1,
    height: 150,
    backgroundColor: '#ccc',
    top: 10,
    left: 0,
    position: 'absolute',
    transform: [{ rotate: '-50deg' }]

  },

  matLine1: {
    backgroundColor: '#ccc',
    width: 1,
    height: 150,

    top: 10,
    left: 0,
    transform: [{ rotate: '50deg' }],
    position: 'absolute'
  },

  matVals: {
    width: '100%',
    height: 70,

    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: 'rgba(0,0,0,0.87)',
    paddingBottom: 28

  },

  indicator: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 13,
    paddingRight: 20,
    fontWeight: 'normal'
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
  //   width: '100%'
  //
  // },
  matrixViewTabletArea: {
    width: 650
  },
  matrixViewMobileArea: {
    width: 320
  }
})
