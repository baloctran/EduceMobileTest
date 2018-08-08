import { createStyles, maxWidth } from 'react-native-media-queries'

// Define your styles
const base = {
  modalContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignSlef: 'center'
  }, 
  modalContentContainer: {
    width: '80%',
    height: '80%',
    marginLeft: 'auto',
    left: 0,
    right: 0,
    marginRight: 'auto'
  }
}

const MediaQuery = createStyles(
  base,
  // override styles only if screen height is less than 500
  maxWidth(750, {
    modalContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignSlef: 'center'
    },
    modalContentContainer: {
      width: '100%',
      height: '100%',
      marginLeft: 'auto',
      top:'10%',
      left: 0,
      right: 0,
      marginRight: 'auto'
    }
  })
)
export default MediaQuery
