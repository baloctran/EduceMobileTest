
import * as React from 'react'
import { connect } from 'react-redux'

import Home from '../../screen/Home'
import HomeTablet from '../../screen/Home/TabletView'
import { Dimensions  } from 'react-native'

import getWorklists from '../../../shared/redux/selectors/worklists'
import { actions } from '../../../shared/redux/helpers/pouch'
import { actions as contextActions } from '../../../shared/redux/modules/context'
const { height, width } = Dimensions.get('window')
const aspectRatio = height/width

const data = [
  { quarter: 1, earnings: 3000 },
  { quarter: 2, earnings: 19500 },
  { quarter: 3, earnings: 6250 },
  { quarter: 4, earnings: 19000 },
  { quarter: 5, earnings: 7000 }
]
//
@connect(
  (state) => ({
    worklists: getWorklists(state),
    procedures: state.procedures,
    interventions: state.interventions,
    context: state.context,
    graphData: data,
    state: state
  }),
  {
    loadWorklist: actions('worklist').request,
    setFocusDate: contextActions.setFocusDate
  }
)
export default class HomeContainer extends React.Component {
  tablet = false;

  componentWillMount() {
    //this.props.loadWorklist()   //loads the worklist,interventions(patients information) and procedures from saga into the store.
    if(aspectRatio > 1.6) 
      this.tablet = false
    
    else
      this.tablet = true
    
  }
  render() {
    // const worklists = Object.entries(this.props.worklists.byId)
    
    if(this.tablet) 
      return <HomeTablet {...this.props}/>
    
    else 
      return <Home {...this.props}/>
    
  }
}
