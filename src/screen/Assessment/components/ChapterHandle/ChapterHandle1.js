import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/ChapterActions'
import { Link } from 'react-router'

function fetchData (props) {
  console.log('fetchData', props, fetch)
  //The point of this is to ensure that the data we need gets loaded from
  //pouch into redux.
  //We pull it into the component 'state' later on in mapStateToProps().
  props.actions.fetch(props.id)
}

function targetChapter(props) {
  return props.router.location.pathname+'?t='+props.router.location.query.t+'&c='+props.id;
}

function renderContent(props) {
  return (
    <Link to={targetChapter(props)}>
      <h4>{props.id}</h4>
    </Link>
  )
}
//<p>{props.Chapter._id}</p>
export class ChapterHandle extends React.Component {
  componentWillMount () {
    fetchData(this.props)
  }

  componentWillReceiveProps (nextProps) {
    fetchData(nextProps)
  }

  render() { return (renderContent(this.props)) }
}

function mapStateToProps(state, props) {
  return {
    chapter: state.chapters.byId[props.id],
    router: state.router
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actionCreators, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ChapterHandle)
