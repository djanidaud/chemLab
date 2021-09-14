import { css } from "styled-components";

const styles = ({ theme, width, height, coverMargin }) => css`
  width: ${width + "px"};
  height: ${height + "px"};
  transform-style: preserve-3d;
  perspective: 2000px;
  position: relative;
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

  .book-cover {
    position: absolute;
    object-fit: cover;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

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

  .page {
    margin-top: ${coverMargin / 2 + "px"};
    margin-left: ${width / 2 + "px"};
    height: calc(100% - ${coverMargin + "px"});
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
    .page {
      color: transparent;

      .plus,
      .arrow-down {
        color: transparent;
      }

      .reaction {
        border-bottom: 1px solid transparent;
      }
    }
  }
`;

export default styles;
