import { StyleSheet } from 'react-native'

export default StyleSheet.create({   
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  modal: {
    backgroundColor: '#fff',
    flex: 0,
    flexDirection: 'row'
  },
  popupHeading: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.87)',
    fontWeight: 'bold'
  },
  modalView: {
    width: '100%',
    position: 'relative',
    height: '100%',
    padding: 15,
    backgroundColor: '#eee'
  },
  leftNavigation: {
    width: '85%', flex: 0
  },
  rightNavigation: {
    width: '15%', flex: 0,
    alignItems: 'flex-end'
  }
})
