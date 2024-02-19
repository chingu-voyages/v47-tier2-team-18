import { getTaskData, findDateTasksCount, tasks } from "../../utils/dates"
import { ViewTaskWrapper } from "./ViewTaskStyle"

function ViewTask({ date }) {
  const taskData = getTaskData(date)
  const totalTasks = findDateTasksCount(date)
  const tasks = []

  console.log(tasks)

  /* taskData.forEach( task => {

  }) */
  
  return (
    <div>
        <h3>{totalTasks} tasks!</h3>

    </div>
  )
}

export default ViewTask