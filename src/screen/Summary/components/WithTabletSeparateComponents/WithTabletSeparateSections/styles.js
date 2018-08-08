import { StyleSheet } from 'react-native'

export default StyleSheet.create({

  // generalHeading: {
  //   borderBottomColor: '#e8e8e8',
  //   borderBottomWidth: 0.5,
  //   backgroundColor: '#fff',
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   paddingRight: 15,
  //   paddingLeft: 15
  // },

  // displayText: {
  //   textAlign: 'center',
  //   color: '#fff',
  //   fontSize: 20
  // },
  // sectionHeading: {
  //   fontSize: 14,
  //   fontWeight: 'bold',
  //   color: 'rgba(0,0,0,.87)',
  //   marginLeft: 0
  //
  // },

  sectionHeadingLabResult: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  labSectionLeft: {
    flex: 0,
    width: '60%'

  },
  labSectionRight: {
    flex: 0,
    width: '40%'

  },
  sectionHeading: {
    fontSize: 16,
    width: '100%',
    color: 'rgba(0,0,0,.87)',
    fontWeight: 'bold'
  },
  historyBtn: {
    fontSize: 14,
    color: '#fb9c2f',
    fontWeight: 'bold'
  },
  row: {
    elevation: 8,
    position: 'relative',
    height: 'auto',
    flex: 1,
    flexDirection: 'row'
  },
  // nhiValue: {
  //   color: 'rgba(0,0,0,.87)',
  //
  //   fontSize: 14
  //
  // },

  dashLine: {
    width: 2,
    height: '100%',
    flexDirection: 'column'

  },
  colOfDashLineDivider: {
    width: '2%',
    height: '100%',
    paddingBottom: 10,
    paddingTop: 50

  },
  // summaryGrid: {
  //   backgroundColor: '#fcf9f2',
  //   borderTopColor: '#fff',
  //   borderTopWidth: 1,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 1 },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 6,
  //   elevation: 6,
  //   zIndex: 6
  // },
  summaryGridCol: {
    flexDirection: 'row',
    height: '100%'
  }

})
