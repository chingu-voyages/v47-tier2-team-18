import DateCell from "./DateCell"
import { todayDateInfo, getTaskData } from "../utils/dates"

function CalanderDates() {
  //get the total number of days in the month and determine what day the first day of the month 
  const { today, current_day } = todayDateInfo()
  const daysCells = []
  const daysInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate()
  let firstdayofMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay() 
  let row = 2
  let column = firstdayofMonth + 1

  function showData(date){
    const tasks = getTaskData(date)
    console.log(tasks)
  }

  //creates the calander days cells
  for(let date = 1; date <= daysInMonth; date++){
    const cell = <DateCell 
                  key={date} 
                  row={row} 
                  column={column} 
                  date={date} 
                  current_day={current_day}
                  onClick={() => showData(date)}
                />
    cell.even
    daysCells.push(cell)
    column++

    if(column == 8){
      column = 1
      row++
    }
  }

  return daysCells
}

export default CalanderDates