import { css } from "styled-components";

const styles = ({ theme }) => css`
  .spellbook-filter {
    margin-top: auto;
    margin-bottom: 15px;
    box-shadow: ${theme.elevation.shadow3(0.4)};
    position: relative;

    input {
      font-size: ${theme.fontSize.small3};
      width: 180px;
      padding: 5px 30px 5px 10px;
      height: 100%;
      border-radius: 5px;
      background-color: transparent;
      color: white;
      box-sizing: border-box;
      border: 2px solid ${theme.elementsColor.otherNonMetals.hover};
      z-index: 1;
      position: relative;

      &:focus {
        outline: none;
      }
    }

    .search {
      width: 15px;
      height: calc(100% - 15px);
      position: absolute;
      z-index: 0;
      right: 7.5px;
      top: 7.5px;
    }
  }
`;

export default styles;
