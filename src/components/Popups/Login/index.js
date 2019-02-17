import React, { Component } from 'react'
import { TimelineLite } from 'gsap'
import socials from '../../../assets/icons/socials.png'
import {
  Overlay,
  Content,
  Close,
  Input,
  Button,
  Heading,
  Wrapper,
  Span,
  Text,
  DividerLine
} from './styles'

const tl = new TimelineLite()

class LoginPopup extends Component {
  state = { on: true }

  handleClickOutside = () => {
    const { on } = this.state

    if (on) {
      tl.to('#signup-overlay', 0.15, { opacity: '0' }).to('#signup-overlay', 0, {
        display: 'none'
      })
    }
  }

  toggle = () => {
    const { on } = this.state

    this.setState({ on: !on })
  }

  render() {
    const { on } = this.state

    return (
      <Overlay isOpen={on} id="signup-overlay">
        <Content isOpen={on} onBlur={this.handleClickOutside} tabIndex="0" id="signup-popup">
          <Close onClick={this.toggle}>&times;</Close>
          <Heading>Log In</Heading>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Wrapper>
            <Text>Forgot Password?</Text>
            <Text>Create Account</Text>
          </Wrapper>
          <Button>Login</Button>
          <DividerLine>
            <Span>or continue with</Span>
          </DividerLine>
          <img alt="socials" src={socials} style={{ height: 45, marginTop: 20 }} />
        </Content>
      </Overlay>
    )
  }
}

export default LoginPopup
