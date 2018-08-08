import React from 'react'
import { View, ScrollView } from 'react-native'
import { Button, Left, Text } from 'native-base'
import Autocomplete from 'react-native-autocomplete-input'

import commonStyles from '../../QuestionsCommonStyles'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import { Col, Row, Grid } from 'react-native-easy-grid'


export default class AutoCompleteComponent extends React.Component {

  state = {
    common: true,
    commonAnswers: [],
    questionAnswers: [],
    query: ''
  }

  componentDidMount() {
    const { question, answers, response = {}, label = true, initial } = this.props

    const tempCommonAnswers = []
    const tempquestionAnswers = []

    const questionAnswers = question.answers || []
    const commonAnswers = question.commonAnswers || question.answers

    commonAnswers.map((answerId, key) => {
      const answer2 = answers[answerId]
      tempCommonAnswers.push({ '_id': answer2._id, 'name': answer2.name })
    })

    questionAnswers.map((answerId) => {
      const answer = answers[answerId]
      tempquestionAnswers.push({ '_id': answer._id, 'name': answer.name })
    })

    this.setState({
      commonAnswers: tempCommonAnswers,
      questionAnswers: tempquestionAnswers
    })

  }

  componentWillUpdate(nextProps) {
    // console.log('AC will receive Props', this.props, nextProps)
  }

  findCommonAnswers(query) {
    if (query === '') 
      return []
    

    const { commonAnswers } = this.state
    const regex = new RegExp(`${query.trim()}`, 'i')
    return commonAnswers.filter(cAnswer => cAnswer.name.search(regex) >= 0)
  }

  findQuestionAnswers(query) {
    if (query === '') 
      return []
    

    const { questionAnswers } = this.state
    const regex = new RegExp(`${query.trim()}`, 'i')
    return questionAnswers.filter(qAnswer => qAnswer.name.search(regex) >= 0)
  }

  render() {
    const { question, answers, response = {}, label = true, initial } = this.props

    // this.setState({common: true})
    const handleChange = (event) => {
      event.preventDefault()
      const { answer, response, ...updatedResponse } = this.props.response
      if (this.refs.select) updatedResponse.answer = this.refs.select.value
      if (this.refs.typeahead) updatedResponse.response = this.refs.typeahead.value
      this.props.changeResponse(updatedResponse)
    }

    const toggleCommon = () => {
      this.setState({ common: !this.state.common })
      // console.log('toggleCommon', this.state.common)
    }

    const { query } = this.state
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim()
    const commonAnswers = this.findCommonAnswers(query)
    const questionAnswers = this.findQuestionAnswers(query)

    return (
      <View>

        <View style={commonStyles.flexs}>
          <Left style={commonStyles.flesSubComponent}>
            {label && <Text style={commonStyles.questionhead} >{initial + 1}. {question.question}</Text>}
          </Left>
        </View>
        <Grid style={styles.autoCompleteGrid}>
          <Row style={{ width: '100%' }}>
            <Col style={{ width:'95%' }} >
              <View style={styles.autoCompleteContainer}>
                <ScrollView keyboardShouldPersistTaps="always" >
                  <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    listContainerStyle={styles.listContainerStyle}
                    containerStyle={styles.containerStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    listStyle={styles.listStyle}
                    data={ this.state.common ?
                      this.state.commonAnswers.length === 1 && comp(query, commonAnswers[0].name) ? [] : commonAnswers
                      : 
                      this.state.questionAnswers.length === 1 && comp(query, questionAnswers[0].name) ? [] : questionAnswers
                    }
                    defaultValue={query}
                    onChangeText={text => this.setState({ query: text })}
                    placeholder={question.placeholder || 'Your answer'}
                    renderItem={({ name }) => 
                      <Text style={styles.itemText} onPress={() => this.setState({ query: name })} >
                        {name}
                      </Text>
                    }
                  />
                </ScrollView>
              </View>
            </Col>
            <Col style={{ width:'5%' }}>
              <View >
                <Button style={styles.buttonBg}
                  onPress={toggleCommon}><Ionicons color="#fff" size={18} name={this.state.common ? 'ios-arrow-up' : 'ios-arrow-down'} />

                </Button>
              </View>
            </Col>
          </Row>
        </Grid>
      </View>
    )
  }
}
