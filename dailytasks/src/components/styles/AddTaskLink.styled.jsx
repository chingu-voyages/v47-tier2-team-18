import styled from "styled-components";

export const TaskLink = styled.div`
  position: fixed;
  bottom: 10rem;
  left: 2rem;

  button {
    background-color: #d9d9d9;
    font-size: 2rem;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: none;
  }

  button:hover {
    cursor: pointer;
    outline: 2px #4e9ae0 solid;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;
