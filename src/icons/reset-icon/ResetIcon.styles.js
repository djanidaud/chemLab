import { css } from "styled-components";

const styles = ({ theme }) => css`
  width: 30px;
  height: 30px;

  .arrow,
  .arrow-head {
    fill: grey;
    fill-opacity: 1;
    fill-rule: evenodd;
  }

  &:hover {
    .arrow,
    .arrow-head {
      fill: ${theme.elementsColor.inert.default};
    }
  }
`;

export default styles;
