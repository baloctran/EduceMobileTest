import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 0,
    padding: 0
  },
  slideOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
  // text: {
  //   color: '#fff',
  //   fontSize: 30,
  //   fontWeight: 'bold'
  // },
  // que: {
  //   paddingLeft: 30
  // },
  popupqgTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.87)',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'left',
    backgroundColor: '#fefdfb',
    justifyContent: 'center'
  },
  flaskIcon: {
    fontSize: 16,
    paddingRight: 5
  },
  modalViews: {
    width: '100%',
    padding: 0
  },

  popTableHead: {
    height: 5
  },
  tableHeadOne: {
    flex: 0,
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#eee',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  tableHeadTwo: {
    width: '100%'
  },
  // tableHeadThree: {
  //   width: '100%',
  //   backgroundColor: '#fff',
  //   flex: 0,
  //   borderWidth: 1,
  //   borderTopWidth: 0,
  //   borderLeftWidth: 0,
  //   borderRightWidth: 0,
  //   borderColor: '#eee'
  // },
  tableColumns: {
    width: '25%',
    height: 45,
    justifyContent: 'center'

  },
  showButtons: {
    top: 100
  },
  dot: {
    width: 0,
    height: 0
  },
  buttonWrapperStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 0,
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingRight: '2%',
    paddingLeft: '20%',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
})
