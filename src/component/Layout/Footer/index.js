import * as React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Footer, FooterTab, Button } from 'native-base'

export default class educeFooter extends React.Component {
  render() { 
    return (
      <Footer  >
        <FooterTab >
          <Button  >
            <FontAwesome  name="home" size={25} />
          </Button>
          <Button >
            <FontAwesome  name="comments" size={25} />
          </Button>
          <Button >
            <FontAwesome  name="user-md" size={25} />
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}