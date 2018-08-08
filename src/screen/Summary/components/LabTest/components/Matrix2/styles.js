import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  matColVal: {
    flex: 1.001,
    top: 40,

    position: 'relative'

  },
  // matColLine: {
  //   flex: 0.001
  //
  // },
  matLine: {

    transform: [{ rotate: '45deg' }],

    position: 'absolute',
    width: 100,
    backgroundColor: 'transparent',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    bottom: 0,
    left: 95,
    right: 0,
    top: 32

  },

  matVals: {
    width: '100%',
    height: 40,

    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    paddingBottom: 10,
    paddingTop: 10

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
    top: 2
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
    paddingBottom: 10,
    position: 'relative'

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
    width: 740
  },
  matrixViewMobileArea: {
    width: 320
  }
})
