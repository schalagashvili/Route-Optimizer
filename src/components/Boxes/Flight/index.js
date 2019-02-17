import React, { Component } from 'react'
import {
  MainWrapper,
  FirstColumn,
  SecondColumn,
  PriceWrapper,
  Button,
  SectionWrapper,
  FirstRow,
  SecondRow,
  FlightInfo,
  DepartInfo,
  ArriveInfo,
  FlightTime,
  Stops,
  Time,
  Logo,
  Airlines
} from './styles'
import Gairways from '../../../assets/images/Gairways.png'
import pegasus from '../../../assets/images/pegasus.png'
import airplane from '../../../assets/images/airplane.png'

class FlightBox extends Component {
  state = {}

  render() {
    const {
      departureLogo,
      returnLogo,
      firstDepartureTime,
      firstArrivalTime,
      price,
      firstFlightTime,
      secondDepartureTime,
      secondArrivalTime
    } = this.props

    return (
      <MainWrapper>
        <Airlines>Luftansa + Georgian Airways</Airlines>
        <FirstColumn>
          <FirstRow>
            <Logo>
              <img alt="airways-icon" src={departureLogo} style={{ maxWidth: 70 }} />
            </Logo>
            <FlightInfo>
              <DepartInfo>
                <Time>{firstDepartureTime}</Time>
                <div>LHR</div>
              </DepartInfo>
              <FlightTime>
                {firstFlightTime}
                <img alt="airways-icon" src={airplane} style={{ width: 105 }} />{' '}
                <Stops>Non-stop</Stops>
              </FlightTime>
              <ArriveInfo>
                <Time>{firstArrivalTime} </Time>
                <div>LHR</div>
              </ArriveInfo>
            </FlightInfo>
          </FirstRow>
          <SecondRow>
            <Logo>
              <img alt="airways-icon" src={returnLogo} style={{ maxWidth: 70 }} />
            </Logo>
            <FlightInfo>
              <DepartInfo>
                <Time>{secondDepartureTime} </Time>
                <div>ORD</div>
              </DepartInfo>
              <FlightTime>
                8h 35m
                <img alt="airways-icon" src={airplane} style={{ width: 105 }} />{' '}
                <Stops>Non-stop</Stops>
              </FlightTime>
              <ArriveInfo>
                <Time>{secondArrivalTime} </Time>
                <div>ORD</div>
              </ArriveInfo>
            </FlightInfo>
          </SecondRow>
        </FirstColumn>
        <SecondColumn>
          <SectionWrapper>
            <PriceWrapper>
              $ {price}
              <div style={{ fontWeight: 'normal', fontSize: '12' }}> / 2 ways</div>
            </PriceWrapper>
          </SectionWrapper>
          <Button>Buy Now</Button>
        </SecondColumn>
      </MainWrapper>
    )
  }
}

export default FlightBox
