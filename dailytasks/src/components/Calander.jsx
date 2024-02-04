import { CalanderWrapper, Cell } from "./styles/CalanderStyles"

function Calander() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const today = new Date()
  const month = months[today.getMonth()]
  const current_day = today.getDay()

  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
  let firstdayofMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1).getDay() 
  const daysCells = []
  let row = 1
  let column = firstdayofMonth == 7 ? 1 : firstdayofMonth 

  for(let date = 0; date < daysInMonth; date++){
    const dayStyle = {
      padding: "2rem",
      border: "1px soild black",
      gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
    }

    const cell = <div style={dayStyle}><Cell>{ date + 1}</Cell></div>
    daysCells.push(cell)
    column++

    if(column == 8){
      column = 1
      row++
    }
  }

  return (
    <CalanderWrapper>
        { daysCells }
    </CalanderWrapper>
  )
}

export default Calander