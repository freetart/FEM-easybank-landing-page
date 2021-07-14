import styled from "styled-components";
import { textStyles, maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import logo from "../images/logo.svg";
import {
  FaFacebookSquare,
  FaYoutube,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagram,
} from "react-icons/fa";
import Button from "./styledElements/Button";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  color: var(--white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  align-items: center;

  .footer-socials {
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    width: 30rem;
    pointer-events: none;
    margin-bottom: 2rem;
  }

  .footer-social-link {
    color: var(--white);
    font-size: var(--sm);
    margin: 0 1rem;
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--limeGreen);
    }
  }

  .footer-list {
    margin: 1rem 0;
  }

  .footer-link {
    ${textStyles}
    font-size: var(--xxs);
    transition: var(--mainTransition);
    color: var(--white);

    &:hover,
    &:focus {
      color: var(--limeGreen);
    }
  }

  .footer-copyright {
    ${textStyles}
    font-size: 1.2rem;
    margin-top: 1rem;
  }
`;

function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--darkBlue)" }}>
      <Container>
        <div className="footer-socials">
          <div className="footer-col">
            <img className="footer-logo" src={logo} alt="easybank logo" />
            <a className="footer-social-link" href="#!">
              <FaFacebookSquare />
            </a>
            <a className="footer-social-link" href="#!">
              <FaYoutube />
            </a>
            <a className="footer-social-link" href="#!">
              <FaTwitterSquare />
            </a>
            <a className="footer-social-link" href="#!">
              <FaPinterestSquare />
            </a>
            <a className="footer-social-link" href="#!">
              <FaInstagram />
            </a>
          </div>
        </div>
        <ul className="footer-col">
          <li className="footer-list">
            <a className="footer-link" href="#!">
              About Us
            </a>
          </li>
          <li className="footer-list">
            <a className="footer-link" href="#!">
              Contact
            </a>
          </li>
          <li className="footer-list">
            <a className="footer-link" href="#!">
              Blog
            </a>
          </li>
        </ul>
        <ul className="footer-col">
          <li className="footer-list">
            <a className="footer-link" href="#!">
              Careers
            </a>
          </li>
          <li className="footer-list">
            <a className="footer-link" href="#!">
              Support
            </a>
          </li>
          <li className="footer-list">
            <a className="footer-link" href="#!">
              Privacy Policy
            </a>
          </li>
        </ul>
        <div class="footer-cta">
          <Button>Request Invite</Button>
          <p className="footer-copyright">© Easybank. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
