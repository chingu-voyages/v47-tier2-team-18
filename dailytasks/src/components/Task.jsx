import React from 'react';
import { TaskWrapper } from './styles/TaskStyles';

const Task = ({ task }) => {
  const { taskName, taskDescription} = task;

  return (
    <TaskWrapper>
        <h4>{taskName}</h4>
        {taskDescription && <p><div className='task-description'>Task Description:</div> {taskDescription}</p>}
    </TaskWrapper>
  );
};

export default Task;
