import styled from "styled-components";
import { textStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Lead = styled.p`
  ${textStyles}
  font-size: var(--xxs);
  padding: 2rem 0;
  color: var(--grayishBlue);

  ${Responsive.sm`
  text-align: center;
  `}
`;

export default Lead;
