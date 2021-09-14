import { css } from "styled-components";

const styles = ({ theme }) => css`
  .potion-section {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export default styles;
