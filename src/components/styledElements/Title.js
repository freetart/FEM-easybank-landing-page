import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Title = styled.h2`
  ${headingStyles}
  font-size: var(--xxl);
  color: var(--darkBlue);

  ${Responsive.sm`
  text-align: center;
  `}
`;

export default Title;
