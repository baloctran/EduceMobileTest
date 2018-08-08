import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  matColVal: {
    flex: 1.001,
    top: 70
  },
  matColLine: {
    flex: 0.001

  },
  matLine: {
    borderLeftColor: '#ccc',
    width: 100,
    height: 140,
    borderLeftWidth: 2,
    top: 40,
    right: -90,
    borderRadius: 50,
    position: 'absolute'

  },

  matLine1: {
    borderRightColor: '#ccc',
    width: 100,
    height: 140,
    borderRightWidth: 2,

    left: -5,
    top: 40,
    borderRadius: 50,
    position: 'absolute'

  },

  matVals: {
    width: '100%',
    height: 70,

    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    paddingBottom: 28

  },

  indicator: {
    color: 'rgba(0,0,0,0.54)',
    fontSize: 14,
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
  //   width: 320
  //
  // },
  matrixViewTabletArea: {
    width: 650
  },
  matrixViewMobileArea: {
    width: 320
  }

})
