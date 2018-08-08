import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    color: '#fff',
    paddingRight: 5
  },
  actionButtonEdit: {
    fontSize: 20,
    color: '#fff'
  },
  listHeader: {
    backgroundColor: '#938f86',
    flex: 1,
    flexDirection: 'row',

    paddingTop: 10,
    paddingBottom: 9,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 0,
    marginBottom: .5

  },
  // summaryTitle: {
  //   width: 300
  // },
  // displayText: {
  //   textAlign: 'center',
  //   color: '#fff',
  //   fontSize: 20
  // },
  chapterTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 14
  },
  listSumLeft: {
    flex: 0,
    flexWrap: 'wrap',
    width: '91%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start'
  },
  listSumRight: {
    flex: 0,
    width: '9%'
  },
  summaryAnswer: {
    backgroundColor: '#fcf9f2',
    paddingTop: 5,
    paddingBottom: 20

  },
  allChaptersColumn: {
    paddingBottom: 0
  },

  dashLine: {
    width: 3,
    height: 200,
    flexDirection: 'column'
  }
})
