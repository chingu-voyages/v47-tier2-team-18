import { CalanderWrapper, Cell, CalanderGrid, MonthHeader } from "./styles/CalanderStyles"

function Calander() {
  //will be used to render the correct month and days
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  //CAN BE USED TO TEST AND GENERATE DIFFERENT DATES
  //modify the new Date() obj and pass it a year and a month to generate a different calander
  //ex: new Date(2024, 0) will generate a calander for the month of january 2024
  const today = new Date()
  const year = today.getFullYear()
  const month = months[today.getMonth()]
  const current_day = today.getDate()

  //get the total number of days in the month and determine what day the first day of the month 
  const daysInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate()
  let firstdayofMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay() 

  const daysCells = []
  let row = 1
  let column = 0

  console.log("current day", current_day)

  //create headers for the calander
  days.forEach( day => {
    const dayStyle = {
      padding: "2rem",
      border: "1px soild black",
      gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
    }

    const cell = <div style={dayStyle} key={day}>{ day }</div>
    daysCells.push(cell)
  })

  column = firstdayofMonth + 1
  row = 2

  //creates the calander days cells
  for(let date = 1; date <= daysInMonth; date++){
    const dayStyle = {
      padding: "2rem",
      border: date == current_day ? "1px solid black" : "none",
      gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
    }

    const cell = <div key={`date-${date}`} style={dayStyle}><Cell>{ date }</Cell></div>
    daysCells.push(cell)
    column++

    if(column == 8){
      column = 1
      row++
    }
  }

  return (
      <CalanderWrapper>
        <MonthHeader>{`${month} ${year}`}</MonthHeader>
        <CalanderGrid>
          { daysCells }
        </CalanderGrid>
      </CalanderWrapper>
  )
}

export default Calander