import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./Page.styles";
import { styled } from "../../../styled";
import classNames from "classnames";
import { prettyFormula } from "../../../utils";

function Page({
  className,
  pageNumber,
  onClick,
  frontPage = [],
  backPage = [],
  flipped,
}) {
  const [disabled, setDisabled] = useState(false);
  const timeout = useRef(null);

  useEffect(() => () => clearInterval(timeout.current), []);

  const onFlip = () => {
    onClick(flipped);
    setDisabled(true);
    timeout.current = setTimeout(() => setDisabled(false), 600);
  };

  const displayReaction = useCallback(
    (formula, index) => (
      <div
        className={classNames("reaction", { matched: formula.matched })}
        key={`reaction-${pageNumber}-${index}`}
      >
        {prettyFormula(formula)}
      </div>
    ),
    [pageNumber]
  );

  const content = useMemo(
    () => (
      <>
        <div className="page-front">
          {frontPage && frontPage.map(displayReaction)}
        </div>
        <div className="page-back">
          {backPage && backPage.map(displayReaction)}
        </div>
      </>
    ),
    [frontPage, backPage, displayReaction]
  );

  return (
    <div
      className={classNames("page", className, { disabled })}
      onClick={disabled ? null : onFlip}
    >
      {content}
    </div>
  );
}

export default styled(Page)(styles);
