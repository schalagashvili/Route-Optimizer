import React, { Component } from 'react'
import {
  CustomDropdown,
  PersonsDropdown,
  // PlacesAutocomplete,
  DateRangePicker,
  LogoDropdown
} from '../..'

import { MainWrapper, ThirdRow, InnerWrapper } from './styles'
import {
  AirplaneIcon,
  HotelIcon,
  RestaurantIcon,
  TransportIcon,
  FilterIcon,
  EditIcon,
  ActivityIcon,
  SightIcon
} from '../../../assets/icons'
// import { SkyscannerLogo, KayakLogo } from '../../../assets/logos'
import viator from '../../../assets/logos/viator.png'

class FlightsHeader extends Component {
  state = {}

  render() {
    const { defaultSelected, changeHeader } = this.props

    return (
      <MainWrapper>
        {window.innerWidth > 768 && (
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
            values={['Flights', 'Hotels', 'Attractions', 'Activities', 'Restaurants', 'Transports']}
          />
        )}
        <LogoDropdown
          header="Activities From"
          width={100}
          height={25}
          selected={viator}
          marginRightBottom
        >
          <img alt="bnb" src={viator} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={viator} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={viator} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={viator} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={viator} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={viator} style={{ width: 110, height: 30 }} />
        </LogoDropdown>
        <DateRangePicker />
        <PersonsDropdown marginRightBottom header />
        {/* <PlacesAutocomplete placeholder="Where" marginRightBottom title="Where" /> */}
        {/* <CustomDropdown
          defaultSelected="Skyscanner"
          marginRightBottom
          icons={[SkyscannerLogo, KayakLogo, TransportIcon, AirplaneIcon]}
          values={['Skyscanner', 'Kayak', 'Airplane', 'Flights']}
          width={150}
          height={35}
          onlyIcons
        /> */}
        <ThirdRow>
          <InnerWrapper>
            <EditIcon color="#00b2d6" height={20} width={20} /> Create Custom Activity
          </InnerWrapper>
          <InnerWrapper>
            <FilterIcon color="#00b2d6" height={20} width={20} />
            Advanced
          </InnerWrapper>
        </ThirdRow>
      </MainWrapper>
    )
  }
}

export default FlightsHeader
