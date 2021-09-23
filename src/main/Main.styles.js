import { css } from "styled-components";

const styles = ({ theme }) => css`
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

  height: 100%;
  background-color: #001122;
  //background-image: url("./back.svg");
  //background-repeat: no-repeat;
  //background-size: cover;

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

  @media only screen and (orientation: portrait) {
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
`;

export default styles;
