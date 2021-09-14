import { css } from "styled-components";

const styles = ({ theme }) => css`
  display: flex;
  align-items: center;
  user-select: none;
  color: ${theme.textColor.white};
  padding: 45px 0;
  font-family: ${theme.fontFamily.chemical};

  .logo {
    font-size: ${theme.fontSize.large1};
    margin-right: 20px;
    letter-spacing: 1.5px;
    font-weight: 500;
    position: relative;
    cursor: pointer;

    &::after {
      width: 80px;
      height: 1px;
      background-color: ${theme.elementsColor.alkalineEarth.default};
      content: "";
      display: block;
    }

    &::before {
      width: 40px;
      height: 1px;
      left: 20px;
      background-color: ${theme.elementsColor.alkali.default};
      content: "";
      display: block;
      position: absolute;
      bottom: -5px;
    }
  }

  a {
    text-decoration: none;
    color: ${theme.textColor.white};
    font-size: ${theme.fontSize.medium2};
    margin-right: 20px;
    margin-left: 10px;
    border-bottom: 2px solid transparent;
  }

  .help:hover {
    border-bottom: 2px solid ${theme.elementsColor.alkalineEarth.hover};
  }

  .about:hover {
    border-bottom: 2px solid ${theme.elementsColor.halogens.hover};
  }

  img {
    width: 40px;
    height: 40px;
    margin-left: -20px;
    margin-right: 20px;
    user-select: none;
    cursor: pointer;
  }
`;

export default styles;
