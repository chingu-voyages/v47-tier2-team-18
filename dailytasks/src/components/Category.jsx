import React from 'react';
import TaskType from './TaskType';
import { CategoryWrapper } from './styles/CategoryStyles';

const Category = ({ category }) => {
  const { categoryName, activityTypes } = category;
  console.log(category)

  return (
    <CategoryWrapper>
      <div className='category-name'>{categoryName}</div>
      {activityTypes.map((activityType, index) => (
        <TaskType key={index} activityType={activityType} />
      ))}
    </CategoryWrapper>
  );
};

export default Category;
