import React from 'react';
import { TaskWrapper } from './styles/TaskStyles';

const Task = ({ task, index }) => {
  const { taskName, taskDescription} = task;

  return (
    <TaskWrapper>
        <h3>Task {index + 1}</h3>
        <h4>{taskName}</h4>
        {taskDescription && <div><div className='task-description'>Task Description:</div> {taskDescription}</div>}
    </TaskWrapper>
  );
};

export default Task;
