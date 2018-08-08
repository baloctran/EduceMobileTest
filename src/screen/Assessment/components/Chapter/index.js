import React from 'react'
import { View } from 'react-native'
// import { Col, Row, Grid } from 'react-native-easy-grid'
import { Text,ListItem } from 'native-base'
import { QuestiongroupLatest, QuestiongroupMany } from '../../components'
import styles from './styles'
import stylesMediaQuery from './mediaStyle'

export default class Chapter extends React.Component {
  render() {
    const { chapter, patient, responses, instances, questiongroups, questions, answers, changeResponse } = this.props
    if(!chapter)
      return <Text>Loading...</Text>


    return (
      <View >
        { chapter && chapter.sections && chapter.sections.map((section, sKey) => {
          return (
            <View key={sKey} >
              {/* <Text>Section {JSON.stringify(section)}</Text> */}
              {section.title && section.title !== chapter.title &&

            <View style={styles.questionGroupTitle}>
              <ListItem  style={styles.questionGroupListItem}>
                <Text >Section {section.title}</Text>
              </ListItem>
            </View>
              }
              { section.columns &&
              section.columns.map((col,ck) => col.map((questiongroupId, qgKey) => {
                const questiongroup = questiongroups[questiongroupId]
                // return <Text key={qgKey}> QG {questiongroupId} {JSON.stringify(questiongroup)}</Text>
                if (questiongroup && questiongroup.count !== 'n')
                  return (
                    <View key={qgKey} >
                      {/* <Text> 1SECTION {JSON.stringify(section)}</Text> */}
                      {questiongroup.title !== section.title &&
                      <View style={styles.questionGroupTitle}>
                        <ListItem  style={styles.questionGroupListItem}>
                          <Text >{questiongroup.title}</Text>
                        </ListItem>
                      </View>
                      }
                      <View style={stylesMediaQuery.questionGroupContent}>
                        <QuestiongroupLatest key={questiongroup._id}
                          questiongroup={questiongroup}
                          questions={questions}
                          answers={answers}
                          patient={patient}
                          instances={instances[questiongroup._id]}
                          responses={responses}
                          changeResponse={changeResponse}/>
                      </View>
                    </View>
                  )

                else if (questiongroup && questiongroup.count === 'n')
                  return (
                    <View key={qgKey}>
                      {/* <Text> nSECTION {JSON.stringify(questiongroup)}</Text> */}
                      {/* <Text> INSTNACES {JSON.stringify(instances)}</Text> */}
                      {questiongroup.title !== section.title &&
                      <View style={styles.questionGroupTitle}>
                        <ListItem  style={styles.questionGroupListItem}>
                          <Text >{questiongroup.title}</Text>
                        </ListItem>
                      </View>
                      }
                      <View style={stylesMediaQuery.questionGroupContent}>
                        <QuestiongroupMany key={questiongroup._id}
                          questiongroup={questiongroup}
                          questions={questions}
                          answers={answers}
                          patient={patient}
                          instances={instances[questiongroup._id]}
                          responses={responses}
                          changeResponse={changeResponse}/>
                      </View>
                    </View>
                  )

              })
              )}
            </View>
          )
        })}
      </View>
    )
  }
}
//   <View className = {'container-fluid ' + styles.chapter}>
//   { chapter && <Text h2>{chapter.title}</Text>}
//   { chapter && chapter.sections && chapter.sections.map((section, sKey) => {
//     return (
//       <View key={sKey} className={styles.section}>
//         {/* <Text>Section {JSON.stringify(section)}</Text> */}
//         {section.title && section.title !== chapter.title && <Text h3>Section {section.title}</Text>}
//         { section.columns &&
//             section.columns.map((col,ck) => col.map((questiongroupId, qgKey) => {
//               const questiongroup = questiongroups[questiongroupId]
//               // return <Text key={qgKey}> QG {questiongroupId} {JSON.stringify(questiongroup)}</Text>
//               if (questiongroup && questiongroup.count !== 'n') {
//                 return (
//                   <View key={qgKey} className={'col-xs-12 col-sm-6 col-xl-' + (12 / section.columns.length)}>
//                   {/* <Text> 1SECTION {JSON.stringify(section)}</Text> */}
//                     {questiongroup.title !== section.title && <Text h4>{questiongroup.title}</Text>}
//                     <QuestiongroupLatest key={questiongroup._id}
//                       questiongroup={questiongroup}
//                       questions={questions}
//                       answers={answers}
//                       patient={patient}
//                       instances={instances[questiongroup._id]}
//                       responses={responses}/>
//                   </View>
//                 )
//               }
//               else if (questiongroup && questiongroup.count === 'n') {
//                 return (
//                   <View key={qgKey} className={'col-xs-12 col-sm-6 col-xl-' + (12 / section.columns.length)}>
//                   {/* <Text> nSECTION {JSON.stringify(questiongroup)}</Text> */}
//                   {/* <Text> INSTNACES {JSON.stringify(instances)}</Text> */}
//                     {questiongroup.title !== section.title && <Text h4>{questiongroup.title}</Text>}
//                     <QuestiongroupMany key={questiongroup._id}
//                       questiongroup={questiongroup}
//                       questions={questions}
//                       answers={answers}
//                       patient={patient}
//                       instances={instances[questiongroup._id]}
//                       responses={responses}/>
//                   </View>
//                 )
//               }
//             })
//           )}
//       </View>
//     )
//   })}
// </View>


