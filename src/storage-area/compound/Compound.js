import React from "react";
import styles from "./Compound.styles";
import { styled } from "../../styled";
import classNames from "classnames";
import { prettyCompound } from "../../utils";
import PotionOne from "../../icons/potion-one/PotionOne";

function Compound({
  className,
  symbol,
  onClick,
  active,
  disabled,
  color,
  onDelete,
}) {
  return (
    <div className={classNames([className, { active, disabled }])}>
      <PotionOne className="potion" color={color} />
      <div
        className="overlay"
        onClick={() => (disabled ? null : onClick(symbol))}
        onTouchStart={() => (disabled ? null : onClick(symbol))}
      >
        <div>{prettyCompound(symbol)}</div>
      </div>
      <span className="delete-btn" onClick={disabled ? null : onDelete} />
    </div>
  );
}

export default styled(Compound)(styles);
