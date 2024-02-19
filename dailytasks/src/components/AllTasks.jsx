import React from 'react';
import tasksData from '../data/tasks-example.json'
import { AllTasksWrapper, TaskWrapper } from './styles/AllTasksStyles';

const AllTasks = () => {
  return (
    <AllTasksWrapper>
      {tasksData.map((task, index) => (
        <TaskWrapper key={index}>
          <h4>{task.taskName}</h4>
          {task.taskDescription && (
            <p>
              <div className='task-description'>Task Description:</div> {task.taskDescription}
            </p>
          )}
        </TaskWrapper>
      ))}
    </AllTasksWrapper>
  );
};

export default AllTasks;