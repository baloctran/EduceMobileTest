import * as React from 'react'
import { Tab, Tabs, ScrollableTab } from 'native-base'
import Matrix from '../Matrix'
import styles from './styles'
import MatrixCurrentDetail from '../MatrixCurrentDetail'

// const mostRecentForQuestiongroup = (state, patientId, questiongroupId) => {
//   if (state.responses.byPatient[patientId])
//     if (state.responses.byPatient[patientId].mostRecent) {
//       if (state.responses.byPatient[patientId].mostRecent[questiongroupId])
//         return state.responses.byPatient[patientId].mostRecent[questiongroupId]

//     }

// }

export default class MatrixTabItems extends React.Component {
  render () {
    const { questions, questiongroup, patient, instances, questiongroups, answers, responses, matrixindicators } = this.props
    // const latestResponses = (responses && responses.mostRecent ? responses.mostRecent[questiongroup._id] : {})

    return (

      <Tabs style={styles.tabStyle} tabBarUnderlineStyle={styles.tabsList}
        renderTabBar={() => <ScrollableTab tabsContainerStyle={styles.tabContainer} />} >
        {questiongroup && questiongroup.map((qg, qgKey) => {
          const instancesCurrent = instances[qg.questiongroup]
          const indicator = matrixindicators[qg.questiongroup]
          const questiongroupWithTitle = questiongroups[qg.questiongroup] || {}
          return <Tab heading={questiongroupWithTitle.title} tabStyle={styles.tabHeadList } activeTabStyle={styles.tabHeadList} activeTextStyle={styles.tabActiveText} textStyle={styles.textColor}>
            <Matrix
              questiongroups={questiongroups}
              outputQuestiongroup={qg}
              patient={patient}
              instances={instancesCurrent}
              questions={questions}
              responses={responses}
              answers={answers}
              questiongroupWithTitle={questiongroupWithTitle}
              indicator={indicator.indicators}
            />
            {/* Only Latest instance needs to be passed to the instances prop in the below component - Currently all the instances of a particular questiongroup
            is being passed. (Latest instance Will be added from the redux part.)
            */}
            <MatrixCurrentDetail
              questiongroups={questiongroups}
              qgvalue={qg}
              patient={patient}
              instances={instances}
              questions={questions}
              responses={responses}
              answers={answers}
              questiongroupWithTitle={questiongroupWithTitle}
            />
          </Tab>
        })
        }
      </Tabs>
    )
  }
}
