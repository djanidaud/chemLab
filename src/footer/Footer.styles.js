import { css } from "styled-components";

const styles = ({ theme }) => css`
  width: 100%;
  background-color: #001122;
  position: relative;
  user-select: none;
  overflow: hidden;

  .footer-body {
    position: relative;
    height: 300px;
    width: 100%;
    background-color: #291a6d;
    display: flex;
    align-items: center;
    justify-content: center;

    .footer-options {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: ${theme.fontFamily.heading};
      font-weight: 600;
      font-size: ${theme.fontSize.medium3};
      position: relative;

      background-color: rgba(41, 26, 109, 0.91);
      z-index: 1000;
      padding: 10px 15px;
      top: -18%;
      text-shadow: ${theme.elevation.shadow1(0.6)}
      border-radius: 10px;
      width: fit-content;
      

      .bullet {
        padding: 0 10px;
      }

      .copyright {
        color: #989898;
        margin-top: 8px;
        font-size: ${theme.fontSize.medium2};
      }
    }
  }

  .divider {
    width: 100%;
    display: flex;
    background-color: #001122;
    position: relative;

    .divider1 {
      width: 100%;
      position: absolute;
      z-index: 5;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .divider2 {
      height: 100%;
      width: calc(100% - 400px);
      z-index: 10;
    }

    .side-menu-bottom {
      position: absolute;
      right: 0;
      width: 400px;
      height: 50%;
      background-color: #5220ba;
    }
  }

  .footer_slope {
    width: 100%;
    position: relative;
    bottom: -10px;
  }

  .chemist {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    z-index: 10;
    user-select: none;
    pointer-events: none;
    
    height: 87%;
    margin-right: -90px;
    margin-bottom: -70px;
  }
  
  .chemists {
    position: absolute;
    pointer-events: none;
    bottom: 0;
    left: 0;
    height: 75%;
    user-select: none;
  }

  .potions {
    pointer-events: none;
    position: absolute;
    bottom: 0;
    height: 24%;
    z-index: 10;
    user-select: none;
    left: 24%;
  }
  
  @media only screen and (orientation: portrait) {
   .divider  {
     display: none;
   }
  }
`;

export default styles;
