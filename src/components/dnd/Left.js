import React, { PureComponent } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { FlightBox, AttractionBox, RestaurantBox, HotelBox } from '..'

import {
  Time,
  TimeWrapper,
  Edit,
  TransportationTime,
  DayEnd,
  Line,
  DayEndTime,
  MoonIconWrapper,
  ListContainer,
  Date,
  Description,
  VerticalDash
} from './styles'
import { MoonIcon } from '../../assets/icons'
import transport2 from '../../assets/images/transportImg.png'

const getItemStyle = {
  userSelect: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'block',
  margin: '5px 10px',
  minHeight: 120,
  borderRadius: '4px',
  background: 'white',
  boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
  border: '1px dashed red'
}

class LeftDrop extends PureComponent {
  state = {}

  categoryItems = (
    category,
    price,
    img,
    departureLogo,
    returnLogo,
    firstDepartureTime,
    firstArrivalTime,
    secondDepartureTime,
    secondArrivalTime,
    firstFlightTime,
    name
  ) => {
    switch (category) {
      case 'Flights':
        return (
          <FlightBox
            imageURL={img}
            price={price}
            firstDepartureTime={firstDepartureTime}
            departureLogo={departureLogo}
            returnLogo={returnLogo}
            secondDepartureTime={secondDepartureTime}
            secondArrivalTime={secondArrivalTime}
            firstArrivalTime={firstArrivalTime}
            firstFlightTime={firstFlightTime}
          />
        )
      case 'Hotels':
        return <HotelBox imageURL={img} left name={name} />
      case 'Attractions':
        return <AttractionBox imageURL={img} left name={name} />
      case 'Restaurants':
        return <RestaurantBox imageURL={img} left name={name} />
      case 'Activities':
        return <AttractionBox imageURL={img} left name={name} />
      case 'Transports':
        return <HotelBox imageURL={img} left name={name} />
      default:
        return null
    }
  }

  render() {
    const { list = [], date, listIndex, onDrop } = this.props
    const { showTransport } = this.state
    return (
      <ListContainer>
        <Date>{date}</Date>
        {/* {list.length === 500 ? (
          <Description>
            Drag & Drop Flights / Hotels / Attractions / Restaurants
            <VerticalDash />
          </Description>
        ) : null} */}
        <Description>
          Drag & Drop Flights / Hotels / Attractions / Restaurants
          <VerticalDash />
        </Description>
        <Container
          lockAxis="y"
          animationDuration={350}
          shouldAcceptDrop={(sourceContainerOptions, payload) => {
            console.log({ payload, sourceContainerOptions })
            const { category, id: payloadId } = payload
            const { behaviour } = sourceContainerOptions

            switch (behaviour) {
              case 'move':
                if (category === 'Flights') return false
                return true
              case 'copy':
                return !list.find(({ id }) => id === payloadId)
              default:
                return true
            }
          }}
          style={{ minHeight: '140px' }}
          getChildPayload={i => list[i]}
          groupName="1"
          onDrop={e => onDrop(e, listIndex)}
        >
          {list.map((Item, index) => (
            <Draggable key={Item.id}>
              <div style={getItemStyle}>
                {Item.category ? (
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        position: 'absolute',
                        top: '-50px',
                        left: '80px'
                      }}
                    >
                      {/* {index !== 0 && (
                        <div>
                          <Item.icon width={28} height={28} color="gray" />
                          <div style={{ position: 'relative' }}>
                            <div
                              style={{
                                color: '#00b2d6',
                                marginLeft: 15,
                                marginRight: 15,
                                cursor: 'pointer'
                              }}
                            >
                              Edit
                            </div>
                            <img
                              src={transport2}
                              alt="fds"
                              style={{
                                position: 'absolute',
                                top: 20,
                                left: 16,
                                width: 265,
                                boxShadow: '0 15px 20px 0 rgba(0,0,0,0.15)',
                                zIndex: 5,
                                display: showTransport ? 'block' : 'none'
                              }}
                            />
                          </div>
                          <div style={{ border: '1px solid red', display: 'flex' }}>
                            <div> 15 km /</div>
                            <TransportationTime>30 min /</TransportationTime>
                            <div style={{ color: 'red', marginLeft: 15 }}>$ 20</div>
                          </div>
                        </div>
                      )} */}
                    </div>
                    <TimeWrapper>
                      <Time>15 : 40</Time>
                      {!Item.date && <Edit>Edit</Edit>}

                      <Time>16 : 10</Time>
                    </TimeWrapper>
                    {this.categoryItems(
                      Item.category,
                      Item.price,
                      Item.img,
                      Item.departureLogo,
                      Item.returnLogo,
                      Item.firstDepartureTime,
                      Item.firstArrivalTime,
                      Item.secondDepartureTime,
                      Item.secondArrivalTime,
                      Item.firstFlightTime,
                      Item.name
                    )}
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', lineHeight: '110px' }}>Drop Placeholder</div>
                )}
                {list[list.length - 1] === Item &&
                  list.length === 4 &&
                  Item.category === 'Hotels' && (
                    <DayEnd>
                      <DayEndTime>
                        <MoonIconWrapper>
                          <MoonIcon width={28} height={28} color="#00b2d6" />
                        </MoonIconWrapper>
                        Day ends at 8: 25pm
                      </DayEndTime>
                      <Line />
                    </DayEnd>
                  )}
              </div>
            </Draggable>
          ))}
        </Container>
      </ListContainer>
    )
  }
}

export default LeftDrop
