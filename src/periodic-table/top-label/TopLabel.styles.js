import { css } from "styled-components";

const styles = ({ theme }) => css`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${theme.textColor.white};
  font-weight: 300;

  @media only screen and ${theme.mediaQueryBreakpoints.mobile} {
    visibility: hidden;
  }

  .number {
    margin-bottom: 3px;
  }
`;

export default styles;
