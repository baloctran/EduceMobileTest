import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  tabletCardCss: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: .2,
    shadowRadius: 2,
    marginBottom: 20
  },
  cardsViewMobile: {
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


  tabletGraphCardsViews: {
    shadowColor: 'transparent',
    borderRadius: 4
  },

  cardsViews: {
    borderRadius: 6
  },
  containers: {
    borderRadius: 6,
    width: '100%'

  }

})


export default styles
