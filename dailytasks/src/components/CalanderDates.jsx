import DateCell from "./DateCell"
import { todayDateInfo } from "../utils/dates"

function CalanderDates() {
  //get the total number of days in the month and determine what day the first day of the month 
  const { today, current_day } = todayDateInfo()
  const daysCells = []
  const daysInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate()
  let firstdayofMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay() 
  let row = 2
  let column = firstdayofMonth + 1
  
  //creates the calander days cells
  for(let date = 1; date <= daysInMonth; date++){
    const cell = <DateCell row={row} column={column} date={date} current_day={current_day}/>
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