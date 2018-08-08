import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import WithFonts from '../../hocs/WithFonts'
import { data } from '../fixtures'

import S from '../../../src/screen/Assessment/components/question/Select'
import D from '../../../src/screen/Assessment/components/question/Date'
import T from '../../../src/screen/Assessment/components/question/Toggle'
import TE from '../../../src/screen/Assessment/components/question/Text'
import A from '../../../src/screen/Assessment/components/question/AutoCompleteComponent'

const Select = WithFonts(S)
const Date = WithFonts(D)
const Toggle = WithFonts(T)
const Autocomplete = WithFonts(A)
const Text = WithFonts(TE)


const question = { 
  _id: 0, question:'I am a question',
  neg: 'toggleChecking',
  answers: ['nstemi','iddm', 'hypothyroidism','pe','hypertension','stemi','asthma','stroke','niddm'] 
}
const blankResponse = { _id:0, instance:0, patient:'gordon', questionId: 0 }
const populatedResponse = { _id:0, instance:0, patient:'gordon', questionId: 0, response: 'Hi!' }

const questionAutocomplete = { _id: '1',
  question: 'Procedure',
  abbr: 'proc',
  questionType: 7, 
  classes: 'autocompleteCombobox',
  ajax: 'procs',
  inputType: 1,
  answers: ['P1','P2','P3','P4','P5','P6','P7','P8','P9','P10'],
  commonAnswers: ['P3','P5','P8'],
  class: 'Question'
}

export default (module) => storiesOf('Assessment/Questions', module)
  .add('Select (fresh)', 
    () => <Select
      question={question}
      answers={data.answer}
      changeResponse={action('ChangeResponse')}
      label = {true}
      initial={0}
      count={0}
    />
  )
  .add('Date (fresh)', 
    () => <Date
      question={question}
      answers={data.answer}
      changeResponse={action('ChangeResponse')}
      label = {true}
      initial={0}
      count={0}
    />
  )
  .add('Toggle (fresh)', 
    () => <Toggle
      question={question}
      answers={data.answer}
      changeResponse={action('ChangeResponse')}
      label = {true}
      initial={0}
      count={0}
    />
  )

  .add('Autocomplete (fresh)', 
    () => <Autocomplete
      question={questionAutocomplete}
      answers={data.answer}
      changeResponse={action('ChangeResponse')}
      label = {true}
      initial={0}
      count={0}
    />
  )
  .add('Text (fresh)', 
    () => <Text
      question={question}
      answers={data.answer}
      changeResponse={action('ChangeResponse')}
      label = {true}
      initial={0}
      count={0}
    />
  )
  .add('Text with response', 
  () => <Text
    question={question}
    response={populatedResponse}
    changeResponse={action('ChangeResponse')}
    label = {true}
    />
  )
