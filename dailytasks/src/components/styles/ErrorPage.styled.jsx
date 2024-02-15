import styled from "styled-components";

export const CenterWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// Style heading for error page
export const ErrorHeading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #888;
  font-size: 50px;
  display: inline-block;
  padding-right: 12px;
  animation: type 0.5s alternate infinite;

  @keyframes type {
    from {
      box-shadow: inset -3px 0px 0px #888;
    }
    to {
      box-shadow: inset -3px 0px 0px transparent;
    }
  }
`;
