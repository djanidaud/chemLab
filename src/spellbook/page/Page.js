import React from "react";
import styles from "./Page.styles";
import { styled } from "../../styled";
import classNames from "classnames";

function Page({ className, onClick, frontPage, backPage }) {
  return (
    <div className={classNames("page", className)} onClick={onClick}>
      <div className="page-front">{frontPage}</div>
      <div className="page-back">{backPage}</div>
    </div>
  );
}

export default styled(Page)(styles);
