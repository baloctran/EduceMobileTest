import React from 'react'
import { Title, Button } from 'native-base'
import { View, Text, Dimensions, ScrollView, Platform, ActivityIndicator } from 'react-native'
import Header from '../../component/Header'
import { ChapterHandle, Chapter } from './components'
import styles from './styles'
import { Col, Grid } from 'react-native-easy-grid'
import { MaterialIcons } from '@expo/vector-icons'
import Display from 'react-native-display'
import PatientName from '../../component/PatientName'

// import assessment from '../../../shared/redux/connectors/assessment';
const { height, width } = Dimensions.get('window')
const aspectRatio = height / width

export default class Assessment extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tablet: false,
      pressedArrowIcon: false

    }
  }

  showChapterhandle() {

    const toggle = !this.state.pressedArrowIcon
    this.setState({ pressedArrowIcon: toggle })
  }
  componentWillMount() {
    if (aspectRatio > 1.6) 
      this.setState({
        tablet: false
    })
    else 
      this.setState({
        tablet: true
    })
  }
  
  // const chapter = template.chapters ? template.chapters[context[template._id] || 1] : null
  // const activeChapter = (context[patientId] && context[patientId][templateId] ? context[patientId][templateId] || 0 : 0);
  // const activeChapter = 0
  render() {
    const { navigation, patient, template, responses, instances, questiongroups,
      questions, answers, activateChapter, activeChapter, changeResponse } = this.props

    if (!template.chapters) // #TODO That's a failure.. don't show a loading icon indefinitely here!
      return <View style={[styles.containerActivity, styles.horizontal]}>
        <ActivityIndicator size="large" color="#4cb050" />
      </View>

    return (
      <View style={styles.mainContainer}>
        <Header navigation={navigation}>
          {template.name && <Title style={styles.displayText}>{template.name}</Title>}
          {activeChapter.title && <Text style={styles.textChapter}>{activeChapter.title}</Text>}
        </Header>
        {patient && <PatientName patient={patient}/>}
        <Grid>
          <Col >
            <View style={{ position: 'relative' }}>
              {/* The below component will render as fixed sidebar in tablet and draggable sidebar in mobile device*/}
              <Display enable={this.state.pressedArrowIcon || this.state.tablet} enterDuration={500}
                exitDuration={250}
                exit="fadeOutLeft"
                enter="fadeInLeft" style={this.state.tablet ? styles.tabletDisplayComponent : styles.displayComponent} >
                {patient && template && template.chapters &&
                  <View style={styles.chapterHandleContainer}>
                    {template.chapters.map((chapter, key) =>
                      <ChapterHandle
                        key={key}
                        chapter={chapter}
                        active={activeChapter === key}
                        onClick={activateChapter(patient._id, template._id, chapter._id)}
                      />
                    )
                    }
                  </View>
                }
              </Display>

              {/* The below button component will render only in mobile device for internal sidebar showcase using the Display plugin*/}

              <Display enable={!this.state.tablet} style={Platform.OS === 'ios' ? { position: 'absolute', zIndex: 99 } : this.state.pressedArrowIcon ? styles.afterButtonMain : styles.buttonMain}>
                <Button style={Platform.OS === 'ios' ? this.state.pressedArrowIcon ? styles.afterButtonMain : styles.buttonMain : styles.arrowBtn} onPress={this.showChapterhandle.bind(this)} >
                  <MaterialIcons name={this.state.pressedArrowIcon ? 'chevron-left' : 'chevron-right'} style={styles.buttonArrow} color="#ffffff" />
                </Button>
              </Display>


              {/* The below code will render for the chapter questions and input box and will display accordinally if tablet or mobile is running it*/}
              <ScrollView style={this.state.pressedArrowIcon ? styles.afterChapterMainColN : this.state.tablet ? styles.tabletChapterMainCol : styles.chapterMainCol}>
                <View>
                  {patient && template && template.chapters &&
                    <View style={styles.chapterViewMain}>
                      <Chapter
                        chapter={activeChapter||template.chapters[0]}
                        patient={patient}
                        responses={responses}
                        instances={instances}
                        questiongroups={questiongroups}
                        questions={questions}
                        answers={answers}
                        changeResponse={changeResponse}
                        className="container" />
                    </View>
                  }
                  <View style={styles.buttonView}>
                    <Button style={styles.saveButton} ><Text style={styles.saveButtonText} onPress={() => this.props.save}>Save</Text></Button>
                  </View>
                </View>
              </ScrollView>
            </View>
          </Col>
        </Grid>
      </View>
    )
  }
}
