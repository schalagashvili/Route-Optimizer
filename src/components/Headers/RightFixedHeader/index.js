import React, { Component } from 'react'
import { TimelineLite } from 'gsap'
import { CloseX, ArrowDownIcon } from '../../../assets/icons'
import { CloseButton, Wrapper, InnerWrapper, Arrow } from './styles'

const tl = new TimelineLite()
class RightFixedHeader extends Component {
  state = {}

  openSearchSettings = () => {
    tl.to('#flight-header', 0.3, { display: 'block', marginTop: '0' })
      .to('#right-bar-overlay', 0, { display: 'block' }, 0)
      .to('#header-arrow', 0, {
        visibility: 'hidden'
      })
  }

  closeAddSection = () => {
    tl.to('#right-bar', 0.5, { top: '100vh' })
      .to('#add-items-wrapper', 0, { bottom: '-100vh', display: 'none' }, 0)
      .to('#right-bar', 0, {
        display: 'none'
      })
      .to('#header-arrow', 0, {
        visibility: 'visible'
      })
      .to('#flight-header', 0, { marginTop: '-150%', display: 'none' })
      .to('#right-bar-overlay', 0, { display: 'none' })
  }

  render() {
    return (
      <Wrapper>
        <InnerWrapper onClick={this.openSearchSettings}>
          <div id="search-settings">Search Settings</div>
          <Arrow id="header-arrow">
            <ArrowDownIcon color="gray" height={12} width={15} />
          </Arrow>
        </InnerWrapper>
        <CloseButton onClick={this.closeAddSection}>
          <CloseX color="#484848" height={18} width={18} />
        </CloseButton>
      </Wrapper>
    )
  }
}

export default RightFixedHeader
