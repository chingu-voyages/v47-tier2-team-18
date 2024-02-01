import React from 'react';
import Task from './Task';
import { TaskTypeWrapper } from './styles/TaskTypeStyles';

const TaskType = ({ activityType }) => {
  const { activityName, Tasks } = activityType;

  return (
    <TaskTypeWrapper>
      <h3>{activityName}</h3>
      {Tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </TaskTypeWrapper>
  );
};

export default TaskType;
