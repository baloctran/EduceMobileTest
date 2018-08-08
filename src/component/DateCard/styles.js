import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  cardsView: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderColor: '#fff'
  },
  cardsViews: {
    borderRadius: 6
  },
  datePickers: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, .87)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftArrow: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .87)'
  },
  icon: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .87)'
  },
  date: {
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#080808'

  },
  rightArrow: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .87)'
  }

})


export default styles
