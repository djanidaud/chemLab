import { css } from "styled-components";

const styles = ({ theme }) => css`
  font-family: ${theme.fontFamily.chemical};
  font-size: ${theme.fontSize.medium3};
  color: ${theme.textColor.white};
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  background-origin: content-box;
  white-space: nowrap;
  user-select: none;
  text-overflow: ellipsis;
  position: relative;
  text-shadow: ${theme.elevation.shadow1(1)};
  opacity: 0;
  animation: new-item-animation 0.5s ease-in forwards;
  box-shadow: ${theme.elevation.shadow2(0.3)};
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 17, 34, 0.49);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .potion {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &.active:not(.disabled) .overlay {
    background-color: rgba(238, 1, 107, 0.68);
  }

  &:hover:not(.active, :active, .disabled) {
    box-shadow: ${theme.elevation.shadow2(0.5)};
    z-index: 1000;
  }

  &.disabled {
    color: transparent;
    text-shadow: none;
    background-image: none;
    cursor: default;
  }

  @keyframes new-item-animation {
    from {
      opacity: 0;
      transform: scale(0.9);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export default styles;
