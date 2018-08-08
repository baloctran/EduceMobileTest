import React from 'react'
import { storiesOf } from '@storybook/react-native'
import WithFonts from '../../hocs/WithFonts'
import { summaryData, instancesBlankResponses, instancesWithResponses } from './summaryData'

// import S from '../../../src/container/SummaryContainer'
import S from '../../../src/screen/Summary'
import ST from '../../../src/screen/Summary/TabletView'
import MC1 from '../../../src/screen/Summary/components/LabTest/components/Matrix1'
import MC2 from '../../../src/screen/Summary/components/LabTest/components/Matrix2'
import MC3 from '../../../src/screen/Summary/components/LabTest/components/Matrix3'
import MC4 from '../../../src/screen/Summary/components/LabTest/components/Matrix4'
import MC5 from '../../../src/screen/Summary/components/LabTest/components/Matrix5'
import MC6 from '../../../src/screen/Summary/components/LabTest/components/Matrix6'
import MC from '../../../src/screen/Summary/components/LabTest/components/Matrix'
import { Content, View } from 'native-base'

const Summary = WithFonts(S)
const SummaryTablet = WithFonts(ST)
const MatrixComponent = WithFonts(MC)
const MatrixComponent1 = WithFonts(MC1)
const MatrixComponent2 = WithFonts(MC2)
const MatrixComponent3 = WithFonts(MC3)
const MatrixComponent4 = WithFonts(MC4)
const MatrixComponent5 = WithFonts(MC5)
const MatrixComponent6 = WithFonts(MC6)

const responses = summaryData.response.gordon

export default (module) => storiesOf('Summary', module)
  .add('Mobile - View',
    () => <Summary
      navigation={{}}
      patient={summaryData.patient.gordon}
      responses={responses}
      instances={instancesWithResponses}
      output={summaryData.templateoutput}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      answers={summaryData.answer}
      interventions={summaryData.intervention[1]}
      procedures = {summaryData.procedure}
      matrixindicators = {summaryData.matrixindicators}

    />
  )
  .add('W/O Output Json - Loading Indicator(Mobile View)',
    () => <Summary
      navigation={{}}
      patient={summaryData.patient.gordon}
      responses={responses}
      instances={instancesWithResponses}
      output={summaryData}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      answers={summaryData.answer}
      interventions={summaryData.intervention[1]}
      procedures = {summaryData.procedure}

    />
  )
  .add('W/O Output Json - Loading Indicator(Tablet View)',
    () => <SummaryTablet
      navigation={{}}
      patient={summaryData.patient.gordon}
      responses={responses}
      instances={instancesWithResponses}
      output={summaryData}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      answers={summaryData.answer}
      interventions={summaryData.intervention[1]}
      procedures = {summaryData.procedure}
      matrixindicators = {summaryData.matrixindicators}
    />
  )
  .add('Tablet - View',
    () => <SummaryTablet
      navigation={{}}
      patient={summaryData.patient.gordon}
      responses={responses}
      instances={instancesWithResponses}
      output={summaryData.templateoutput}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      answers={summaryData.answer}
      interventions={summaryData.intervention[1]}
      procedures = {summaryData.procedure}
      matrixindicators = {summaryData.matrixindicators}
    />
  )

  .add('Matrix - View',
    () => <View><MatrixComponent
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )
  .add('Matrix - View1',
    () => <View><MatrixComponent1
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )
  .add('Matrix - View2',
    () => <View><MatrixComponent2
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )

  .add('Matrix - View3',
    () => <View><MatrixComponent3
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )
  .add('Matrix - View4',
    () => <View><MatrixComponent4
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )

  .add('Matrix - View5',
    () => <View><MatrixComponent5
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )
  .add('Matrix - View6',
    () => <View><MatrixComponent6
      navigation={{}}
      indicator = {summaryData.matrixindicators.bioChem.indicators}
      questiongroups={summaryData.questiongroup}
      questions={summaryData.question}
      responses={responses}
      instances={instancesWithResponses.bioChem}
      outputQuestiongroup={summaryData.templateoutput.sections[1].columns[0].questiongroups[0]}
      questiongroupWithTitle={summaryData.questiongroup.bioChem}
    /></View>

  )


