import { Dimensions, StyleSheet } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: '#000'
  },
  headerFooterBg: {
    backgroundColor: '#4cb050',
    height: 'auto',
    paddingTop: 5,
    paddingBottom: 5
  },
  captionText: {
    fontSize: 16
  },
  normalText: {
    fontSize: 14
  },
  commonColor: {
    color: '#fff'
  },
  text: {
    fontSize: 18
  },
  nameIcon: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: '#4cb050',
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  name: {
    fontSize: 24,
    lineHeight: 48,
    textAlign: 'center'
  },
  patientName: {
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 0,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 3,
    height: '22%'
  },
  textContent: {
    width: '90%',
    paddingTop: 2,
    paddingLeft: 0,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  textOne: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1
  },
  textTwo: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .54)',
    paddingLeft: 1,
    paddingBottom: 4
  },
  tabletCardCss: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    borderColor: '#fff'
  },
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
  tabletListText: {
    fontSize: 13,
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1,
    paddingBottom: 4
  },
  listText: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1,
    paddingBottom: 4
  },
  listNo: {
  		fontSize: 24
  	},
  caption: {
    		fontSize: 12,
    		color: 'rgba(0, 0, 0, .54)',
    		alignSelf: 'flex-start',
    		flexDirection: 'column',
    		paddingLeft: 3
    	},
  captions: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, .54)',
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },
  tabletIconDash: {
    width: 45,
    height: 45
  },
  iconDash: {
    width: 56,
    height: 56
  },
  tabletListNo: {
    fontSize: 20
  },
  generalHeading: {
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15
  },
  summaryGrid:{
    backgroundColor: '#fcf9f2',
    borderTopColor:'#fff',
    borderTopWidth:1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation:6,
    zIndex:6
  },

})
