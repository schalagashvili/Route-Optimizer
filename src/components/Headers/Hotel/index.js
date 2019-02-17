import React, { Component } from 'react'
import TweenLite, { TimelineLite } from 'gsap'
import {
  DateRangePicker,
  // PlacesAutocomplete,
  CustomDropdown,
  PersonsDropdown,
  CustomHotelBox,
  LogoDropdown,
  AutcompleteInput
} from '../..'
import {
  MainWrapper,
  ThirdRow,
  InnerWrapper,
  Text,
  Input,
  Button,
  SearchButton,
  CancelButton,
  SearchWrapper
} from './styles'
import {
  HotelIcon,
  RestaurantIcon,
  TransportIcon,
  FilterIcon,
  EditIcon,
  PinIcon,
  SearchIcon,
  AirplaneIcon,
  ActivityIcon,
  SightIcon
} from '../../../assets/icons'
import Filter from './Filter'
// import { SkyscannerLogo, KayakLogo } from '../../../assets/logos'
import airbnb from '../../../assets/logos/bnb2.png'
import booking from '../../../assets/logos/booking.png'
import tripadvisor from '../../../assets/logos/tripadvisor.png'
import hotelscom from '../../../assets/logos/hotelscom.png'
import expedia from '../../../assets/logos/expedia.png'
import makemytrip from '../../../assets/logos/makemytrip.png'
import priceline from '../../../assets/logos/priceline.png'
import trivago from '../../../assets/logos/trivago.png'
import h6 from '../../../assets/images/h4.jpg'
import { Input2, Wrapper } from '../../GoogleMaps/styles'

const tl = new TimelineLite()

class HotelsHeader extends Component {
  state = { opened: '', multipleMarkersMapOpened: false }

  openHandler = (nextOpen, height) => {
    const { opened } = this.state

    if (opened !== '' && opened !== nextOpen) {
      tl.to(`#${opened}`, 0.3, { height: '0', marginBottom: '0' }).to(`#${nextOpen}`, 0.3, {
        height: `${height}px`,
        marginBottom: '10px'
      })
      this.setState({ opened: nextOpen })
      return
    }
    tl.to(`#${nextOpen}`, 0.4, {
      height: `${height}px`,
      marginBottom: '10px'
    })
    this.setState({ opened: nextOpen })
  }

  closeHandler = closeItem => {
    TweenLite.to(`#${closeItem}`, 0.3, {
      height: '0px',
      marginBottom: 0
    })
    this.setState({ opened: '' })
  }

  directionsMapOpen = () => {
    TweenLite.to('#multipleMarkersMap2', 0.4, { left: 0 })
    // const { directionsMapOpened } = this.state

    // // causes rerender of whole page
    // if (!directionsMapOpened) {
    //   this.setState({ directionsMapOpened: true })
    // } else {
    //   TweenLite.to('#directionsMap', 0.4, { right: '-800px' })
    //   this.setState({ directionsMapOpened: false })
    // }
    // this.setState(prevState => ({
    //   directionsMapOpened: !prevState.directionsMapOpened
    // }))
  }

  render() {
    const { defaultSelected, changeHeader } = this.props

    return (
      <MainWrapper id="hotel-header">
        {window.innerWidth > 768 && (
          <CustomDropdown
            defaultSelected={defaultSelected}
            onItemSelect={changeHeader}
            title="Category"
            marginRightBottom
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
          title="Hotels From"
          marginRightBottom
          icons={[SkyscannerLogo, KayakLogo, TransportIcon, AirplaneIcon]}
          values={['Skyscanner', 'Kayak', 'Airplane', 'Flights']}
          width={150}
          height={35}
          onlyIcons
        /> */}
        <LogoDropdown selected={booking} header="Hotels From" marginRightBottom width={130}>
          <img alt="bnb" src={tripadvisor} style={{ width: 140 }} />
          <img alt="bnb" src={airbnb} style={{ width: 100 }} />
          <img alt="bnb" src={expedia} style={{ width: 110 }} />
          <img alt="bnb" src={hotelscom} style={{ width: 140 }} />
          <img alt="bnb" src={priceline} style={{ width: 110 }} />
          <img alt="bnb" src={makemytrip} style={{ width: 110 }} />
          <img alt="bnb" src={booking} style={{ width: 130 }} />
          <img alt="bnb" src={trivago} style={{ width: 85 }} />
        </LogoDropdown>
        {/* <PlacesAutocomplete placeholder="Where" marginRightBottom title="Where" /> */}
        <AutcompleteInput
          title="Where"
          placeholder="Enter city or airport"
          noMinWidth
          marginRightBottom
          defaultValue="London, UK"
          id="autocomplete2"
        />
        <DateRangePicker />
        <PersonsDropdown marginRightBottom header />
        <ThirdRow>
          <InnerWrapper onClick={() => this.openHandler('filterBox', 470)}>
            <FilterIcon color="#00b2d6" height={20} width={20} />
            <Text>Filter</Text>
          </InnerWrapper>
          <InnerWrapper onClick={() => this.directionsMapOpen()}>
            <PinIcon color="#00b2d6" height={20} width={20} />
            <Text>{window.outerWidth < 1024 ? 'Hotels on Map' : 'View Hotels on Map'}</Text>
          </InnerWrapper>
          <InnerWrapper
            onClick={() => {
              this.openHandler('searchBox', 51)
            }}
          >
            <SearchIcon color="#00b2d6" height={20} width={20} />
            <Text>Search</Text>
          </InnerWrapper>
          <InnerWrapper onClick={() => this.openHandler('customHotelBox', 180)}>
            <EditIcon color="#00b2d6" height={20} width={20} />
            <Text>{window.outerWidth < 1024 ? 'Custom Hotel' : 'Create Custom Hotel'}</Text>
          </InnerWrapper>
        </ThirdRow>
        <SearchWrapper id="searchBox">
          <Input placeholder="Search hotels by Name, ID or Location" />
          <SearchButton>
            <Button>Search </Button>
            <CancelButton
              onClick={() => {
                this.closeHandler('searchBox')
              }}
            >
              Close
            </CancelButton>
          </SearchButton>
        </SearchWrapper>
        <Filter closeHandler={this.closeHandler} />
        <CustomHotelBox imageURL={h6} />
      </MainWrapper>
    )
  }
}

export default HotelsHeader
