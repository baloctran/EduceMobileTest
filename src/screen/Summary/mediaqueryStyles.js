import { createStyles, maxWidth } from 'react-native-media-queries'

// Define your styles
const base = {
  profileImg: {
    width: 78,
    height: 78
  },
  patientText: {
    paddingBottom: 8

  },
  patientTexts: {
    paddingBottom: 8,
    textAlign: 'right'
  },
  GeneralFinding: {
    width: '40%',
    position: 'absolute',
    top: 10,
    left: 15,
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3
  },
  LabTest: {
    width: '59%',
    position: 'relative',
    right: 0,
    flexDirection: 'row',
    alignSelf: 'flex-end',

    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 3,
    backgroundColor: '#fff'
  },
  summaryColor: {
    backgroundColor: '#f3f3f3'
  },
  allChapters: {
    width: '100%', position: 'relative',
    flex: 1,
    flexDirection: 'row'

  },

  labSectionLeft: {
    flex: 0,
    width: '50%'

  },
  labSectionRight: {
    flex: 0,
    width: '50%',
    justifyContent: 'flex-end'
  }


}

const stylesMediaQuery = createStyles(
  base,

  // override styles only if screen height is less than 500
  maxWidth(750, {
    profileImg: {
      width: 50,
      height: 50,
      marginTop: -6
    },
    rightSide: {
      paddingTop: 8
    },
    sectionContainer: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 6,
      elevation: 3
    },
    patientText: {
      paddingBottom: 8,
      fontSize:14,
      color: 'rgba(0,0,0,.87)'

    },
    patientTexts: {
      paddingTop: 7,
      paddingBottom: 4,
      textAlign: 'left',
      width: '100%'

    },
    GeneralFinding: {
      width: '100%',
      flex: 1
    },
    LabTest: {
      width: '100%',
      flex: 1
    },
    surgeonInformation: {
      width: '100%',
      justifyContent: 'flex-start',
      textAlign: 'left'
    },
    summaryColor: {
      backgroundColor: '#fff'
    },
    allChapters: {
      width: '100%',
      flex: 1
    },
    labSectionLeft: {
      flex: 0,
      width: '50%'

    },
    labSectionRight: {
      flex: 0,
      width: '50%',
      justifyContent: 'flex-end'

    }
  })
)
export default stylesMediaQuery
