import { createStyles, maxWidth } from 'react-native-media-queries'

// Define your styles
const base = {
  questionGroupContent: {
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15, 
    paddingBottom: 10
  },
  groupedInstancesContainer: {
    backgroundColor: '#f6f7f7',
    marginRight: 0,
    marginBottom:15    
  },
  inputBoxs: {
    borderBottomWidth: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0, width: '100%',
    paddingBottom: 0
  },
  questionAnswerContainer:{
    paddingLeft: 0
  }
}

const stylesMediaQuery = createStyles(
  base,

  // override styles only if screen height is less than 500
  maxWidth(750, {
    questionGroupContent: {
      marginLeft: 0,
      marginTop: -5,
      paddingTop: 0,
      paddingLeft:0,
      paddingRight: 0, 
      paddingBottom: 0
    },
    groupedInstancesContainer: {
      backgroundColor: '#f6f7f7',
      marginRight: 0,
      marginBottom:0,
      paddingLeft:25,
      paddingRight:10  
    },
    inputBoxs: {
      borderBottomWidth: 0,
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0, width: '100%',
      paddingBottom: 0
    },
    questionAnswerContainer:{
      paddingLeft: 35,
      paddingTop:15,
      paddingBottom:15
    }
  })
)
export default stylesMediaQuery
