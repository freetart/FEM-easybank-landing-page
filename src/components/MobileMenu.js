import styled from "styled-components";
import { flexCenter } from "../abstracts/Mixins";
import Button from "./styledElements/Button";

const Aside = styled.aside`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }

  .menu-content {
    ${flexCenter};
    align-items: flex-start;
    flex-direction: column;
    min-height: 100vh;
    padding: 2rem;
  }

  .menu-logo {
    width: 20rem;
    margin-bottom: 5rem;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5rem;
    text-align: center;
    margin-bottom: 5rem;
  }

  .menu-link {
    font-size: var(--sm);
    color: var(--white);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--limeGreen);
    }
  }

  .menu-button {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }
`;

function MobileMenu({ isActive }) {
  if (isActive) {
    return (
      <Aside>
        <div className="menu-content">
          <ul className="menu-links">
            <li>
              <a href="#!" className="menu-link">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="menu-link">
                About
              </a>
            </li>
            <li>
              <a href="#!" className="menu-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#!" className="menu-link">
                Careers
              </a>
            </li>
          </ul>
          <Button className="menu-button">Contact</Button>
        </div>
      </Aside>
    );
  } else {
    return null;
  }
}

export default MobileMenu;
