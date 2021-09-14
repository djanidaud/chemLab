import React from "react";
import styles from "./Element.styles";
import { styled } from "../../styled";
import classNames from "classnames";

const getClass = (groupBlock) => {
  switch (groupBlock) {
    case "Неметал":
      return "otherNonMetals";
    case "Благороден газ":
      return "inert";
    case "Алкан":
      return "alkali";
    case "Алкалоземен":
      return "alkalineEarth";
    case "Халоген":
      return "halogens";
    case "Преходен метал":
      return "transition";
    case "Актиноид":
      return "actinoid";
    case "Лантаноид":
      return "lanthanoid";
    default:
      return "otherMetals";
  }
};

function Element({
  className,
  symbol,
  atomicNumber,
  groupBlock,
  onClick,
  active,
  disabled,
  molecule,
}) {
  return (
    <div
      className={classNames([
        className,
        getClass(groupBlock),
        { active, disabled },
        "element",
      ])}
      onClick={() => (disabled ? null : onClick(molecule))}
    >
      <div className="atomicNumber">{atomicNumber}</div>
      <div className="symbol">{symbol}</div>
    </div>
  );
}

export default styled(Element)(styles);
