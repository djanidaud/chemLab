import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSize.large2};
  color: ${theme.textColor.white};
  font-family: ${theme.fontFamily.chemical};
  padding: 30px 0;

  @keyframes newEquationFormula {
    from {
      opacity: 0;
      transform: translate(0, 100px);
    }
    to {
      opacity: 1;
      transform: translate(0);
    }
  }

  animation: newEquationFormula;
  animation-duration: 0.5s;

  .equation-area {
    margin-right: 40px;
  }

  .start-reaction {
    background-color: transparent;
    border: none;
  }

  .reset-reaction {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .plus {
    padding: 0 12px;
  }
`;

export default styles;
