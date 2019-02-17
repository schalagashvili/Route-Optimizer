import React, { Component } from 'react'
import { Draggable } from 'react-smooth-dnd'
import { FlightBox, AttractionBox, RestaurantBox, HotelBox } from '..'

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
  position: 'relative'
}

class RightDrop extends Component {
  state = {}

  categoryItems = (
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
    const { currentHeader } = this.props

    switch (currentHeader) {
      case 'Flights':
        return (
          <FlightBox
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
        return <HotelBox imageURL={img} name={name} />
      case 'Attractions':
        return <AttractionBox imageURL={img} name={name} />
      case 'Restaurants':
        return <RestaurantBox imageURL={img} name={name} />
      case 'Activities':
        return <AttractionBox imageURL={img} name={name} />
      case 'Transports':
        return <HotelBox imageURL={img} name={name} />
      default:
        return null
    }
  }

  render() {
    const { list = [] } = this.props
    return list.map(
      ({
        id,
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
      }) => (
        <Draggable key={id}>
          <div style={getItemStyle}>
            {this.categoryItems(
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
            )}
          </div>
        </Draggable>
      )
    )
  }
}

export default RightDrop
