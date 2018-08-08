import * as React from 'react'
import { Image, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Body, Title, Button, Text, View, Item, Input, Form, Toast } from 'native-base'
import styles from './styles'
import stylesMediaQuery from './mediaqueryStyles'

import appCommonStyles from '../../appCommonStyles'
import { FontAwesome } from '@expo/vector-icons'

const login = (identity, loginAction) => {
  if (identity && identity.validations && (identity.validations.emailError || identity.validations.passwordError)) { 
  // This can't fire - the button will be disabled in this case anyway..
    Toast.show({
      text: 'Enter Valid Email & password!',
      duration: 2000,
      position: 'top',
      textStyle: { textAlign: 'center' }
    })
  }
  else {
    loginAction(identity.credentials)
  }
}

class Login extends React.Component {
  componentWillReceiveProps(props) {
    const { identity } = props
    if (identity._id) 
      this.props.navigation.replace('Drawer')
		
    else if (identity.loggedIn === false && identity.loggingIn === false) 
      Toast.show({
        text: identity.loginError,
        duration: 2000,
        position: 'top',
        textStyle: { textAlign: 'center' }
      })
		
  }
  render() {
    const { identity, validate, loginAction } = this.props
    const valid = identity.validations

    if (!identity.loggedIn && identity.loggingIn) 
      return <View style={[styles.containerActivity, styles.horizontal]}>
        <ActivityIndicator size="large" color="#4cb050" />
      </View>
		
    return (
      <Container style={{ width: '100%' }}>
        <ImageBackground source={require('../../assets/bg.jpg')} style={styles.backgroundImage}>
          <Header style={[styles.headerLogin, stylesMediaQuery.headerLogin]}>
            <Body style={{ position: 'relative' }}>
              <Image style={styles.logoImg}
                source={require('../../assets/logo.png')}
              />
            </Body>
          </Header>
          <View style={[styles.userIconCon, stylesMediaQuery.userIconCon]}>
            <View style={styles.userIcon}><FontAwesome style={styles.userIconMd} name="user-md" /></View>
          </View>
          <Content style={styles.boxLogin} >
            <View style={stylesMediaQuery.loginForm} padder>
              <Form>
                <Item style={styles.itemStyle} bordered success rounded error={identity.validations.emailError ? true : false}>
                  <View style={styles.icon}><FontAwesome name="user-md" style={[styles.inputIcon, appCommonStyles.commonColor]} size={25} /></View>
                  <Input style={styles.inputBox}
                    placeholder="username"
                    keyboardType="email-address"
                    maxLength={255}
                    value={identity.credentials.email}
                    onChangeText={t => validate({ email: t, password: identity.credentials.password })}
                  />
                </Item>
                <Item style={styles.passwordItem} bordered success rounded error={identity.validations.passwordError ? true : false}>
                  <View style={styles.icon}><FontAwesome name="lock" style={[styles.inputIcon, appCommonStyles.commonColor]} size={25} /></View>
                  <Input style={styles.inputBox}
                    placeholder="password"
                    maxLength={12}
                    value={identity.credentials.password}
                    onChangeText={t => validate({ email: identity.credentials.email, password: t })}
                    secureTextEntry={true}
                  />
                </Item>
              </Form>
              <TouchableOpacity 
                onPress={() => {
                  Toast.show({
                    text: 'Go to Forgot password',
                    duration: 2000,
                    position: 'top',
                    textStyle: { textAlign: 'center' }
                  })
                }}>
                <Text style={[styles.forget, appCommonStyles.captionText]} > Forgot Password?</Text>
              </TouchableOpacity>
              <View  >
                <Button block success style={styles.btn} disabled={!identity.credentials.email || !identity.credentials.password || valid.emailError || valid.passwordError}
                  onPress={()=>login(identity, loginAction)}>
                  <Text style={appCommonStyles.text}>Log in</Text>
                </Button>
              </View>
            </View>
          </Content>
        </ImageBackground>
      </Container>
    )
  }
}

export default Login
