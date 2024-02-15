import { Link } from "react-router-dom";
import { NavLinks, NavList, NavWrapper } from "./styles/Nav.styled";

const SideBar = () => {
  return (
    <NavWrapper>
      <NavList>
        <NavLinks>
          <Link to="">
            <button>Agenda</button>
          </Link>
        </NavLinks>
        <NavLinks>
          <Link to="/calendar">
            <button>Weekly</button>
          </Link>
        </NavLinks>
        <NavLinks>
          <Link to="">
            <button>Tasks</button>
          </Link>
        </NavLinks>
        <NavLinks>
          <Link to="">
            <button>Search</button>
          </Link>
        </NavLinks>
      </NavList>
    </NavWrapper>
  );
};
export default SideBar;
