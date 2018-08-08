import { Dimensions, StyleSheet, Platform } from 'react-native'

const deviceHeight = Dimensions.get('window').height

export default StyleSheet.create({
  inputBox: {
    height: 55,
    width: '100%',
    borderRadius: 60,
    backgroundColor: '#f5f8fb',
    color: '#3c343e',
    fontSize: 16,
    borderColor: '#6fb078'
  },
  itemStyle: {
    backgroundColor: '#f5f8fb',
    borderWidth: 1,
    height: 60
  },
  btn: {
    marginTop: 22,
    borderColor: 'green',
    backgroundColor: '#5ba564',
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 8,
    marginBottom: 80
  },
  icon: {
    width: 45,
    height: 45,
    marginTop: 0,
    borderRadius: 60,
    marginLeft: 6,
    backgroundColor: '#6fb078'
  },
  inputIcon: {
    lineHeight: 45,
    textAlign: 'center'
  },
  backgroundImage: {
    backgroundColor: '#ccc',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  userIcon: {
    ...Platform.select({
      ios: {
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: '#fff',
        shadowColor: '#70b178',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        position: 'absolute',
        zIndex: 1,
        top: 0,
        opacity: 1
      },
      android: {
        width: 80,
        height: 80,
        borderRadius: 100,
        elevation: 0,
        backgroundColor: '#fff',
        shadowColor: '#70b178',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4,
        position: 'relative',
        zIndex: 1,
        top: 0,
        opacity: 1
      }
    })
  },
  userIconMd: {
    lineHeight: 80,
    textAlign: 'center',
    color: '#7a6e7a',
    fontSize: 50
  },
  userIconCon: {
    ...Platform.select({
      ios: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 99,
        position: 'absolute',
        top: 120,
        height: 0

      },
      android: {
        justifyContent: 'center',
        position: 'absolute',
        top: 110,
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        elevation: 99,
        padding: 4,
        textAlign: 'center'
      }
    })
  },
  boxLogin: {
    ...Platform.select({
      ios: {
        paddingTop: 70,
        backgroundColor: 'rgba(255, 255, 255, .55)',
        position: 'relative'
      },
      android: {
        paddingTop: 70,
        backgroundColor: 'rgba(255, 255, 255, .55)',
        position: 'relative',
        shadowColor: '#796e7a',
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 1
      }
    })
  },
  forget: {
    color: '#322a32',
    textAlign: 'right',
    textDecorationLine: 'underline',
    marginTop: 35,
    right: 15

  },
  headerLogin: {
    ...Platform.select({
      ios: {
        height: 160,
        backgroundColor: 'rgba(0,0,0,0.05)',
        position: 'relative',
        elevation: 1,
        width: '100%',
        borderColor: '#000',
        borderBottomWidth: 0
      },
      android: {
        height: 150,
        backgroundColor: 'transparent',
        position: 'relative',
        elevation: 1,
        width: '100%',
        borderColor: '#000',
        borderBottomWidth: 0
      }
    })
  },

  passwordItem: {
    top: 20,
    backgroundColor: '#f5f8fb',
    bottom: 20,
    borderWidth: 1,
    height: 60
  },
  logoImg: {
    position: 'relative',
    marginTop: -20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  containerActivity: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }

})
