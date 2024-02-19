import styled from 'styled-components';

export const AllTasksWrapper = styled.div`
  border: 4px solid #7029b7;
  border-radius: 10px;
  font-family: 'Open Sans', sans-serif;
  max-width: 650px;
  margin: 0 auto;
  padding: 25px;
  background-color: #cfffb8;
`;

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 4px solid #7029b7;
  border-radius: 20px;
  padding: 14px;
  margin-bottom: 10px;

  h4 {
    color: #70024d;
  }

  p {
    color: #70024d;
    margin: 5px 0;
  }
  
  .task-description {
    display: inline-block;
    padding: 8px;
    color: #fff;
    background-color: #51b565;
    border-radius: 10px;
  }
`;
