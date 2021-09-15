import React from "react";
import styles from "./Page.styles";
import { styled } from "../../styled";

function Page({ className, onClick, frontPage, backPage }) {
  return (
    <div className={className} onClick={onClick}>
      <div className="page-inner">
        <div className="page-front">{frontPage}</div>
        <div className="page-back">{backPage}</div>
      </div>
    </div>
  );
}

export default styled(Page)(styles);
