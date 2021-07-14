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
import FooterLink from "./FooterLink";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  color: var(--white);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  align-items: center;

  ${Responsive.xl`
  grid-template-columns: repeat(3, 1fr);
  `}

  ${Responsive.md`
  grid-template-columns: 1fr;
  `}

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

    &:nth-child(1) {
      margin-left: 0;
    }

    &:hover,
    &:focus {
      color: var(--limeGreen);
    }
  }

  .footer-list {
    margin: 1rem 0;
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
            <div>
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
        </div>
        <ul className="footer-col">
          <FooterLink text="About Us" />
          <FooterLink text="Contact" />
          <FooterLink text="Blog" />
        </ul>
        <ul className="footer-col">
          <FooterLink text="Careers" />
          <FooterLink text="Support" />
          <FooterLink text="Privacy Policy" />
        </ul>
        <div className="footer-cta">
          <Button>Request Invite</Button>
          <p className="footer-copyright">© Easybank. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
