import styled from 'styled-components';
import { Link } from "react-router-dom";


export const CalendarWrapper = styled.div`
  max-width: 1000px;
  border: 1px solid black;
`;

export const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  padding: 1rem;

  &:hover{
    border: 1px solid black;
    cursor: pointer;
  }
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

export const CellDate = styled.div`
  align-self: center;
  
`;

export const Tasks = styled.div`
  align-self: center;
`;

export const MonthHeader = styled.h2`
  text-align: center;
`