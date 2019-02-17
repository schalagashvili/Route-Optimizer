import React, { createContext, Component } from 'react'
import { calculateDayList } from '../helpers'
import { applyDrag } from '../../utils'

const PlanningContext = createContext()

export const { Consumer: PlanningConsumer, Provider } = PlanningContext

export class PlanningProvider extends Component {
  state = {
    startDate: null,
    endDate: null,
    dateList: [],
    quantityAdults: 2,
    quantityChildren: 0,
    initialized: false,
    flightsInitialized: false,
    totalCost: 0
  }

  handleDateChange = (startDate, endDate) => {
    const dateList = startDate && endDate ? calculateDayList(startDate, endDate) : []
    this.setState({
      startDate,
      endDate,
      dateList
    })
  }

  handleQuantityUpdate = (property, value) => {
    this.setState({
      [property]: value
    })
  }

  handelSetupHotels = (hotel, removed) => {
    const { dateList } = { ...this.state }
    const newDateList = [...dateList]
    let c = 0
    // eslint-disable-next-line
    for(const day of newDateList){
      const dayItem = { ...day }
      const dragResultTop = {
        addedIndex: 0,
        removedIndex: null,
        payload: hotel
      }
      const dragResultBottom = !removed
        ? {
            addedIndex: 1,
            removedIndex: null,
            payload: hotel
          }
        : {
            addedIndex: null,
            removedIndex: c === 0 ? 1 : 0,
            payload: hotel
          }
      const newList = applyDrag([dayItem.list], dragResultTop)
      const newList2 = applyDrag([newList], dragResultBottom)
      dayItem.list = newList2
      newDateList[c] = dayItem
      c += 1
    }

    this.setState({
      dateList: newDateList
    })
  }

  handleSetupFlights = async flight => {
    const { dateList, flightsInitialized } = { ...this.state }
    const newDateList = [...dateList]
    const dateItemStart = { ...newDateList[0] }
    const dateItemEnd = { ...newDateList[newDateList.length - 1] }
    if (flightsInitialized) {
      dateItemStart.list.shift()
      dateItemEnd.list.pop()
    }

    if (flight !== null) {
      const dayListStart = [flight, ...dateItemStart.list]
      const dayListEnd = [...dateItemEnd.list, flight]
      dateItemStart.list = dayListStart
      dateItemEnd.list = dayListEnd
    }

    newDateList[0] = dateItemStart
    newDateList[newDateList.length - 1] = dateItemEnd

    await this.setState({ dateList: newDateList, flightsInitialized: !!flight })
  }

  handleDayUpdate = async (e, dateIndex) => {
    const { payload, removedIndex, addedIndex } = e
    const { dateList } = { ...this.state }
    const newDateList = [...dateList]
    if (payload.category === 'Flights') {
      if (removedIndex !== null && addedIndex === null) this.handleSetupFlights(null)
      else if (removedIndex === null && addedIndex !== null) {
        this.handleSetupFlights(payload)
      }
    } else if (payload.category === 'Hotels') {
      if (removedIndex !== null && addedIndex === null) this.handelSetupHotels(payload, true)
      else this.handelSetupHotels(payload)
    } else {
      const dateItem = { ...newDateList[dateIndex] }
      const newList = applyDrag([...dateItem.list], e)
      dateItem.list = newList
      newDateList[dateIndex] = dateItem
      await this.setState({ dateList: newDateList })
    }

    let sum = 0
    this.state.dateList.forEach(({ list }) => {
      list.forEach(({ price = 0 }) => {
        sum += price
      })
    })

    this.setState({
      totalCost: sum
    })
  }

  render() {
    const { children } = this.props
    const {
      startDate,
      endDate,
      quantityAdults,
      quantityChildren,
      dateList,
      initialized,
      totalCost
    } = this.state
    const {
      handleDateChange: changeDate,
      handleQuantityUpdate: updateQuantity,
      handleDayUpdate: updateDay
    } = this
    return (
      <Provider
        value={{
          startDate,
          endDate,
          dateList,
          quantityAdults,
          quantityChildren,
          initialized,
          totalCost,
          changeDate,
          updateQuantity,
          updateDay
        }}
      >
        {children}
      </Provider>
    )
  }
}
