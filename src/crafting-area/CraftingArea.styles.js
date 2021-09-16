import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: ${theme.fontSize.large1};
  color: ${theme.textColor.white};
  font-family: ${theme.fontFamily.chemical};
  padding: 15px 0;
  height: fit-content !important;

  @keyframes shake {
    5%,
    15%,
    25%,
    35%,
    45% {
      transform: translate(0, -1.5px);
    }
    10%,
    20%,
    30%,
    40% {
      transform: translate(0, 1.5px);
    }

    50%,
    100% {
      transform: translate(0, 0);
    }
  }

  .equation-area {
    .plus {
      padding: 0 12px;
    }
  }

  .actions {
    margin-top: 10px;

    .start-reaction {
      background-color: transparent;
      border: none;

      &.disabled path {
        fill: grey;
      }

      &:not(.disabled) {
        animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.5s both
          infinite;

        path {
          fill: ${theme.elementsColor.lanthanoid.default};
          cursor: pointer;

          &:hover {
            fill: ${theme.elementsColor.actinoid.default};
          }
        }
      }
    }

    .reset-reaction {
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: transform 0.5s;

      //&:active {
      //  transform: rotate(-90deg);
      //}
    }
  }
`;

export default styles;
