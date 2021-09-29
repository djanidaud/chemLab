import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./SpellbookPanel.styles";
import { styled } from "../styled";
import Spellbook from "./spellbook/Spellbook";
import Img from "../img/Img";
import ReactionContext from "../context/reactionContext";
import { reactions } from "../reactions";
import { areArraysEqual } from "../utils";
import useCallbackDebounced from "../hooks/useCallbackDebounced";

function SpellbookPanel({ className }) {
  const { currentReaction } = useContext(ReactionContext);
  const [bookState, setBookState] = useState({
    bookReactions: reactions,
    searching: true,
  });

  const querySpellbook = (reactions) => {
    setBookState((bookState) => ({
      ...bookState,
      searching: true,
    }));
    const timeout = setTimeout(
      () =>
        setBookState({
          bookReactions: reactions,
          searching: false,
        }),
      500
    );
    return () => clearTimeout(timeout);
  };

  const filterReactions = useCallback(
    (query) =>
      reactions
        .filter(
          ({ reactants, products }) =>
            matchesFormula(reactants, query[0]) &&
            (query.length === 1 || matchesFormula(products, query[1]))
        )
        .map((reaction) => ({
          ...reaction,
          matched: areArraysEqual(reaction.reactants, currentReaction),
        })),
    [currentReaction]
  );

  const matchesFormula = (arr, subArr) => {
    const upper = arr.map((a) => a.toUpperCase());
    return subArr
      .map((val) => val.trim())
      .every((val) => val === "" || upper.includes(val.toUpperCase()));
  };

  const onChange = useCallbackDebounced(
    (data) => {
      const trimmed = data.target.value.trim();
      const matched = trimmed.split("=").map((e) => e.split("+"));
      querySpellbook(trimmed === "" ? reactions : filterReactions(matched));
    },
    [filterReactions],
    400
  );

  useEffect(
    () =>
      querySpellbook(
        currentReaction.length === 0
          ? reactions
          : filterReactions([currentReaction])
      ),
    [currentReaction, filterReactions]
  );

  const spellbook = useMemo(
    () => (
      <Spellbook
        reactions={bookState.bookReactions}
        searching={bookState.searching}
      />
    ),
    [bookState]
  );

  return (
    <div className={className}>
      {spellbook}
      <div className="spellbook-filter">
        <input onChange={onChange} placeholder="H2 + O2 = H2O" />
        <Img name="search" />
      </div>
    </div>
  );
}

export default styled(memo(SpellbookPanel))(styles);