// return <p>{JSON.stringify(chapter, null, 2)}</p>
// }


// if (questiongroup && questiongroup.count !== 'n') {
//                     return (
//                       <Col key={qgKey} xs={12} sm={12 / section.columns.length}>
//                         {questiongroup.title !== section.title && <h4>{questiongroup.title}</h4>}
//                         <QuestiongroupLatest key={questiongroupId}
//                           questiongroup={questiongroup}
//                           responses={resp}
//                           patient={patient}/>
//                       </Col>
//                     )
//                   }
//                   else if (questiongroup && questiongroup.count === 'n') {
//                     let instances = []
//                     if ( responses && responses.byQuestiongroup && questiongroups[questiongroupId]) {
//                       instances = responses.byQuestiongroup[questiongroupId] || []
//                       return (
//                         <Col key={qgKey} xs={12} sm={12 / section.columns.length}>
//                           {questiongroup.questiongroup !== section.title && <h4>{questiongroup.questiongroup}</h4>}
//                           <QuestiongroupMany key={questiongroupId}
//                             questiongroup={questiongroups[questiongroupId]}
//                             instances={instances}
//                             patient={patient}/>
//                         </Col>
//                       )
//                     }
//                   }


// })}
//                     col.questiongroups && col.questiongroups.map((questiongroupId, qgKey) => {
//                       let resp = {}
//                       if (responses && responses.mostRecent) resp = responses.mostRecent[questiongroupId]
//                       const questiongroup = questiongroups[questiongroupId]
//                       if (questiongroup.count == 1) {
//                         return (
//                           <View key = {colKey} className={styles.column}>
//                             <h4>{questiongroup.questiongroup}</h4>
//                             <QuestiongroupLatest key={questiongroupId}
//                               questiongroup={questiongroup}
//                               responses={resp}
//                               patient={patient}/>
//                           </View>
//                         )
//                       }
//                       else { // It's an 'n'
//                         let instances = []
//                         if ( responses && responses.byQuestiongroup) {
//                           instances = responses.byQuestiongroup[questiongroupId] || []
//                         }

//                           return (
//                             <View key = {colKey} className={styles.column}>
//                               <h4>{questiongroup.questiongroup}</h4>
//                               <QuestiongroupMany key={questiongroupId}
//                                 questiongroup={questiongroups[questiongroupId]}
//                                 instances={instances}
//                                 patient={patient}/>
//                             </View>
//                           )
//                         }
//                       })}
//                   })
//                 }
//               </View>

//  && Object.keys(responses[questiongroupId]).length > 0
// return (<Questiongroup questiongroup={questiongroups[questiongroupId]}/>)
// <Section section = {section} key={key} />
// <View key = {key}> {section.title}</View>)
// {this.props.chapter.sections.map((section, key) => {
//   return (<Section key={key} section={section} />)
// })}
// {sections.map((section, key) => {
//   return (
//   <View key={key}>
//     <View> {section.title}</View>
//   </View>)
// })}
//  {sections.map((section) => {
//         return (<p>{section.title}</p>)
//       }}
// return <Section section/>
