import { WithSeparateSections } from './WithSeparateSections'
import GeneralFindings from '../../components/GeneralFindings'
import LabTest from '../../components/LabTest'
import AllChapters from '../../components/AllChapters'

// the below function switchs the component according to section.component key
export const WithSeparateComponents = (section, allProps, toggleModal) => {
  switch (section.component) {
    case 'GeneralFindings': return WithSeparateSections(GeneralFindings, section, allProps)
    case 'LabTest': return WithSeparateSections(LabTest, section, allProps, toggleModal)
    case 'allChapters': return WithSeparateSections(AllChapters, section, allProps, toggleModal)
    default: return WithSeparateSections(AllChapters, section, allProps, toggleModal)
  }
}
