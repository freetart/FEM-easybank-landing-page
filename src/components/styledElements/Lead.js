import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Lead = styled.p`
  ${textStyles}
  font-size: var(--xxs);
  padding: 2rem 0;
  color: var(--grayishBlue);
`;

export default Lead;
