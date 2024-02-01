import React from 'react';
import Category from './Category';
import tasksData from '../data/tasks-example.json';
import { AllTasksWrapper } from './styles/AllTasksStyles';

const AllTasks = () => {

  return (
    <AllTasksWrapper>
      {tasksData.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </AllTasksWrapper>
  );
};

export default AllTasks;