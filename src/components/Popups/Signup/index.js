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
  DividerLine
} from './styles'

const tl = new TimelineLite()
class LoginPopup extends Component {
  state = { on: true }

  componentDidMount() {
    document.getElementById('signup-popup').focus()
  }

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
          <Heading>Sign up</Heading>
          <Input placeholder="Full Name" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Repeat Password" />
          <Wrapper />
          <Button>Sign up</Button>
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
