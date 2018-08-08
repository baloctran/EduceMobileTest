import { connect } from "react-redux"
import { withReduxSaga } from 'shared/redux/store'

import { actions as patientActions } from 'shared/redux/modules/patient'
import { actions as contextActions } from 'shared/redux/modules/context'
import { actions as pouchActions } from 'shared/redux/modules/pouch'
import { actions as assessmentActions } from 'shared/redux/modules/assessment'
// import { Chapter, ChapterHandle } from 'shared/components/assessment'

const { persist: persistPatient } = patientActions
const { activateChapter } = contextActions
const { loadAndPrepDocument } = assessmentActions

export default (component) => 

connect(
  (state, ownProps ) => ({
    templates: state.templates.byId,
    active: state.context,
    pouch: state.pouch
  }),
  {
      loadAndPrepDocument, persistPatient, activateChapter, pouchReceive: pouchActions.receive
  }
)(component)