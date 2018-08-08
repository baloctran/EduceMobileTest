import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Root } from 'native-base'
import { Text, StatusBar } from 'react-native'
import { Font } from 'expo'
import { withReduxSaga } from './shared/redux/store'
import Loading from './src/screen/Loading'
import Login from './src/container/LoginContainer'
import Home from './src/container/HomeContainer'
import WorklistDetailContainer from './src/container/WorklistDetail'
import SearchAdd from './src/container/SearchAddContainer'
import Sidebar from './src/container/SidebarContainer'
import Store from './src/container/StoreContainer'
import Assessment from './src/container/AssessmentContainer'
import Summary from './src/container/SummaryContainer'

import Storybook from './storybook'

/*****************************
 * BEGIN SNACK EXPO API
 ******************************/
import { SnackSession } from 'snack-sdk';
import QRCode from 'qrcode.react';
/*****************************
 * END SNACK EXPO API
 ******************************/

console.disableYellowBox = true

 const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		WorklistDetail: { screen: WorklistDetailContainer },
		SearchAdd: { screen: SearchAdd },
		Store: { screen: Store },
		Assessment: { screen: Assessment },
		Summary: { screen: Summary },
	},
	{
		initialRouteName: 'Home',
		contentComponent: props => <Sidebar {...props} />,
	}
)

export const AppNavigator = StackNavigator(
  {
    Login: { screen: Login },
    Drawer: { screen: Drawer }
  },
  {
    // initialRouteName: 'Home',
    // initialRouteName: 'Drawer',
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)
const SNACK_EXPO_INITIAL_CODE = '';

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
      loading: true ,
      /* BEGIN SNACK EXPO API */
      snackExpoUrl: '',
      snackExpoCode,
      snackExpoLog: null,
      snackExpoError: null,
      snackExpoPresence: null,
      snackExpoSaveUrl: null,
      /* END SNACK EXPO API */
    }
    
    //SNACK EXPO API
    const snackExpoCode = SNACK_EXPO_INITIAL_CODE;
    this._snack = new SnackSession({
      files: { 'App.js': { contents: snackExpoCode, type: 'CODE' } },
      dependencies: {},
      // sessionId is optional, will be assigned a random value if not specified
      sessionId: Math.random()
        .toString(36)
        .substr(2, 8),
      sdkVersion: '24.0.0',
    });
    this._snackExpoLogSubscription = this._snack.addLogListener(this._onLog);
    this._snackExpoErrorSubscription = this._snack.addErrorListener(this._onError);
    this._snackExpoPresenceSubscription = this._snack.addPresenceListener(this._onPresence);
  }

  /*****************************
   * BEGIN SNACK EXPO API
   ******************************/
  async _startSnack() {
    await this._snack.startAsync();
    let snackExpoUrl = await this._snack.getUrlAsync();
    this.setState({
      snackExpoUrl,
    });
  }
  _onChangeCode = async event => {
    const snackExpoCode = event.target.value;
    this.setState({
      snackExpoCode,
    });
    await this._snack.sendCodeAsync({ 'App.js': { contents: snackExpoCode, type: 'CODE' } });
  };

  _onLog = log => {
    this.setState({
      snackExpoLog: JSON.stringify(log, null, 2),
    });
  };

  _onError = error => {
    this.setState({
      snackExpoError: JSON.stringify(error, null, 2),
    });
  };

  _onPresence = presence => {
    this.setState({
      snackExpoPresence: JSON.stringify(presence, null, 2),
    });
  };

  _removeListeners = () => {
    this._snackExpoLogSubscription.remove();
    this._snackExpoErrorSubscription.remove();
    this._snackExpoPresenceSubscription.remove();
  };

  _save = async () => {
    let saveResult = await this._snack.saveAsync();
    this.setState({
      snack_expo_saveUrl: saveResult.url,
    });
  };
  /*****************************
   * END SNACK EXPO API
   ******************************/

  async componentWillMount () {
    /* BEGIN SNACK EXPO API */
    this._startSnack();
    /* END SNACK EXPO API */

    await Font.loadAsync({
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    })
    await Font.loadAsync({
      FontAwesome: require('native-base/Fonts/FontAwesome.ttf')
    })
    require('react-devtools') // This should be only for dev
    this.setState({ loading: false })
  }

  render () {
    if (this.state.loading) {
      return (
        <Root>
     <StatusBar hidden />
     <Text>Loading.. hold on a mo!</Text>
   </Root>
      )
    }

    return (
      <Root>
        <StatusBar hidden />
        <AppNavigator />
      </Root>
    )
  }
}

// export default (process.env.ENV == 'storybook' ? Storybook : withReduxSaga(Navigation))

// Swap these two below to run storybook, or the app

//  export default Storybook
	export default withReduxSaga(Navigation)
