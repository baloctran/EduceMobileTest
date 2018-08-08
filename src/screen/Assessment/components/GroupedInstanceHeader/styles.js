import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  groupedInstancesContainer: {
    backgroundColor: '#f6f7f7',
    marginRight: 5
  },
  groupInstanceHeadingBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    height:40
  },
  accordionHeading: {
    flex: 0,
    width: '70%', color: 'rgba(0,0,0,.87)'
  },
  accordionAns: {
    flex: 0,
    width: '30%', color: 'rgba(0,0,0,.87)'
  },
  answerContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  answerCaption: {
    fontSize: 14,
    color: 'rgba(0,0,0,.87)',
    fontWeight: 'bold',
    width:'100%'
  },
  showMore: {
    textDecorationLine: 'underline',
    color: '#67a0fc'
  },
  mobileShowMoreText: {
    flex: 0,
    paddingLeft: 25,
    paddingRight: 0
  }

})
