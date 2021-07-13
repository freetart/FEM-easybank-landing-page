import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";

const Container = styled.li`
  .link {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--grayishBlue);
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
