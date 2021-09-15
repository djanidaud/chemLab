import { css } from "styled-components";
import { maxPages, coverMargin } from "../Spellbook.utils";

const styles = ({ theme, pageNumber }) => css`
  font-family: ${theme.fontFamily.spellbook};
  font-size: 13px;
  color: ${theme.color.darkblue};
  background-color: #ffdcb9;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0) 10%
  );

  box-sizing: border-box;
  border-radius: 0 0.5em 0.5em 0;
  border: 1px solid rgba(78, 78, 78, 0.4);
  padding: 10px;
  margin-top: ${coverMargin / 2 + "px"};
  margin-left: 50%;
  height: calc(100% - ${coverMargin + "px"});
  width: calc(
    (100% - ${coverMargin}px) / 2 - ${maxPages - (pageNumber % maxPages)}px
  );

  cursor: pointer;
  position: absolute;
  z-index: ${1000 - pageNumber};
  top: 0;

  transition: transform 0.5s, color 0.5s;
  transform-origin: left center;
  transform-style: preserve-3d;

  &.flipped {
    transform: rotateY(-179deg);
    z-index: ${pageNumber + 1};
    width: calc((100% - ${coverMargin}px) / 2 - ${pageNumber % maxPages}px);

    &:not(.active) {
      color: transparent;

      .reaction:nth-child(1):not(:only-child) {
        border-bottom: 1px solid transparent;
      }
    }

    .page-front::after {
      content: "";
    }
  }

  &.active:not(.flipped):hover {
    transform: rotateY(-20deg);
  }

  &.active.flipped:hover {
    transform: rotateY(-160deg);
  }

  &.disabled {
    pointer-events: none;
  }

  .page-front,
  .page-back {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .page-back {
    transform: rotateY(180deg);
  }

  .reaction {
    font-weight: 600;
    text-align: center;
    transition: border-bottom 0.5s;

    .plus,
    .arrow-down {
      padding: 0 2px;
      font-size: ${theme.fontSize.small1};
      font-weight: 100;
    }
  }

  .reaction:nth-child(1):not(:only-child) {
    width: auto;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(90, 90, 90, 0.25);
  }

  .page-front::after,
  .page-back::after {
    width: 100%;
    display: inline-block;
    text-align: center;
    position: absolute;
    bottom: 5px;
    font-size: 10px;
    font-family: "Times New Roman", sans-serif;
  }

  .page-front::after {
    content: "${pageNumber * 2 + 1}";
  }

  .page-back::after {
    content: "${(pageNumber + 1) * 2}";
  }

  ${animate(pageNumber % 7)};
`;

const animate = (index) =>
  index % 6 === 0
    ? ``
    : `animation-name: search${index};

       @keyframes search${index} {
         from {
            transform: rotateY(${0 + "deg"});
         }

         to {
           transform: rotateY(${-(index * 120) + "deg"});
         }
      }`;

export default styles;
