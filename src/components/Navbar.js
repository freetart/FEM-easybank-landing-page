import styled from "styled-components";
import logo from "../images/logo.svg";
import { maxWidthLg } from "../abstracts/Mixins";
import Link from "./Link";
import Button from "./styledElements/Button";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  background-color: var(--white);
  z-index: 1000;
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
  }
`;

function Navbar() {
  return (
    <Nav>
      <Container>
        <img className="nav-logo" src={logo} alt="easybank logo" />
        <ul className="nav-list">
          <Link text="Home" />
          <Link text="About" />
          <Link text="Contact" />
          <Link text="Blog" />
          <Link text="Careers" />
        </ul>
        <Button>Request Invite</Button>
      </Container>
    </Nav>
  );
}

export default Navbar;
