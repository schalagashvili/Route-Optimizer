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
  SectionWrapper,
  RoomsAndPrice,
  Rooms,
  RatingWrapper,
  Time,
  Tags
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
          <Name>Big Ben</Name>
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
            Wall Street, UK
          </LocationWrapper>
          <Tags>Culture, Historic, Tradition, Nature, Beauty</Tags>
        </FirstColumn>
        <SecondColumn>
          <Time>2h 30m</Time>
          <SectionWrapper>
            <RoomsAndPrice>
              <PriceWrapper>$57</PriceWrapper>
              <Rooms>4 person</Rooms>
            </RoomsAndPrice>
          </SectionWrapper>
          <MoreInfo>More Info</MoreInfo>
        </SecondColumn>
      </MainWrapper>
    )
  }
}

export default FlightBox
