import styled from "styled-components";
import { textStyles } from "../abstracts/Mixins";

const Container = styled.li`
  .link {
    ${textStyles}
    font-size: var(--xxs);
    color: var(--grayishBlue);
    padding: 3.1rem 0;
    outline: 0;

    &:hover,
    &:focus {
      border-bottom: 0.3rem solid var(--limeGreen);
      border-top: 0.3rem solid var(--limeGreen);
    }
  }
`;

function NavLink({ text }) {
  return (
    <Container>
      <a className="link" href="#!">
        {text}
      </a>
    </Container>
  );
}

export default NavLink;
