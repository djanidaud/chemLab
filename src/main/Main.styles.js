import { css } from "styled-components";

const styles = () => css`
  height: 100%;

  .main {
    height: 100%;
    align-items: center;
    padding-left: 30px;
    gap: 15px 30px;
    display: grid;
    grid-template:
      min-content 1fr 100px
      / 1fr min-content;

    grid-template-areas:
      "menu sideMenu"
      "table sideMenu"
      ". sideMenu";

    background-color: #001122;

    .table {
      grid-area: table;
      align-self: center;
      justify-self: center;
    }

    .sideMenu {
      grid-area: sideMenu;
    }

    .menu {
      grid-area: menu;
    }
  }

  @media only screen and (orientation: portrait) {
    .main {
      padding-left: 0;

      .table,
      .menu,
      .craftingArea {
        padding: 30px;
      }

      grid-template:
        min-content 1fr min-content
        / 1fr;
      grid-template-areas:
        "menu"
        "table"
        "craftingArea"
        "sideMenu";
    }
  }
`;

export default styles;
