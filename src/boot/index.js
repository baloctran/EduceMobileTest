import * as React from "react";
import { Provider } from "mobx-react/native";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";

export default () => {
  withReduxSaga(
    class Setup extends React.Component {
      render() {
        return (
          <StyleProvider style={getTheme(variables)}>
            <Provider {...stores}>
              <App />
            </Provider>
          </StyleProvider>
        )
      }
    }
  )
}