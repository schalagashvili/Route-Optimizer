import moment from 'moment'
// eslint-disable-next-line
export const calculateDayList = (startDate, endDate) => {
  const length = Math.abs(startDate.diff(endDate, 'days', false)) + 1
  return Array.from({ length }, (e, i) => ({
    droppableId: `droppable${i}`,
    date: moment(startDate)
      .add(i, 'days')
      .format('ddd, MMM D'),
    listId: `list${i}`,
    list: []
  }))
}
