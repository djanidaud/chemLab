import { css } from "styled-components";

const styles = ({ theme }) => css`
  font-family: ${theme.fontFamily.chemical};
  color: ${theme.color.darkblue};
  font-size: ${theme.fontSize.small2};
  user-select: none;
  width: min(100%, 1250px);
  min-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  box-sizing: border-box;

  .table {
    width: 100%;
    display: grid;
    grid-template-columns: 0.4fr repeat(18, 1fr);
    gap: 4px;
  }

  .extraElements {
    width: 100%;
    display: grid;
    grid-template-columns: 0.4fr repeat(18, 1fr);
    gap: 4px;
    margin-top: 15px;

    & > div:nth-child(1),
    & > div:nth-child(15) {
      grid-column: 4;
    }
  }
`;

export default styles;
