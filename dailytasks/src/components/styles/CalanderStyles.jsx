import styled from 'styled-components';

export const CalanderWrapper = styled.div`
  max-width: 1200px;
  border: 1px solid black;
`;

export const CalanderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`

export const Cell = styled.div`
  text-align: center;
`;

export const MonthHeader = styled.h2`
  text-align: center;
`