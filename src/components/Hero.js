import styled from "styled-components";
import heroBg from "../images/bg-intro-desktop.svg";
import heroPhones from "../images/image-mockups.png";
import Button from "./styledElements/Button";
import {
  maxWidthLg,
  sectionSpacingLg,
  headingStyles,
  sectionSpacingSm,
} from "../abstracts/Mixins";
import Lead from "./styledElements/Lead";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  align-items: center;

  ${Responsive.lg`
  grid-template-columns: 1fr;
  `}

  .hero-info {
    ${sectionSpacingLg}

    ${Responsive.lg`
    ${sectionSpacingSm}
    margin-top: 10rem;
    `}
  }

  .hero-heading {
    ${headingStyles}
    font-size: 7rem;
    color: var(--darkBlue);

    ${Responsive.lg`
    position: relative;
    z-index: 5; 
    `}

    ${Responsive.sm`
    text-align: center;
    font-size: 5rem;
    `}
  }

  .hero-btn {
    ${Responsive.sm`
    width: 100%;
    text-align: center;
    `}
  }

  .hero-bg {
    position: absolute;
    z-index: 5;
    width: 40%;
    top: 20%;

    ${Responsive.lg`
    top: 10%;
    right: 0;
    width: 70%;
    z-index: 1;
    opacity: 0.2;
    `}

    ${Responsive.sm`
    width: 90%;
    `}
  }

  .hero-phones {
    position: relative;
    z-index: 100;

    ${Responsive.lg`
    display: none;
    `}
  }
`;

function Hero() {
  return (
    <header style={{ backgroundColor: "var(--white)" }}>
      <Container>
        <div className="hero-info">
          <h1 className="hero-heading" data-aos="fade-up">
            Next generation digital banking
          </h1>
          <Lead data-aos="fade-up" data-aos-delay="100">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Lead>
          <div data-aos="fade-up" data-aos-delay="200">
            <Button className="hero-btn">Request Invite</Button>
          </div>
        </div>
        <div className="hero-imgs">
          <img className="hero-bg" src={heroBg} alt="" />
          <img
            className="hero-phones"
            src={heroPhones}
            alt="illustration of phones"
            data-aos="fade-down"
          />
        </div>
      </Container>
    </header>
  );
}

export default Hero;
