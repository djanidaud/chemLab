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

  .main-elements {
    width: 100%;
    display: grid;
    grid-template-columns: 0.4fr repeat(18, 1fr);
    gap: 4px;

    & > div:nth-child(1) {
      grid-column: 2;
    }

    & > div:nth-child(2) {
      grid-column: 19;
    }

    & > div:nth-child(6),
    & > div:nth-child(15) {
      grid-column: 14;
    }
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
