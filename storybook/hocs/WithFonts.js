import React from "react"
import { View, Text } from "native-base"
import { Font } from 'expo'

export default (WrappedComponent) => class WithFont extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

	async componentWillMount() {
    await Font.loadAsync({
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      FontAwesome : require("../CustomFonts/fa-solid-900.ttf")
		})
    // require('react-devtools') //This should be only for dev
    this.setState({ loading: false })
  }

	render() {
    const { children, ...props} = this.props
    if(this.state.loading) return <Text>Loading Fonts...</Text>
    return <WrappedComponent {...props} />
	}
}

// {React.cloneElement(children, props)}
// <div>
// </div>
