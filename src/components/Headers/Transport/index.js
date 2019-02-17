import React, { Component } from 'react'
import {
  //  PlacesAutocomplete,
  DateRangePicker,
  CustomDropdown,
  PersonsDropdown
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
import { SkyscannerLogo, KayakLogo } from '../../../assets/logos'

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
        <CustomDropdown
          defaultSelected="Skyscanner"
          marginRightBottom
          icons={[SkyscannerLogo, KayakLogo, TransportIcon, AirplaneIcon]}
          values={['Skyscanner', 'Kayak', 'Airplane', 'Flights']}
          width={150}
          height={35}
          onlyIcons
        />
        {/* <PlacesAutocomplete placeholder="Where" marginRightBottom title="Where" /> */}
        <DateRangePicker />
        <PersonsDropdown marginRightBottom />
        <ThirdRow>
          <InnerWrapper>
            <EditIcon color="#00b2d6" height={20} width={20} /> Create Custom Transport
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
