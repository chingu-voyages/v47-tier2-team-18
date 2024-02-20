import tasksData from '../data/tasks-example.json'

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function transformTasks(){
    let transformTaskObj = { }

    tasksData.forEach( task => {
      task.days.forEach( day => {    
        //if the key doesn't exist create a default one
        if(!transformTaskObj[day]){
          transformTaskObj[day] = {
            count: 0,
            tasks: []
          }
        }
        
        const task_copy = { ...task }
        delete task_copy["days"]

        transformTaskObj[day].count += 1
        transformTaskObj[day].tasks.push(task_copy)
      } )
    })

    return transformTaskObj
  }

export const tasks = transformTasks()

export function findDateTasksCount(date){
  const tasks = transformTasks()
  const { year, month_num } = todayDateInfo()
  const date_obj = new Date(year, month_num, date)
  let day = lowerFirstLetter(days[date_obj.getDay()])

  let temp_1 = tasks[date] ? tasks[date].count : 0
  let temp_2 = tasks[day] ? tasks[day].count : 0

  return temp_1 + temp_2
}

export function getTaskData(date){
  const tasks = transformTasks()
  const { year, month_num } = todayDateInfo()
  const date_obj = new Date(year, month_num, date)
  let day = lowerFirstLetter(days[date_obj.getDay()])

  let temp_1 = tasks[date] ? tasks[date] : {count: 0, tasks: []}
  let temp_2 = tasks[day] ? tasks[day] : {count: 0, tasks: []}

  
  return {
    count: temp_1.count + temp_2.count,
    tasks: [...temp_1.tasks, ...temp_2.tasks]
  }
}

export function todayDateInfo(){
  const today = new Date()
  const year = today.getFullYear()
  const month = months[today.getMonth()]
  const month_num = today.getMonth()
  const current_day = today.getDate()

  return { today, year, month, current_day, month_num }
}

function lowerFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}