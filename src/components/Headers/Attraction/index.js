import React, { Component } from 'react'
import {
  //  PlacesAutocomplete,
  CustomDropdown,
  AutcompleteInput
} from '../..'
import { MainWrapper, ThirdRow, InnerWrapper } from './styles'
import {
  FilterIcon,
  EditIcon,
  AirplaneIcon,
  HotelIcon,
  RestaurantIcon,
  TransportIcon,
  ActivityIcon,
  SightIcon
} from '../../../assets/icons'

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
        <AutcompleteInput
          title="Where"
          placeholder="Enter city or airport"
          noMinWidth
          defaultValue="London, UK"
          marginRightBottom
          id="autocomplete2"
        />
        {/* <PlacesAutocomplete placeholder="Where" marginRightBottom title="Where" /> */}
        <ThirdRow>
          <InnerWrapper>
            <EditIcon color="#00b2d6" height={20} width={20} /> Create Custom Attraction
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
