import React from "react";
import styles from "./SideLabel.styles";
import { styled } from "../../styled";

function SideLabel({ className, value }) {
  return <div className={className}>{value}</div>;
}

export default styled(SideLabel)(styles);
