import React, { Component } from 'react'
import {
  CustomDropdown,
  PersonsDropdown,
  DatePicker,
  // PlacesAutocomplete,
  LogoDropdown,
  AutcompleteInput
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
import opentable from '../../../assets/logos/opentable.png'

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
        {/* <CustomDropdown
          defaultSelected="Skyscanner"
          marginRightBottom
          icons={[SkyscannerLogo, KayakLogo, TransportIcon, AirplaneIcon]}
          values={['Skyscanner', 'Kayak', 'Airplane', 'Flights']}
          width={150}
          height={35}
          onlyIcons
        /> */}
        <LogoDropdown
          header="Restaurants From"
          width={122}
          height={25}
          selected={opentable}
          marginRightBottom
        >
          <img alt="bnb" src={opentable} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={opentable} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={opentable} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={opentable} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={opentable} style={{ width: 110, height: 30 }} />
          <img alt="bnb" src={opentable} style={{ width: 110, height: 30 }} />
        </LogoDropdown>
        <PersonsDropdown marginRightBottom header />
        <DatePicker />
        <AutcompleteInput
          title="Where"
          placeholder="Enter city or airport"
          noMinWidth
          marginRightBottom
          defaultValue="London, UK"
          id="autocomplete2"
        />
        {/* <PlacesAutocomplete placeholder="Where" marginRightBottom title="Where" /> */}
        <ThirdRow>
          <InnerWrapper>
            <EditIcon color="#00b2d6" height={20} width={20} /> Create Custom Restaurant
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
