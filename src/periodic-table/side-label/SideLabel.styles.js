import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.textColor.white};
  font-weight: 100;

  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

export default styles;
