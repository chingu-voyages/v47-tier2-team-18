import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  max-width: 1000px;
  border: 1px solid black;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const CellDate = styled.div`
  align-self: center;

`;

export const Tasks = styled.div`
  align-self: center;
`;

export const MonthHeader = styled.h2`
  text-align: center;
`