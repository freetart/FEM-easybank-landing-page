import styled from "styled-components";
import heroBg from "../images/bg-intro-desktop.svg";
import heroPhones from "../images/image-mockups.png";
import Button from "./styledElements/Button";
import {
  maxWidthLg,
  sectionSpacingLg,
  headingStyles,
  textStyles,
} from "../abstracts/Mixins";
import Lead from "./styledElements/Lead";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  align-items: center;

  .hero-info {
    ${maxWidthLg}
    ${sectionSpacingLg}
  }

  .hero-heading {
    ${headingStyles}
    font-size: 5rem;
    color: var(--darkBlue);
  }

  .hero-imgs {
    position: relative;
  }

  .hero-bg {
    position: absolute;
    top: -10rem;
    right: -10rem;
    transform: scale(1.3);
  }

  .hero-phones {
    position: absolute;
    top: -30rem;
  }
`;

function Hero() {
  return (
    <header style={{ backgroundColor: "var(--white)" }}>
      <Container>
        <div className="hero-info">
          <h1 className="hero-heading">Next generation digital banking</h1>
          <Lead>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Lead>
          <Button>Request Invite</Button>
        </div>
        <div className="hero-imgs">
          <img className="hero-bg" src={heroBg} alt="" />
          <img
            className="hero-phones"
            src={heroPhones}
            alt="illustration of phones"
          />
        </div>
      </Container>
    </header>
  );
}

export default Hero;
