import styled from "styled-components";
import { headingStyles, textStyles } from "../abstracts/Mixins";

const Container = styled.a`
  .feature-icon {
    width: 10rem;
  }

  .feature-title {
    ${headingStyles}
    color: var(--darkBlue);
    font-size: var(--sm);
    padding: 2rem 0;
  }

  .feature-desc {
    ${textStyles}
    color: var(--grayishBlue);
    font-size: var(--xxs);
  }
`;

function Feature({ icon, title, description }) {
  return (
    <article>
      <Container>
        <img className="feature-icon" src={icon} alt={title} />
        <h2 className="feature-title">{title}</h2>
        <p className="feature-desc">{description}</p>
      </Container>
    </article>
  );
}

export default Feature;
