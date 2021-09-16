import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  height: 100%;

  .vertical-curve {
    height: 100%;
    width: 100px;
    object-fit: cover;
  }

  .horizontal-curve {
    height: 100px;
    width: 100%;
    object-fit: cover;
    display: none;
  }

  .area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #311b7c;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 15px 35px 30px 15px;

    .panel {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      height: 250px;
      width: 250px;
      background-color: ${theme.elementsColor.alkali.default};
      box-shadow: ${theme.elevation.shadow3(0.4)};
      box-sizing: border-box;
      border-radius: 10px;
    }

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
  }

  @media only screen and (orientation: portrait) {
    flex-direction: column;

    .vertical-curve {
      display: none;
    }
    .horizontal-curve {
      display: block;
    }

    .area {
      flex-direction: row;
    }
  }

  @media only screen and ${theme.mediaQueryBreakpoints.laptop} {
    .vertical-curve {
      display: none;
    }
  }
`;

export default styles;
