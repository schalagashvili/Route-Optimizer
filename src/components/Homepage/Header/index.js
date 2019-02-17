import React, { Component } from 'react'
import TweenLite from 'gsap'
import { Link } from 'react-router-dom'
import {
  MainWrapper,
  MenuItems,
  DropdownItem,
  MenuItem,
  Dropdown,
  SelectedLanugage,
  FocusArea
} from './styles'
import { AirplaneIcon, ArrowDownIcon } from '../../../assets/icons'

class HomepageHeader extends Component {
  state = {
    dropOpen: false,
    selectedLanguage: 'English',
    languages: ['English', 'Spanish', 'Italian', 'Portuguese', 'Francis']
  }

  handleClick = () => {
    const { dropOpen } = this.state

    if (!dropOpen) {
      TweenLite.to('#language-dropdown', 0.2, { display: 'flex' })
      TweenLite.to('#arrow-language', 0.2, {
        rotation: 180
      })
    } else {
      TweenLite.to('#language-dropdown', 0, { display: 'none' })
      TweenLite.to('#arrow-language', 0.2, {
        rotation: 0
      })
    }
    this.setState(state => ({
      dropOpen: !state.dropOpen
    }))
  }

  handleClickOutside = () => {
    const { dropOpen } = this.state

    if (dropOpen) {
      TweenLite.to('#language-dropdown', 0, { display: 'none' })
      TweenLite.to('#arrow-language', 0.2, {
        rotation: 0
      })
      this.setState(state => ({
        dropOpen: !state.dropOpen
      }))
    }
  }

  changeLanguage = language => {
    this.setState({ selectedLanguage: language })
  }

  render() {
    const bigScreen = window.innerWidth > 600 && true
    const { languages, selectedLanguage } = this.state

    return (
      <MainWrapper>
        <AirplaneIcon color="white" height={40} width={40} />
        {bigScreen && (
          <MenuItems>
            <FocusArea onBlur={this.handleClickOutside}>
              <SelectedLanugage onClick={this.handleClick} style={{}}>
                {selectedLanguage}
                <div id="arrow-language">
                  <ArrowDownIcon color="white" height={12} width={23} />
                </div>
              </SelectedLanugage>
              <Dropdown id="language-dropdown">
                {languages.map(language => {
                  if (selectedLanguage === language) {
                    return null
                  }
                  return (
                    <DropdownItem
                      // this must be changed by id
                      key={Math.random(1, 1000)}
                      onClick={() => {
                        this.handleClick()
                        this.changeLanguage(language)
                      }}
                    >
                      {language}
                    </DropdownItem>
                  )
                })}
              </Dropdown>
            </FocusArea>
            <MenuItem>
              <Link to="/contact">Contact</Link>
            </MenuItem>
            <MenuItem>Sign up</MenuItem>
            <MenuItem>Log in</MenuItem>
          </MenuItems>
        )}
      </MainWrapper>
    )
  }
}

export default HomepageHeader
