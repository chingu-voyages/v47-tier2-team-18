import { DateWrapper, CellDate, Tasks } from "../styles/CalendarStyles.jsx"
import { findDateTasksCount, todayDateInfo, getTaskData } from '../../utils/dates.js'
import { useNavigate, Link } from "react-router-dom";

function DateCell({ date, row, column, onClick }) {
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
    <DateWrapper key={`date-${date}`} style={dayStyle} onClick={onClick}>
      <Link to="/tasks" state={{ tasks }}>
        <CellDate>{date}</CellDate>
        <Tasks>{totalTasks} tasks</Tasks>
      </Link>
    </DateWrapper>
  )
}

export default DateCell