import React, { Component } from 'react'
import { TweenLite } from 'gsap'
import {
  MainWrapper,
  Overlay,
  Button,
  ContentWrapper,
  Wrapper,
  HotelName,
  HorizontalLine,
  ArrowDownWrapper,
  SectionWrapper,
  FacilitySecondColumn,
  FacilityFirstColumn,
  RoomInfoWrapper
} from './styles'
import { Slider } from '../..'
import { ArrowDownIcon } from '../../../assets/icons'

class DetailsPopup extends Component {
  state = {}

  render() {
    return (
      <MainWrapper id="hotelDetailsPopup">
        <Overlay
          onClick={() => TweenLite.to('#hotelDetailsPopup', 0.4, { opacity: 0, display: 'none' })}
        >
          <Button
            onClick={() => TweenLite.to('#hotelDetailsPopup', 0.4, { opacity: 0, display: 'none' })}
          >
            Close
          </Button>
          <Wrapper>
            <ContentWrapper onClick={e => e.stopPropagation()}>
              <Slider />
              <div>
                <HotelName
                  style={{
                    padding: '10px 29px 10px 10px',
                    fontWeight: 'bold'
                  }}
                >
                  London House Hotel
                </HotelName>
                <HorizontalLine />
                <SectionWrapper>
                  <div
                    style={{
                      padding: '10px 29px 10px 10px',
                      color: '#00b2d6',
                      fontWeight: 'bold',
                      fontSize: 13
                    }}
                  >
                    Very Good: 8.3
                  </div>
                  <ArrowDownWrapper>
                    <ArrowDownIcon color="#484848" height={12} width={12} />
                  </ArrowDownWrapper>
                </SectionWrapper>
                <HorizontalLine />
                <SectionWrapper>
                  <div
                    style={{
                      padding: '10px 29px 10px 10px',
                      color: '#00b2d6',
                      fontWeight: 'bold',
                      fontSize: 13
                    }}
                  >
                    Stay in Heart of London
                  </div>
                  <div
                    style={{
                      padding: '0px 29px 10px 10px',
                      fontSize: 12
                    }}
                  >
                    A short walk from Hyde Park, this modern hotel has rooms with air conditioning,
                    a mini fridge and flat-screen TV. Bayswater and Queensway Tube stations are 2
                    minutes away. The 3-star London House Hotel offers free Wi-Fi and a private
                    bathroom …
                  </div>
                  <ArrowDownWrapper>
                    <ArrowDownIcon color="#484848" height={12} width={12} />
                  </ArrowDownWrapper>
                </SectionWrapper>
                <HorizontalLine />
                <SectionWrapper>
                  <div
                    style={{
                      padding: '10px 29px 10px 10px',
                      color: '#00b2d6',
                      fontWeight: 'bold',
                      fontSize: 13
                    }}
                  >
                    Facilities
                  </div>
                  <div style={{ display: 'flex' }}>
                    <FacilityFirstColumn>
                      <div>Internet</div> <div>Wifi</div>
                    </FacilityFirstColumn>
                    <FacilitySecondColumn>
                      <div>Internet</div> <div>Wifi</div>
                    </FacilitySecondColumn>
                  </div>
                  <ArrowDownWrapper>
                    <ArrowDownIcon color="#484848" height={12} width={12} />
                  </ArrowDownWrapper>
                </SectionWrapper>
                <HorizontalLine />
                <SectionWrapper>
                  <RoomInfoWrapper>
                    <div>Text</div>
                    <div>Text</div>
                    <div>Text</div>
                  </RoomInfoWrapper>
                </SectionWrapper>
              </div>
            </ContentWrapper>
          </Wrapper>
        </Overlay>
      </MainWrapper>
    )
  }
}

export default DetailsPopup
