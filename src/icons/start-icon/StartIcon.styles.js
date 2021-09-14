import { css } from "styled-components";

const styles = ({ theme }) => css`
  width: 30px;
  height: 30px;

  path {
    fill: ${theme.elementsColor.lanthanoid.default};
    cursor: pointer;

    &:hover {
      fill: ${theme.elementsColor.actinoid.default};
    }
  }
`;

export default styles;
