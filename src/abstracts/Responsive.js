import { css } from "styled-components";

const breakpoints = {
  xs: "400px",
  sm: "500px",
  md: "700px",
  lg: "800px",
  xl: "1050px",
};

const Responsive = Object.keys(breakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default Responsive;
