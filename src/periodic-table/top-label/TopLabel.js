import React from "react";
import styles from "./TopLabel.styles";
import { styled } from "../../styled";

function TopLabel({ className, number, group, id }) {
  return (
    <div className={className} id={id}>
      <div className="number">{number}</div>
      <div className="group">{group}</div>
    </div>
  );
}

export default styled(TopLabel)(styles);
