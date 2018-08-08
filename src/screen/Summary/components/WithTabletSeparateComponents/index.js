import { WithTabletSeparateSections } from './WithTabletSeparateSections'
import GeneralFindings from '../../components/GeneralFindings'
import LabTest from '../../components/LabTest'
import AllChapters from '../../components/AllChapters'

export const WithTabletSeparateComponents = (section, allProps, toggleModal, data) => {
  /* this separates each component rendering into individual component */
  switch (section.component) {
    case 'GeneralFindings': return WithTabletSeparateSections(GeneralFindings, section, allProps, toggleModal, data)
    case 'LabTest': return WithTabletSeparateSections(LabTest, section, allProps, toggleModal, data)
    case 'allChapters': return WithTabletSeparateSections(AllChapters, section, allProps, toggleModal, data)
    default: return WithTabletSeparateSections(AllChapters, section, allProps, toggleModal, data)
  }
}
