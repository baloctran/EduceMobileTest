import { createStyles, maxWidth } from 'react-native-media-queries'

// Define your styles
const base = {
  loginForm: {
    width:580,
    marginLeft:'auto',
    marginRight:'auto'
  },
  headerLogin: {
    height:200
  },
  userIconCon:{
    top:160
  }
}

 const stylesMediaQuery = createStyles(
  base,

  // override styles only if screen height is less than 500
  maxWidth(600, {
    loginForm: {
      width:300,
      marginLeft:'auto',
      marginRight:'auto'
    },
    headerLogin: {
      height:170
    },
    userIconCon:{
      top:125
    }

  })
)
export default stylesMediaQuery
