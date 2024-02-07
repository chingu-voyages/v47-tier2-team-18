import { NavLinks, NavList, NavWrapper } from "./styles/Nav.styled";

const SideBar = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavLinks>
          <a href="#">
            <button>Agenda</button>
          </a>
        </NavLinks>
        <NavLinks>
          <a href="#">
            <button>Weekly</button>
          </a>
        </NavLinks>
        <NavLinks>
          <a href="#">
            <button>Tasks</button>
          </a>
        </NavLinks>
        <NavLinks>
          <a href="#">
            <button>Search</button>
          </a>
        </NavLinks>
      </NavList>
    </NavWrapper>
  );
};
export default SideBar;
