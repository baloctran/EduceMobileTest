import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  patientName: Platform.OS === 'ios' ? {
    paddingTop: 18,
    paddingBottom: 16,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
    marginBottom: 0,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: .3,
    shadowRadius: 3,
    elevation: 1,
    zIndex: 3
  } :
    {
      paddingTop: 18,
      paddingBottom: 16,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: '#fff',
      marginBottom: 0,
      borderBottomColor: '#e4e4e4',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 1,
      shadowRadius: 5,
      elevation: 4
    },
  textViewPatient: {
    width: '95%',
    paddingTop: 2,
    paddingLeft: 0,
    marginLeft: 10,
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  nameIcon: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: '#4cb050',
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  name: {
    color: '#fff',
    fontSize: 24,
    lineHeight: 48,
    textAlign: 'center',
  },
  textOne: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, .87)',
    paddingTop: 1,
  },
  textTwo: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .54)',
    paddingLeft: 1,
    paddingBottom: 4,
  },
})