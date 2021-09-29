import React, { memo, useContext, useEffect, useState } from "react";
import styles from "./CraftingArea.styles";
import { styled } from "../styled";
import { areArraysEqual, prettyReaction } from "../utils";
import StartIcon from "../icons/start-icon/StartIcon";
import ResetIcon from "../icons/reset-icon/ResetIcon";
import { reactions } from "../reactions";
import classNames from "classnames";
import ReactionContext from "../context/reactionContext";

function CraftingArea({ className }) {
  const [disabled, setDisabled] = useState(true);
  const { currentReaction, onStart, onReset } = useContext(ReactionContext);

  useEffect(
    () =>
      setDisabled(
        currentReaction.length === 0 ||
          !reactions.some(({ reactants }) =>
            areArraysEqual(reactants, currentReaction)
          )
      ),
    [currentReaction]
  );

  return currentReaction.length !== 0 ? (
    <div className={className}>
      <div className="equation-area">{prettyReaction(currentReaction)}</div>
      <div className="actions">
        <button
          className={classNames("start-reaction", { disabled })}
          onClick={disabled ? null : onStart}
        >
          <StartIcon />
        </button>
        <button className="reset-reaction" onClick={onReset}>
          <ResetIcon />
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default styled(memo(CraftingArea))(styles);
