import Category from './Category';
import tasksData from '../data/tasks-example.json';
import { AllTasksWrapper } from './styles/AllTasksStyles';
import { useLocation } from 'react-router-dom';

const AllTasks = () => {
  let {state} = useLocation();
  console.log("SSS", state)
  let tasks = state ? { state: {tasks}  } : undefined

  console.log("State", tasks)

  return (
    <>
      {tasks ?
      <AllTasksWrapper>
        {tasks.categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </AllTasksWrapper>
      :
      <AllTasksWrapper>
        {tasksData.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </AllTasksWrapper>}
  </>
  );
};

export default AllTasks;