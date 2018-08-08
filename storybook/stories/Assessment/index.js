import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import WithFonts from '../../hocs/WithFonts'
import { data } from '../fixtures'
import { instancesBlankResponses, instancesWithResponses } from './data'

import A from '../../../src/screen/Assessment'
const Assessment = WithFonts(A)

const responses = data.response.gordon

// This part is normally pre-evaluated, and stored in the responses state.

export default (module) => storiesOf('Assessment', module)
  .add('Fresh',
    () => <Assessment
      navigation={{}}
      patient={data.patient.gordon}
      responses={responses}
      changeResponse={action('ChangeResponse')}
      instances={instancesBlankResponses}
      template={data.template.anaestheticAssessment}
      questiongroups={data.questiongroup}
      questions={data.question}
      answers={data.answer}
      activeChapter={data.template.anaestheticAssessment.chapters[0]}
      activateChapter={action('activateChapter')}/>
  )
  .add('with responses',
    () => <Assessment
      navigation={{}}
      patient={data.patient.gordon}
      responses={responses}
      changeResponse={action('ChangeResponse')}
      instances={instancesWithResponses}
      template={data.template.anaestheticAssessment}
      questiongroups={data.questiongroup}
      questions={data.question}
      answers={data.answer}
      activeChapter={data.template.anaestheticAssessment.chapters[0]}
      activateChapter={action('activateChapter')}
      />
  )
  .add('W/O Chapters - loading indicator',
    () => <Assessment
      navigation={{}}
      patient={data.patient.gordon}
      responses={responses}
      changeResponse={action('ChangeResponse')}
      instances={instancesBlankResponses}
      template={{}}
      questiongroups={data.questiongroup}
      questions={data.question}
      answers={data.answer}
      activeChapter={null}
      activateChapter={action('activateChapter')}/>
  )
  .add('with active Chapter',
    () => <Assessment
      navigation={{}}
      patient={data.patient.gordon}
      responses={responses}
      changeResponse={action('ChangeResponse')}
      instances={instancesBlankResponses}
      template={data.template.anaestheticAssessment}
      questiongroups={data.questiongroup}
      questions={data.question}
      answers={data.answer}
      activeChapter={data.template.anaestheticAssessment.chapters[0]}
      activateChapter={action('activateChapter')}/>
  )
