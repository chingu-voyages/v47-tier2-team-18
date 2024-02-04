import styled from 'styled-components';

export const CalanderWrapper = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  border: 1px solid black;
`;

export const Cell = styled.div`
  border: 1px solid black;
`;