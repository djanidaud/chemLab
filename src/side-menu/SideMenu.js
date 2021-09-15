import React, { useEffect, useState } from "react";
import styles from "./SideMenu.styles";
import { styled } from "../styled";
import Spellbook from "../spellbook/Spellbook";
import { reactions } from "../reactions";
import useCallbackDebounced from "../hooks/useCallbackDebounced";
import StorageArea from "../storage-area/StorageArea";

function SideMenu({
  className,
  compounds,
  onCompoundClick,
  currentReaction,
  possibleReactionActors,
}) {
  const [bookState, setBookState] = useState({
    bookReactions: reactions,
    searching: false,
    timeout: null,
  });

  const querySpellbook = (reactions) => {
    if (bookState.timeout) clearTimeout(bookState.timeout);
    setBookState({
      ...bookState,
      searching: true,
      timeout: setTimeout(
        () =>
          setBookState({
            bookReactions: reactions,
            searching: false,
          }),
        500
      ),
    });
  };

  const matchesFormula = (arr, subArr) => {
    const upper = arr.map((a) => a.toUpperCase());
    return subArr.every((val) => {
      const trimmed = val.trim();
      return trimmed === "" || upper.includes(trimmed.toUpperCase());
    });
  };

  const filerReactions = (query) =>
    reactions.filter(
      ({ products, reacts }) =>
        matchesFormula(reacts, query[0]) &&
        (query.length === 1 || matchesFormula(products, query[1]))
    );

  const onChange = useCallbackDebounced(
    (data) => {
      const trimmed = data.target.value.trim();
      const matched = trimmed.split("=").map((e) => e.split("+"));
      querySpellbook(trimmed === "" ? reactions : filerReactions(matched));
    },
    [],
    400
  );

  useEffect(
    () =>
      querySpellbook(
        currentReaction.length === 0
          ? reactions
          : filerReactions([currentReaction])
      ),
    [currentReaction]
  );

  return (
    <div className={className}>
      <img src="/images/vertical-curve.svg" alt="" className="vertical-curve" />
      <img
        src="/images/horizontal-curve.svg"
        alt=""
        className="horizontal-curve"
      />
      <div className="area">
        <div className="panel">
          <Spellbook
            coverMargin={20}
            width={300}
            height={205}
            reactions={bookState.bookReactions}
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
