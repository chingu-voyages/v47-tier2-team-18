import { LinkContainer, CellDate, Tasks } from "../styles/CalendarStyles.jsx"
import { findDateTasksCount, todayDateInfo, getTaskData } from '../../utils/dates.js'

function DateCell({ date, row, column }) {
  const { current_day } = todayDateInfo()
  const totalTasks = findDateTasksCount(date)
  const tasks = getTaskData(date)
  const dayStyle = {
    gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
  }

  if(current_day == date){
    dayStyle["border"] = "1px solid black"
  }

  return (
    <LinkContainer to="/tasks" state={{ tasks }} key={`date-${date}`} style={dayStyle}>
      <CellDate>{date}</CellDate>
      <Tasks>{totalTasks} tasks</Tasks>
    </LinkContainer>
  )
}

export default DateCell