import React, { PureComponent } from 'react'
import { DateRangePicker } from 'react-dates'
import { CalendarIcon } from '../../assets/icons'
import withPlanningState from '../../context'
import { DepartCalendar, ReturnCalendar, Wrapper, Text, Text2 } from './styles'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './styles.css'

class Calendar extends PureComponent {
  state = {
    focusedInput: null
  }

  render() {
    const { noHeaders, startDate, endDate, changeDate } = this.props
    const { focusedInput } = this.state

    return (
      <Wrapper>
        {!noHeaders && (
          <div>
            <Text>Departure</Text>
            <Text2>Return</Text2>
          </div>
        )}

        <ReturnCalendar>
          <CalendarIcon color="#00B2D6" height={22} width={22} />
        </ReturnCalendar>
        <DepartCalendar>
          <CalendarIcon color="#00B2D6" height={22} width={22} />
        </DepartCalendar>
        <DateRangePicker
          numberOfMonths={1}
          startDate={startDate}
          endDate={endDate}
          startDateId="your_unique_start_date_id"
          endDateId="your_unique_end_date_id"
          onDatesChange={({ startDate: start, endDate: end }) => changeDate(start, end)}
          focusedInput={focusedInput}
          onFocusChange={focusedInputProp => this.setState({ focusedInput: focusedInputProp })}
        />
      </Wrapper>
    )
  }
}

export default withPlanningState(Calendar)
