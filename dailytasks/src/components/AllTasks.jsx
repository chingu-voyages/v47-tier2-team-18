import tasksData from '../data/tasks-example.json';
import { AllTasksWrapper } from './styles/AllTasksStyles';
import { useLocation } from 'react-router-dom';
import Task from './Task';

const AllTasks = () => {
  let {state} = useLocation();
  console.log(state)
  let tasks = state ? state.tasks.tasks : undefined

  return (
    <>Calendar
      {tasks ?
      <AllTasksWrapper>
        {tasks.map((task, index) => (
          <Task key={index} task={task} index={index}/>
        ))}
      </AllTasksWrapper>
      :
      <AllTasksWrapper>
        {tasksData.map((task, index) => (
          <Task key={index} task={task} index={index} />
        ))}
      </AllTasksWrapper>}
  </>
  );
};

export default AllTasks;