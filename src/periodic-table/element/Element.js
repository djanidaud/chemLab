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
      {/*<svg viewBox="0 0 60 60" className="atomicNumber">*/}
      {/*  <text x="7%" y="15%">*/}
      {/*    {atomicNumber}*/}
      {/*  </text>*/}
      {/*</svg>*/}
      {/*<svg viewBox="0 0 30 30" className="symbol" style={{ padding: "20%" }}>*/}
      {/*  <text x="50%" y="50%">*/}
      {/*    {symbol}*/}
      {/*  </text>*/}
      {/*</svg>*/}
      <div>{atomicNumber}</div>
      <div>{symbol}</div>
    </div>
  );
}

export default styled(Element)(styles);
