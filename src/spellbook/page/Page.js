import React, { useState } from "react";
import styles from "./Page.styles";
import { styled } from "../../styled";
import classNames from "classnames";
import { prettyFormula } from "../../utils";

function Page({
  className,
  pageNumber,
  onClick,
  frontPage = [],
  backPage = [],
}) {
  const [disabled, setDisabled] = useState(false);
  const onFlip = () => {
    onClick();
    setDisabled(true);
    setTimeout(() => setDisabled(false), 600);
  };

  const displayReaction = (formula, index) => (
    <div
      className={classNames("reaction", { matched: formula.matched })}
      key={`reaction-${pageNumber}-${index}`}
    >
      {prettyFormula(formula)}
    </div>
  );

  return (
    <div
      className={classNames("page", className, { disabled })}
      onClick={disabled ? null : onFlip}
    >
      <div className="page-front">
        {frontPage && frontPage.map(displayReaction)}
      </div>
      <div className="page-back">
        {backPage && backPage.map(displayReaction)}
      </div>
    </div>
  );
}

export default styled(Page)(styles);
