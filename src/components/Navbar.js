import styled from "styled-components";
import logo from "../images/logo.svg";
import { maxWidthLg } from "../abstracts/Mixins";
import NavLink from "./NavLink";
import Button from "./styledElements/Button";
import Responsive from "../abstracts/Responsive";
import ToggleMobileMenu from "./ToggleMobileMenu";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: var(--white);
  z-index: 2000;
`;

const Container = styled.div`
  ${maxWidthLg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  .nav-logo {
    width: 15rem;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: 3rem;

    ${Responsive.lg`
    display: none;
    `}
  }

  .nav-btn {
    ${Responsive.lg`
    display: none;
    `}
  }
`;

function Navbar({ isActive, setIsActive }) {
  return (
    <Nav>
      <Container>
        <img className="nav-logo" src={logo} alt="easybank logo" />
        <ul className="nav-list">
          <NavLink text="Home" />
          <NavLink text="About" />
          <NavLink text="Contact" />
          <NavLink text="Blog" />
          <NavLink text="Careers" />
        </ul>
        <Button className="nav-btn">Request Invite</Button>
        <ToggleMobileMenu isActive={isActive} setIsActive={setIsActive} />
      </Container>
    </Nav>
  );
}

export default Navbar;
