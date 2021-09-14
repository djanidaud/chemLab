import React, { useEffect, useState } from "react";
import styles from "./SideMenu.styles";
import { styled } from "../styled";
import Spellbook from "../spellbook/Spellbook";
import { reactions } from "../reactions";
import useCallbackDebounced from "../hooks/useCallbackDebounced";
import StorageArea from "../storage-area/StorageArea";
import CraftingArea from "../crafting-area/CraftingArea";

function SideMenu({
  className,
  compounds,
  onCompoundClick,
  currentReaction,
  possibleReactionActors,
}) {
  const [bookState, setBookState] = useState({
    arr: reactions,
    searching: false,
    timeout: null,
  });

  const matchesFormula = (arr, subArr) => {
    const upper = arr.map((a) => a.toUpperCase());
    return subArr.every((val) => {
      const trimmed = val.trim();
      return trimmed === "" || upper.includes(trimmed.toUpperCase());
    });
  };

  const filterCondition =
    (matched) =>
    ({ products, reacts }) =>
      matchesFormula(reacts, matched[0]) &&
      (matched.length === 1 || matchesFormula(products, matched[1]));

  const querySpellbook = (reactions) => {
    if (bookState.timeout) clearTimeout(bookState.timeout);
    setBookState({
      ...bookState,
      searching: true,
      timeout: setTimeout(() => {
        setBookState({
          arr: reactions,
          searching: false,
        });
      }, 500),
    });
  };

  const onChange = useCallbackDebounced(
    (data) => {
      const trimmed = data.target.value.trim();
      const matched = trimmed.split("=").map((e) => e.split("+"));

      querySpellbook(
        trimmed === "" ? reactions : reactions.filter(filterCondition(matched))
      );
    },
    [],
    400
  );

  useEffect(
    () =>
      querySpellbook(
        currentReaction.length === 0
          ? reactions
          : reactions.filter(filterCondition([currentReaction]))
      ),
    [currentReaction]
  );

  return (
    <div className={className}>
      <img src="/images/dd.svg" alt="" className="curve" />
      <img
        src="/images/landscape-curve.svg"
        alt=""
        className="landscape-curve"
      />
      <div className="area">
        <div className="panel">
          <Spellbook
            coverMargin={20}
            width={300}
            height={205}
            reactions={bookState.arr}
            searching={bookState.searching}
          />
          <div className="spellbook-filter">
            <input onChange={onChange} placeholder="H2 + O2 = H2O" />
            <img src="/images/search.svg" alt="" className="search" />
          </div>
        </div>
        <StorageArea
          className="panel"
          onCompoundClick={onCompoundClick}
          compounds={compounds}
          currentReaction={currentReaction}
          possibleReactionActors={possibleReactionActors}
        />
      </div>
    </div>
  );
}

export default styled(SideMenu)(styles);
