import styled from "styled-components";

// Styled nav element
export const NavWrapper = styled.nav`
  // TEMP HEIGHT - change once full app is assembled

  padding: 3rem 2rem;
  border-radius: 0 1.5rem;
  width: 250px;
`;

// Styled ul element utilizes flex for positioning
export const NavList = styled.ul`
  height: 100%;
  // Remove indentation
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

// Styled li element with link buttons
export const NavLinks = styled.li`
  width: 100%;

  a {
    text-decoration: none;
  }

  button {
    width: 100%;
    background-color: #d9d9d9;
    font-size: 1.5rem;
    border: none;
    border-radius: 1.5rem;
    padding: 1rem;
  }

  button:hover {
    cursor: pointer;
    outline: 2px #4e9ae0 solid;
    box-shadow: 0px 4px 4px 0px #00000040;
  }
`;
