import styled from "styled-components";

export const TaskFormWrapper = styled.div`
  max-width: 800px;
  padding: 2rem;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: ${(props) => props.$justifyContent};
  margin-bottom: ${(props) => props.$marginBottom};
`;

export const TaskInput = styled.input`
  padding: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const TaskTextArea = styled.textarea`
  padding: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Invalid = styled.div`
  color: red;
`;

export const AddTaskButton = styled.button`
  margin-top: 1rem;
  background-color: #d9d9d9;
  font-size: 1.25rem;
  border: none;
  border-radius: 1rem;
  padding-block: 0.75rem;
  padding-inline: 1.25rem;

  &:hover {
    cursor: pointer;
    outline: 2px #4e9ae0 solid;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;

export const TaskAdded = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  text-align: center;
`;
