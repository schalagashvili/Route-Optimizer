import React, { Component } from 'react'
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
  Rooms,
  Tags,
  RatingWrapper
} from './styles'
import Stars from '../../../assets/images/stars.png'
import { PinIcon } from '../../../assets/icons'

// eslint-disable-next-line react/prefer-stateless-function
class FlightBox extends Component {
  render() {
    const { imageURL, paddingLeft, noBorderRadius, left } = this.props

    return (
      <MainWrapper paddingLeft={paddingLeft}>
        <Img left={left} src={imageURL} noBorderRadius={noBorderRadius} />
        <FirstColumn>
          <Name>London Cycling Tour</Name>
          <RatingWrapper>
            <img
              src={Stars}
              style={{
                height: 12,
                width: 52,
                marginTop: 5,
                display: 'flex',
                marginRight: 5
              }}
              alt="stars"
            />
            134 Reviews
          </RatingWrapper>
          <LocationWrapper>
            <PinIcon color="#484848" height={13} width={13} />
            London, UK
          </LocationWrapper>
          <Tags>Culture, Historic, Tradition, Nature, Beauty</Tags>
          <MoreInfo>More Info</MoreInfo>
        </FirstColumn>
        <SecondColumn>
          2h 15m
          <SectionWrapper>
            <RoomsAndPrice>
              <PriceWrapper>$257</PriceWrapper>
              <Rooms>4 person</Rooms>
            </RoomsAndPrice>
          </SectionWrapper>
          <Button>Book Now</Button>
        </SecondColumn>
      </MainWrapper>
    )
  }
}

export default FlightBox
