import { days } from "../../utils/dates"

function CalanderHeader() {
    let row = 1
    let column = 1

    const headers = []
    days.forEach( day => {
        const dayStyle = {
          textAlign: 'center',
          gridArea: `${row} / ${column} / ${row + 1} / ${column + 1}`
        }
    
        const cell = <div style={dayStyle} key={day}>{ day }</div>
        headers.push(cell)
        column++
      })

  return headers
}

export default CalanderHeader