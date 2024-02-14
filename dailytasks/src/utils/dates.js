import tasksData from '../data/tasks-example.json'

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
export const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export function transformTasks(){
    let transformTaskObj = { }

    tasksData.forEach( category => {
      category.activityTypes.forEach( activity => {
        activity.Tasks.forEach( task => {
          task.days.forEach( day => {
            //if the key doesn't exist create a default one
            if(!transformTaskObj[day]){
              transformTaskObj[day] = {
                count: 0,
                "categoryName": category.categoryName,
                "activityTypes": []
              }
            }

            let findActivityName = transformTaskObj[day].activityTypes.find( task_activity => task_activity.activityName == activity.activityName)
            let task_copy = { ...task }
            delete task_copy.days
            transformTaskObj[day].count++
            
            if(!findActivityName){
              let task_copy = { ...task }
              delete task_copy.days

              let newActivity = {
                "activityName": activity.activityName,
                "Tasks": [task_copy]
              }

              transformTaskObj[day].activityTypes.push(newActivity)
            }
            else{
              findActivityName["Tasks"].push(task_copy)
            }
          })
        } )
      })
    })

    return transformTaskObj
  }

export function findDateTasksCount(date){
  const tasks = transformTasks()
  const { year, month_num } = todayDateInfo()
  const date_obj = new Date(year, month_num, date)
  let day = lowerFirstLetter(days[date_obj.getDay()])

  let temp_1 = tasks[date] ? tasks[date].count : 0
  let temp_2 = tasks[day] ? tasks[day].count : 0

  return temp_1 + temp_2
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