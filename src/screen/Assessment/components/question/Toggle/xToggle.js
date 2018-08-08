import React from 'react'
const styles = {}

export default class Toggle extends React.Component {

  render() {
    const { question, response = { checked: false } } = this.props

    // const className = classNames.bind(styles)({
    //   toggle: (!question.neg && !response.checked),
    //   toggleChecked: (!question.neg && response.checked),
    //   toggleNeg: (question.neg && !response.checked ),
    //   toggleNegChecked: (question.neg && response.checked),
    // })

    const handleChange = () => {
      event.preventDefault()
      const updatedResponse = { ...response, checked: response.checked ? false : true } // Swap the boolean - the button got clicked.
      // console.log(updatedResponse)
      // debugger
      this.props.changeResponse(updatedResponse)
    }
    
    // console.log('Toggle response', response, this.props.response)

    return (
      <div>
        <button className={className + ' ' + styles.base} onClick={handleChange}>{question.question}</button>
      </div>
    )
  }
}
