import { css } from "styled-components";

const styles = ({ theme }) => css`
  height: 100%;
  display: flex;

  .panel {
    height: 250px;
    width: 250px;
    background-color: ${theme.elementsColor.alkali.default};
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: ${theme.elevation.shadow3(0.4)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:nth-child(1) {
      margin-bottom: 40px;
      padding: 0 20px 40px;
    }
  }

  .curve {
    height: 100%;
    width: 100px;
    object-fit: cover;
  }

  .landscape-curve {
    display: none;
    height: 100px;
    width: 100%;
    object-fit: cover;
  }

  .area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #311b7c;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding: 15px 35px 30px 15px;
  }

  .spellbook-filter {
    margin-top: 20px;
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

  @media only screen and (orientation: portrait) {
    flex-direction: column;

    .curve {
      display: none;
    }
    .landscape-curve {
      display: block;
    }

    .area {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      .panel:nth-child(1) {
        margin-bottom: 0;
        margin-right: 40px;
      }
    }
  }

  @media only screen and ${theme.mediaQueryBreakpoints.laptop} {
    .curve {
      display: none;
    }
  }
`;

export default styles;
