import React, { Component } from 'react'

import { SidebarContainer, LinkContainer } from './styles'

import LinkDrop from '../LinkDrop'
import { PinIcon } from '../../assets/icons'

class Sidebar extends Component {
  state = {}

  render() {
    return (
      <SidebarContainer>
        <LinkContainer>
          <LinkDrop
            icon={PinIcon}
            color="#04B7A8"
            path="/dashboard/settings"
            label="Settings"
            items={['profile', 'password', 'billing']}
          />
          <LinkDrop icon={PinIcon} color="#04B7A8" path="/dashboard/tours" label="Tours" />
          <LinkDrop icon={PinIcon} color="#04B7A8" path="/dashboard/chat" label="Chat" />
          <LinkDrop icon={PinIcon} color="#04B7A8" path="/dashboard/payments" label="Payments" />
        </LinkContainer>
      </SidebarContainer>
    )
  }
}

export default Sidebar
