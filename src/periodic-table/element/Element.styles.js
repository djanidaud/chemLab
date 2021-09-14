import { css } from "styled-components";

const styles = ({ theme }) => {
  const groupStyles = (group) => `
    &.${group} {
      background-color: ${theme.elementsColor[group].default};
      
      &:hover:not(.disabled) {
        background-color: ${theme.elementsColor[group].hover};
      }
    }
   `;

  return css`
    cursor: pointer;
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    border-radius: 4px;
    color: ${theme.textColor.white};
    box-shadow: ${theme.elevation.shadow3(0.5)};
    position: relative;

    .atomicNumber,
    .symbol {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;

      text {
        fill: ${theme.textColor.white};
        dominant-baseline: central;
      }
    }

    .atomicNumber text {
      font-size: ${theme.fontSize.small2};
    }

    .symbol text {
      font-weight: 500;
      text-anchor: middle;
      font-size: ${theme.fontSize.medium2};
      text-shadow: ${theme.elevation.shadow1()};
    }

    div {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    div:nth-child(1) {
      padding: 5%;
      font-size: 0.8vw;
    }

    div:nth-child(2) {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: min(1.3vw, 25px);
    }

    &.disabled {
      color: transparent;
      cursor: default;

      & > * {
        visibility: hidden;
      }
    }

    &.active:not(.disabled),
    &:active:not(.disabled) {
      background-color: #ee016b !important;
      border-radius: 6px;
      box-shadow: inset 0 2px 2px hsla(334, 100%, 13%, 0.6), 0 3px 0 #ff3c91;
      transform: translateY(2px);
      padding-bottom: calc(100% - 3.5px);
    }

    &:hover:not(:active, .active, .disabled) {
      box-shadow: ${theme.elevation.shadow4(0.7)};
      z-index: 1000;
    }

    ${groupStyles("alkali")};
    ${groupStyles("alkalineEarth")};
    ${groupStyles("transition")};
    ${groupStyles("otherNonMetals")};
    ${groupStyles("otherMetals")};
    ${groupStyles("halogens")};
    ${groupStyles("inert")};
    ${groupStyles("lanthanoid")};
    ${groupStyles("actinoid")};

    @media only screen and ${theme.mediaQueryBreakpoints.laptop} {
      .atomicNumber {
        display: none;
      }
    }

    @media only screen and (orientation: portrait) {
      .atomicNumber {
        display: none;
      }
    }
  `;
};

export default styles;
