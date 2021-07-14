import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";

const Container = styled.li`
  .link {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--grayishBlue);

    &:hover,
    &:focus {
      border-bottom: 0.3rem solid var(--limeGreen);
    }
  }
`;

function Link({ text }) {
  return (
    <Container>
      <a className="link" href="#!">
        {text}
      </a>
    </Container>
  );
}

export default Link;
