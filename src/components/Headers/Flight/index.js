import React, { Component } from 'react'
import { TimelineLite } from 'gsap'
import {
  // PlacesAutocomplete,
  DateRangePicker,
  CustomDropdown,
  PersonsDropdown,
  LogoDropdown,
  AutcompleteInput
} from '../..'
import {
  MainWrapper,
  ThirdRow,
  InnerWrapper,
  Text,
  AutocompletesWrapper,
  CloseArrow,
  // Button,
  Wrapper
} from './styles'
import {
  AirplaneIcon,
  HotelIcon,
  RestaurantIcon,
  TransportIcon,
  FilterIcon,
  EditIcon,
  ArrowDownIcon,
  LeftRightArrows,
  ActivityIcon,
  SightIcon
} from '../../../assets/icons'
import kayak from '../../../assets/logos/kayak.png'
import pegasus from '../../../assets/logos/pegasus.png'
import skyscanner from '../../../assets/logos/skyscanner.png'
import expedia from '../../../assets/logos/expedia.png'
import priceline from '../../../assets/logos/priceline.png'
import booking from '../../../assets/logos/booking.png'
import tripadvisor from '../../../assets/logos/tripadvisor.png'
import makemytrip from '../../../assets/logos/makemytrip.png'
import googleFlights from '../../../assets/logos/google-flights.png'

// import { SkyscannerLogo, KayakLogo, Pegasus, TripAdvisor } from '../../../assets/logos'

const tl = new TimelineLite()

class FlightsHeader extends Component {
  state = {}

  toggle = () => {
    tl.to('#flight-header', 0.5, { marginTop: '-150%', display: 'none' })
      .to(
        '#header-arrow',
        0,
        {
          visibility: 'visible'
        },
        0
      )
      .to('#add-flight', 0, { display: 'none' }, 0)
      .to('#right-bar-overlay', 0, { display: 'none' }, 0)
      .to('#search-settings', 0, { display: 'block' }, 0)
  }

  render() {
    const { defaultSelected, changeHeader } = this.props
    const bigScreen = window.innerWidth > 768 && true

    return (
      <Wrapper>
        <MainWrapper id="flight-header">
          {bigScreen && (
            <CustomDropdown
              defaultSelected={defaultSelected}
              onItemSelect={changeHeader}
              marginRightBottom
              title="Category"
              width={20}
              height={20}
              icons={[
                AirplaneIcon,
                HotelIcon,
                SightIcon,
                ActivityIcon,
                RestaurantIcon,
                TransportIcon
              ]}
              values={[
                'Flights',
                'Hotels',
                'Attractions',
                'Activities',
                'Restaurants',
                'Transports'
              ]}
            />
          )}
          <LogoDropdown
            header="Flights From"
            width={140}
            selected={googleFlights}
            marginRightBottom
          >
            <img alt="bnb" src={skyscanner} style={{ width: 130 }} />
            <img alt="bnb" src={kayak} style={{ width: 110 }} />
            <img alt="bnb" src={priceline} style={{ width: 110 }} />
            <img alt="bnb" src={pegasus} style={{ width: 130 }} />
            <img alt="bnb" src={tripadvisor} style={{ width: 130 }} />
            <img alt="bnb" src={expedia} style={{ width: 110 }} />
            <img alt="bnb" src={booking} style={{ width: 130 }} />
            <img alt="bnb" src={makemytrip} style={{ width: 110 }} />
          </LogoDropdown>
          <CustomDropdown
            defaultSelected="Two Ways"
            marginRightBottom
            title="Tickets"
            values={['Two Ways', 'One Way', 'Multi City']}
            icons={[LeftRightArrows, LeftRightArrows, LeftRightArrows]}
            width={20}
            height={20}
          />
          <AutocompletesWrapper>
            <DateRangePicker />
            <PersonsDropdown marginRightBottom header />

            <div style={{ display: 'flex', width: '100%' }}>
              <AutcompleteInput
                title="From"
                placeholder="Enter city or airport"
                defaultValue="Tbilisi, Georgia"
                noMinWidth
                marginRightBottom
                id="autocomplete2"
              />
              <AutcompleteInput
                title="To"
                placeholder="Enter city or airport"
                noMinWidth
                marginRightBottom
                defaultValue="London, UK"
                id="autocomplete2"
              />
            </div>
          </AutocompletesWrapper>

          {bigScreen && (
            <ThirdRow>
              <InnerWrapper>
                <EditIcon color="#00b2d6" height={20} width={20} />{' '}
                <Text>{window.innerWidth < 1024 ? 'Custom Flight' : 'Create Custom Flight'}</Text>
              </InnerWrapper>
              <InnerWrapper>
                <FilterIcon color="#00b2d6" height={20} width={20} />
                <Text>Advanced</Text>
              </InnerWrapper>
            </ThirdRow>
          )}
          <CloseArrow onClick={this.toggle} id="flights-header-arrow">
            <ArrowDownIcon color="white" height={23} width={23} />
          </CloseArrow>
        </MainWrapper>
      </Wrapper>
    )
  }
}

export default FlightsHeader
