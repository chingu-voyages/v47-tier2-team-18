import { CalanderWrapper, Cell } from "./styles/CalanderStyles"

function Calander() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const today = new Date()
  const month = months[today.getMonth()]
  const current_day = today.getDay()
  

  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
  const daysCells = []

  for(let date = 0; date < daysInMonth; date++){
    let weekNum = 

    const dayStyle = {
        padding: "2rem",
        border: "1px soild black",
        gridArea: ``
    }

    const cell = <div style={dayStyle}>{ date + 1}</div>
    daysCells.push(cell)
  }

  return (
    <CalanderWrapper>
        { daysCells }
    </CalanderWrapper>
  )
}

export default Calander