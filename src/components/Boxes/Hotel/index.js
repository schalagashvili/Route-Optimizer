import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import {
  MainWrapper,
  Img,
  Name,
  FirstColumn,
  LocationWrapper,
  MoreInfo,
  SecondColumn,
  PriceWrapper,
  Button,
  SectionWrapper,
  RoomsAndPrice,
  Rooms
} from './styles'
import Stars from '../../../assets/images/stars.png'
import { PinIcon } from '../../../assets/icons'

class HotelBox extends Component {
  state = {}

  openHotelDetailsPopup = () => {
    TweenLite.to('#hotelDetailsPopup', 0.4, { display: 'block', opacity: 1 })
  }

  render() {
    const { imageURL, paddingLeft, noBorderRadius, name, left } = this.props
    return (
      <MainWrapper paddingLeft={paddingLeft}>
        <Img left={left} src={imageURL} noBorderRadius={noBorderRadius} />
        <FirstColumn>
          <Name>{name}</Name>
          <img
            src={Stars}
            style={{ height: 12, width: 52, marginTop: 5, display: 'flex' }}
            alt="stars"
          />
          <LocationWrapper>
            <PinIcon color="#484848" height={13} width={13} />
            Rustaveli Ave, Tbilisi, Georgia
          </LocationWrapper>
          <MoreInfo onClick={this.openHotelDetailsPopup}>More Info</MoreInfo>
        </FirstColumn>
        <SecondColumn>
          1,234 Reviews
          <SectionWrapper>
            <RoomsAndPrice>
              <PriceWrapper>$257</PriceWrapper>
              <Rooms>3 rooms for 2 nights</Rooms>
            </RoomsAndPrice>
          </SectionWrapper>
          <Button>Book Now</Button>
        </SecondColumn>
      </MainWrapper>
    )
  }
}

export default HotelBox
