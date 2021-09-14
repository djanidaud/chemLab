import React from "react";
import styles from "./Compound.styles";
import { styled } from "../../styled";
import classNames from "classnames";
import { prettyCompound } from "../../utils";
import PotionOne from "../../icons/potion-one/PotionOne";

function Compound({ className, symbol, onClick, active, disabled, color }) {
  return (
    <div
      className={classNames([className, { active, disabled }])}
      onClick={() => onClick(symbol)}
    >
      <PotionOne className="potion" color={color} />
      <div className="overlay">
        <div>{prettyCompound(symbol)}</div>
      </div>
    </div>
  );
}

export default styled(Compound)(styles);
