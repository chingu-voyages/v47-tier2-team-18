import { CalendarWrapper, CalendarGrid, MonthHeader } from "../styles/CalendarStyles.jsx"
import { todayDateInfo } from '../../utils/dates.js'
import CalanderHeader from "../styles/CalanderHeader.jsx"
import CalanderDates from "./CalanderDates.jsx"

function Calendar() {
  //will be used to render the correct month and days
  const { year, month } = todayDateInfo()
  const calander = []

  //create headers for the calander
  calander.push([...CalanderHeader() ])

  //add all the dates in the calander
  calander.push([...CalanderDates() ])

  return (
      <CalendarWrapper>
        <MonthHeader>{`${month} ${year}`}</MonthHeader>
        <CalendarGrid>
          { calander }
        </CalendarGrid>
      </CalendarWrapper>
  )
}

export default Calendar