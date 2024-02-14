import { DateWrapper, CellDate, Tasks } from "./styles/CalendarStyles"
import { findDateTasksCount, todayDateInfo } from '../utils/dates.js'

function DateCell({ date, row, column }) {
  const { current_day } = todayDateInfo()
  const totalTasks = findDateTasksCount(date)
  const dayStyle = {
    border: current_day == date ? "1px solid black" : "none",
    gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
  }


  return (
    <DateWrapper key={`date-${date}`} style={dayStyle}>
      <CellDate>{date}</CellDate>
      <Tasks>{totalTasks} tasks</Tasks>
    </DateWrapper>
  )
}

export default DateCell