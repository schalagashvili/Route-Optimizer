import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import { Link } from 'react-router-dom'
import {
  Wrapper,
  Title,
  InputsWrapper,
  InnerWrapper,
  MainWrapper,
  Button,
  LastLineWrapper,
  QuestionInfo,
  QuestionMark,
  Calendar,
  DarkBackground,
  DarkBackgroundSmall,
  InfoWrapper,
  OptionsWrapper,
  Span,
  Label,
  ItineraryGenerator,
  DownArrow
} from './styles'
import './customInput.css'
import Options from './Options'
import {
  PlacesAutocomplete,
  // AutcompleteInput,
  DateRangePicker2,
  PersonsDropdown,
  GoogleMaps
} from '../../index'
import { ArrowDownIcon, PinIcon, QuestionIcon } from '../../../assets/icons'
import withPlanningState from '../../../context'

class Middle extends Component {
  state = {
    multipleCityCheckbox: false,
    advancedOpened: false,
    generatorCheckbox: false,
    renderGoogleMaps: false
    // input focus will be passed from 'Options' and if input is focused
    // it won't close dropdown anymore
    // inputFocused: true
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ renderGoogleMaps: true })
  //   }, 5000)
  // }

  handleClick = () => {
    const { advancedOpened } = this.state

    if (!advancedOpened) {
      TweenLite.to('#advanced-wrapper', 0.2, {
        // display: 'block',
        height: '275px'
      })
      TweenLite.to('#arrow-down-icon', 0.35, { rotation: 180 })
    } else {
      TweenLite.to('#advanced-wrapper', 0.2, {
        height: '0'
        // display: 'none'
      })
      TweenLite.to('#arrow-down-icon', 0.35, { rotation: 0 })
    }
    this.setState(state => ({
      advancedOpened: !state.advancedOpened
    }))
  }

  handleClickOutside = () => {
    const { advancedOpened } = this.state

    if (advancedOpened) {
      TweenLite.to('#advanced-wrapper', 0.2, {
        height: '0'
        // display: 'none'
      })
      TweenLite.to('#arrow-down-icon', 0.35, { rotation: 0 })
      this.setState(state => ({
        advancedOpened: !state.advancedOpened
      }))
    }
  }

  handleChangeCheck = () => {
    this.setState(prevState => ({
      multipleCityCheckbox: !prevState.multipleCityCheckbox
    }))
  }

  handleGeneratorCheck = () => {
    const { advancedOpened } = this.state

    this.setState(prevState => ({
      generatorCheckbox: !prevState.generatorCheckbox
    }))
    if (advancedOpened) {
      TweenLite.to('#advanced-wrapper', 0.2, {
        height: '0'
      })
      TweenLite.to('#arrow-down-icon', 0.35, { rotation: 0 })
    }
  }

  render() {
    const { multipleCityCheckbox, generatorCheckbox, renderGoogleMaps } = this.state
    const small = window.innerWidth < 600 && true

    return (
      <MainWrapper>
        {/* {renderGoogleMaps && <GoogleMaps />} */}

        <InnerWrapper>
          {!small && <Title>Book Your Unique Travel Experience</Title>}
          <InputsWrapper>
            {small && (
              <Calendar>
                <DateRangePicker2 noHeaders />
              </Calendar>
            )}
            <PlacesAutocomplete
              placeholder="From"
              noMarginLeft
              fullHeight
              noBorderRightRadius={!small}
            >
              <PinIcon color="#00b2d6" height={20} width={20} />
            </PlacesAutocomplete>
            <PlacesAutocomplete placeholder="Where" noMarginLeft fullHeight noBorderRadius={!small}>
              <PinIcon color="#00b2d6" height={20} width={20} />
            </PlacesAutocomplete>
            {/* <AutcompleteInput
              placeholder="Enter city or airport"
              id="autocomplete2"
              noMarginLeft
              fullHeight
            /> */}
            {!small && (
              <Calendar>
                <DateRangePicker2 noHeaders />
              </Calendar>
            )}

            <PersonsDropdown
              fullHeight
              fullWidth
              noMarginLeft
              noBorderLeftRadius={!small}
              noMaxWidth
            />
          </InputsWrapper>
          <LastLineWrapper>
            {!small && (
              <Wrapper>
                <input
                  className="styled-checkbox"
                  id="styled-checkbox-1"
                  type="checkbox"
                  value="value1"
                  defaultChecked={multipleCityCheckbox}
                  onChange={this.handleChangeCheck}
                />
                <Label htmlFor="styled-checkbox-1">
                  <Span>
                    Multiple City/Region
                    <DarkBackground />
                  </Span>
                </Label>
                <input
                  className="styled-checkbox"
                  id="styled-checkbox-2"
                  type="checkbox"
                  value="value2"
                  defaultChecked={generatorCheckbox}
                  onChange={this.handleGeneratorCheck}
                />
                <Label htmlFor="styled-checkbox-2">
                  <Span>
                    Generate Itinerary
                    <DarkBackground />
                  </Span>
                </Label>
                <InfoWrapper>
                  <QuestionMark>
                    <QuestionIcon width={15} height={15} color="white" />
                  </QuestionMark>
                  <QuestionInfo>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry. been the industry.
                  </QuestionInfo>
                </InfoWrapper>
                <ItineraryGenerator onBlur={this.handleClickOutside} tabIndex="0">
                  {generatorCheckbox && (
                    <OptionsWrapper onClick={this.handleClick}>
                      Options
                      <DarkBackgroundSmall />
                      <DownArrow id="arrow-down-icon">
                        <ArrowDownIcon width={15} height={12} color="white" />
                      </DownArrow>
                    </OptionsWrapper>
                  )}
                  <Options />
                </ItineraryGenerator>
              </Wrapper>
            )}
            <Link to="/plan" style={{ textDecoration: 'none', marginTop: 20 }}>
              <Button>Start Planning</Button>
            </Link>
          </LastLineWrapper>
        </InnerWrapper>
      </MainWrapper>
    )
  }
}

export default Middle
