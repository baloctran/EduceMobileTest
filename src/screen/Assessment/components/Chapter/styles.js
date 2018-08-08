import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FBFAFA'
  },
  rightArrow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '10%'
  },
  questionGroupTitle: {
    backgroundColor: '#e6e6e6',
    marginTop: 0,
    textAlign: 'left',
    paddingLeft: 25,
    paddingRight: 0,
    marginBottom:5
  },
  questionGroupListItem: {
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'transparent',
    fontSize: 16,
    color: 'rgba(0,0,0,.87)',
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth:0,
    borderColor:'transparent'
  }
 
})
