import React from 'react'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import './styles.css'
import { DateRangePicker } from 'react-dates'
import { CalendarIcon } from '../../assets/icons'
import { DepartCalendar, ReturnCalendar, Wrapper, Text, Text2 } from './styles'
import withPlanningState from '../../context'

class Calendar extends React.Component {
  state = {
    focusedInput: null
  }

  render() {
    const { startDate, endDate, changeDate } = this.props
    const { focusedInput } = this.state

    return (
      <Wrapper>
        <Text>Departure</Text>
        <Text2>Return</Text2>
        <ReturnCalendar>
          <CalendarIcon color="#00B2D6" height={22} width={22} />
        </ReturnCalendar>
        <DepartCalendar>
          <CalendarIcon color="#00B2D6" height={22} width={22} />
        </DepartCalendar>
        <DateRangePicker
          orientation={window.innerWidth < 768 ? 'vertical' : 'horizontal'}
          verticalHeight={window.innerWidth < 768 ? 350 : 400}
          numberOfMonths={1}
          startDate={startDate}
          startDateId="your_unique_start_date_id"
          endDate={endDate}
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
