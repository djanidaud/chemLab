import React from "react";
import styles from "./CraftingArea.styles";
import { styled } from "../styled";
import { prettyReaction } from "../utils";
import StartIcon from "../icons/start-icon/StartIcon";
import ResetIcon from "../icons/reset-icon/ResetIcon";

function CraftingArea({ className, currentReaction, onStart, onReset }) {
  return currentReaction.length !== 0 ? (
    <div className={className}>
      <div className="equation-area">{prettyReaction(currentReaction)}</div>

      {currentReaction.length !== 0 && (
        <>
          <button className="start-reaction" onClick={onStart}>
            <StartIcon />
          </button>
          <button className="reset-reaction" onClick={onReset}>
            <ResetIcon />
          </button>
        </>
      )}
    </div>
  ) : (
    ""
  );
}

export default styled(CraftingArea)(styles);
