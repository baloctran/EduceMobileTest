import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  autoCompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1
  },
  itemText: {
    fontSize: 14,
    margin: 2
  },
  autoCompleteGrid: {
    paddingTop: 15
  },
  buttonBg: {
    backgroundColor: '#efa31d'
  },

  listContainerStyle:
  {
    width: '100%',
    zIndex: 99999999 
  },
  containerStyle:
  {
    width: '100%',
    borderWidth: 0,
    borderColor: 'transparent'
  },
  inputContainerStyle: {
    paddingLeft: 0,
    borderWidth: 0,
    borderColor: '#000',
    borderBottomWidth: 1
  },
  listStyle: {
    zIndex: 1,
    position: 'relative'
  }
})
