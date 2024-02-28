import styled from "styled-components";

//Define the grid
export const AppWrapper = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template:
    "navigation header" auto
    "navigation content" 1fr
    "footer footer" auto
    / auto 1fr;
`;

export const HeaderWrapper = styled.div`
  grid-area: header;
`;

export const NavigationWrapper = styled.div`
  grid-area: navigation;
`;

export const ContentWrapper = styled.div`
  grid-area: content;
`;

export const FooterWrapper = styled.div`
  grid-area: footer;
`;

export const AllTasksWrapper = styled.div`
  border: 4px solid #7029b7;
  border-radius: 10px;
  font-family: Open Sans, sans-serif;
  max-width: 650px;
  margin: 0 auto;
  padding: 25px;
  background-color: #cfffb8;
`;
