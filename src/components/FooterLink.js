import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";

const Container = styled.li`
  .link {
    ${textStyles}
    font-size: var(--xxs);
    transition: var(--mainTransition);
    color: var(--white);

    &:hover,
    &:focus {
      color: var(--limeGreen);
    }
  }
`;

function FooterLink({ text }) {
  return (
    <Container>
      <a className="link" href="#!">
        {text}
      </a>
    </Container>
  );
}

export default FooterLink;
