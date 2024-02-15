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
                "categories": []
              }
            }

            let temp_pointer = transformTaskObj[day]
              .categories.find(cur_cat => cur_cat.categoryName == category.categoryName)      
            
            if(!temp_pointer){
              temp_pointer = {
                "categoryName": category.categoryName,
                "activityTypes": []
              }

              transformTaskObj[day].categories.push(temp_pointer)
            }

            let findActivity = temp_pointer["activityTypes"]
                                .find( curr_activity => curr_activity.activityName == activity.activityName )

            if(!findActivity){
              let temp_activity = {
                "activityName": activity.activityName,
                "Tasks":[]
              }

              temp_pointer["activityTypes"].push(temp_activity)
              findActivity = temp_activity
            }
            
            const task_copy = {...task }
            delete task_copy["days"]

            findActivity["Tasks"].push(task_copy)
            transformTaskObj[day].count += 1
          })
        } )
      })
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

  let temp_1 = tasks[date] ? tasks[date] : {count: 0, categories: []}
  let temp_2 = tasks[day] ? tasks[day] : {count: 0, categories: []}
  
  return {
    count: temp_1.count + temp_2.count,
    categories: [
      [...temp_1.categories, ...temp_2.categories]
    ]
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