import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './styles.css'
import { SingleDatePicker } from 'react-dates'
import { CalendarIcon } from '../../assets/icons'
import { DepartCalendar, Wrapper, Text } from './styles'

class Calendar extends React.Component {
  state = {
    createdAt: moment(),
    calendarFocused: false
  }

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }))
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  render() {
    const { createdAt, calendarFocused } = this.state

    return (
      <Wrapper>
        <Text>Date</Text>
        <DepartCalendar>
          <CalendarIcon color="#00B2D6" height={22} width={22} />
        </DepartCalendar>
        <SingleDatePicker
          date={createdAt}
          onDateChange={this.onDateChange}
          focused={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="DD/MM/YYYY"
        />
      </Wrapper>
    )
  }
}

export default Calendar
