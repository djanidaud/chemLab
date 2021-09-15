import { css } from "styled-components";

const maxPages = 5;
const coverMargin = 20;
const styles = ({ theme, pageNumber }) => css`
  font-family: ${theme.fontFamily.spellbook};
  transform-style: preserve-3d;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  cursor: pointer;
  transform-origin: left center;
  border-radius: 0 0.5em 0.5em 0;
  padding: 10px;
  font-size: 13px;
  color: ${theme.color.darkblue};
  border: 1px solid rgba(78, 78, 78, 0.4);
  transition: transform 0.5s, color 0.5s;
  z-index: ${1000 - pageNumber};
  background-color: #ffdcb9;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0) 10%
  );

  font-weight: 100;
  
  width: calc((100% - ${coverMargin}px)/2 - ${
  maxPages - (pageNumber % maxPages)
}px);
  
  .page-front::after,
  .page-back::after {
    width: 100%;
    display: inline-block;
    text-align: center;
    position: absolute;
    bottom: 0;
    font-size: 10px;
    font-family: "Times New Roman", sans-serif;
  }

  .page-front::after {
    content: "${pageNumber * 2 + 1}";
  }

  .page-back::after {
    content: "${(pageNumber + 1) * 2}";
  }

  &.flipped .page-front::after {
    content: "";
  }

  @keyframes stopClick {
    from {
      pointer-events: none;
    }
    to {
      pointer-events: none;
    }
  }

  &.active:not(.flipped):hover {
    transform: rotateY(-20deg);
  }

  &.active.flipped:hover {
    transform: rotateY(-160deg);
  }

 // transform: translateZ(0px);
  
  &.flipped {
    transform: rotateY(-179deg);
    z-index: ${pageNumber + 1};
    animation: stopClick;
    animation-duration: 1s;
    width: calc((100% - ${coverMargin}px)/2 - ${pageNumber % maxPages}px);

    &:not(.active) {
      color: transparent;

      .reaction:nth-child(1):not(:only-child) {
        border-bottom: 1px solid transparent;
      }
    }
  }

  // Children styles
  .page-inner {
    width: 100%;
    height: 100%;

    transform-style: preserve-3d;
    transform-origin: left center;
  }

  .page-front,
  .page-back {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
  }

  .page-back {
    transform: rotateY(180deg);
  }

  // Reaction styles
  .reaction {
    font-weight: 600;
    width: 100%;
    text-align: center;
    transition: border-bottom 0.5s;

    .plus,
    .arrow-down {
      padding: 0 2px;
      font-size: ${theme.fontSize.small1}
      font-weight: 400;
    }
  }

  &.active {
    .plus,
    .arrow-down {
      color: #5a5a5a;
    }
  }

  .reaction:nth-child(1):not(:only-child) {
    width: auto;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(90, 90, 90, 0.25);
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
