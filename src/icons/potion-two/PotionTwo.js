import React from "react";
import styles from "./PotionTwo.styles";
import { styled } from "../styled";
import classNames from "classnames";

function PotionTwo({ className }) {
  return <div className={classNames([className])}>icon</div>;
}

export default styled(PotionTwo)(styles);
