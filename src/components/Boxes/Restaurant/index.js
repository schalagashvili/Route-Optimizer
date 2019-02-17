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
  RatingWrapper,
  Tags,
  Price
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
          <Name>Dinning Hall</Name>
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
            Rustaveli Ave, Tbilisi, Georgia
          </LocationWrapper>
          <Tags>Culture, Historic, Tradition, Nature, Beauty</Tags>
          <MoreInfo>More Info</MoreInfo>
        </FirstColumn>
        <SecondColumn>
          <Price>$$$</Price>
          <SectionWrapper>
            <RoomsAndPrice>
              <PriceWrapper>$57</PriceWrapper>
              <Rooms>dinner for 2 people</Rooms>
            </RoomsAndPrice>
          </SectionWrapper>
          <Button>Book Now</Button>
        </SecondColumn>
      </MainWrapper>
    )
  }
}

export default FlightBox
