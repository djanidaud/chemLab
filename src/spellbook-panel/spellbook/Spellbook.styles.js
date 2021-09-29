import { css } from "styled-components";
import { spellBookWidth, spellBookHeight } from "./Spellbook.utils";

const styles = ({ theme }) => css`
  width: ${spellBookWidth + "px"};
  height: ${spellBookHeight + "px"};
  transform-style: preserve-3d;
  box-sizing: border-box;
  perspective: 2000px;
  position: absolute;
  bottom: 62px;
  user-select: none;

  border-radius: 0.5em;
  background-color: rgb(90, 40, 120);
  box-shadow: ${theme.elevation.shadow4(0.6)};
  background-image: linear-gradient(
    90deg,
    rgba(90, 40, 120, 1) 0%,
    rgba(55, 30, 70, 1) 50%,
    rgba(90, 40, 120, 1) 100%
  );

  &::before {
    content: "";
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    left: calc(50% - 15px);
    width: 30px;
    height: calc(100%);
    background-color: rgba(55, 30, 70, 1);
    box-shadow: inset 0 1px 2px 0 rgb(33, 13, 69);
    border-radius: 0 0 3px 3px;
  }

  &.searching {
    .page {
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-play-state: initial;
    }
  }

  &.searching,
  &.hidden {
    * {
      color: transparent;
    }
    .reaction:nth-child(1):not(:only-child) {
      border-bottom: 1px solid transparent !important;
    }
  }
`;

export default styles;
