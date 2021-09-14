import { css } from "styled-components";

const styles = ({ theme }) => css`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  .carousel-section {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dots {
    width: 100%;
    position: absolute;
    bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s;
    opacity: 0;

    .dot {
      width: 12px;
      height: 12px;
      fill: gray;

      circle {
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
      }

      &.active {
        fill: white;
      }
    }
  }

  .left-arrow,
  .right-arrow {
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    opacity: 0;
    z-index: 1000;
    transition: opacity 0.5s;
    cursor: pointer;
    fill: gray;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));

    &:hover {
      fill: white;
    }
  }

  .left-arrow {
    left: 0;
  }

  .right-arrow {
    right: 0;
  }

  &:hover {
    .left-arrow,
    .right-arrow,
    .dots {
      opacity: 1;
    }
  }
`;

export default styles;
