import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { data } from './worklistDetailData'
import WithFonts from '../../hocs/WithFonts'
import WD from '../../../src/screen/WorklistDetail'

const WorklistDetail=WithFonts(WD)

export default (module) => storiesOf('WorklistDetail', module)
  .add('Normal - Anes', 
    () => <WorklistDetail
      navigation={{}} 
      worklist={data.worklists.Worklist1}
      procedures={data.procedures}
      interventions={data.interventions}
      patients={data.patients}
    />
  )
      
  .add('Normal - Theater', 
    () => <WorklistDetail
      navigation={{}}
      worklist={data.worklists.Worklist2}
      procedures={data.procedures}
      interventions={data.interventions}
      patients={data.patients}
    />
  ) 
  .add('W/O - Worklist - Loading indicator', 
    () => <WorklistDetail
      navigation={{}}
      worklist={{}}
      procedures={data.procedures}
      interventions={data.interventions}
      patients={data.patients}
    />
  )
 
