import React, { Component, PropTypes } from 'react'
import Question from '../question'
import { View, Text } from 'react-native'
import { Input } from 'native-base'

const styles = {}

const digest = (questiongroup, instances, answers) => {
  const summarised = instances.map((instance)=>{
    const instanceSummary = {instance: instance}
    if (instance.blank) instanceSummary.value = ['Add..']
    else {
      instanceSummary.value = questiongroup.questions.reduce((acc, questionId)=>{
        const response = instance.questions[questionId]
        if (response.answer) 
          return acc + answers[response.answer].name + ' / '
        
        else return acc + (response.response || '?') + ' / '
      }, '')
      instanceSummary.value = instanceSummary.value.substring(0, instanceSummary.value.length - 3)
    }
    return instanceSummary
  })
  return summarised
}

export default class Summary extends React.Component {
  componentWillMount () {
    this.setState({ is: digest(this.props.questiongroup, this.props.instances, this.props.answers) })
  }

  componentWillReceiveProps () {
    this.setState({ is: digest(this.props.questiongroup, this.props.instances, this.props.answers) })
  }

  toggleEdit (instances, instance) {
    let i
    const is = instances.map((inst)=>{
      if(inst.instance.instance == instance.instance) 
        inst.instance.editing = !inst.instance.editing
      
      return inst
    })
    this.setState({ is: is })
  }
  
  handleClick = (event) => {
    event.preventDefault()
  }

  render() {
    const { questiongroup, questions } = this.props
    let label = questiongroup.questions.reduce((acc, question) => {
      const q = questions[question]
      return acc + (q.abbr || q.question) + ' / '
    }, '')

    label = label.substring(0, label.length - 3)
    const { is: summaries } = this.state
    const toggleEditing = (instance) => {
      const func = (event) => {
        event.preventDefault()
        console.log('toggling', instance)
        this.toggleEdit(summaries, instance)
      }
      console.log('Func', func)
      return func
    }
    function logIt() {
      console.log('LOG')
      return (event) => {
        event.preventDefault()
        event.stopPropagation()
        console.log('EVENT', event)
      }
    }

    return (
      <View className={classNames(this.props.className, styles.summary)}>
        <Text>{label}</Text>
        {summaries.map((instanceSummary, sKey) => 
          <View key={sKey}>
            <View style={{ display: 'flex', flexDirection: 'row' }}
              onClick={toggleEditing(instanceSummary.instance)}>
              <Input value={instanceSummary.value} readOnly/>
            </View>
            <View>
              <View
                className={classNames(styles.overlay, { invisible: !instanceSummary.instance.editing })}
                onClick={toggleEditing(instanceSummary.instance)}>
                <View className={styles.cta}
                  onClick={logIt()}>
                  <View className={styles.content}
                    onClick={this.handleClick}>
                    { questiongroup.questions.map((questionId)=> {
                      const response = instanceSummary.instance.questions[questionId]
                      return ( response &&
                        <Question key={questiongroup._id + '-' + instanceSummary.instance.instance + '-' + questionId}
                          changeable={!response._id}
                          question={questions[questionId]}
                          response={response}
                        />
                      )
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>
          )}
      </View>
    )
  }
}