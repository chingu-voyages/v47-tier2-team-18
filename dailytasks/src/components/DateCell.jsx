import { DateWrapper, CellDate, Tasks } from "./styles/CalendarStyles"
import { findDateTasksCount, todayDateInfo } from '../utils/dates.js'

function DateCell({ date, row, column, onClick }) {
  const { current_day } = todayDateInfo()
  const totalTasks = findDateTasksCount(date)
  const dayStyle = {
    gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
  }

  if(current_day == date){
    dayStyle["border"] = "1px solid black"
  }

  return (
    <DateWrapper key={`date-${date}`} style={dayStyle} onClick={onClick}>
      <CellDate>{date}</CellDate>
      <Tasks>{totalTasks} tasks</Tasks>
    </DateWrapper>
  )
}

export default DateCell