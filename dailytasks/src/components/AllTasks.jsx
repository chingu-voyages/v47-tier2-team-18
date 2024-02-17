import Category from './Category';
import tasksData from '../data/tasks-example.json';
import { AllTasksWrapper } from './styles/AllTasksStyles';
import { useLocation } from 'react-router-dom';

const AllTasks = () => {
  let { state: {tasks}  } = useLocation();
  console.log("State", tasks)

  return (
    <>
      {tasks.categories ?
      <AllTasksWrapper>
        {tasks.categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </AllTasksWrapper>
      :
      <p>No tasks to display</p>}
  </>
  );
};

export default AllTasks;