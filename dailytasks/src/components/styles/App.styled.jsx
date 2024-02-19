import styled from "styled-components";

//Define the grid
export const AppWrapper = styled.div`
  display: grid;
  grid-template:
    "navigation header" auto
    "navigation content" 1fr
    "navigation footer" auto
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
