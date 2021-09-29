import React, { useCallback, useMemo, useState } from "react";
import { areArraysEqual, getActors } from "../utils";
import { reactions } from "../reactions";

const ReactionContext = React.createContext({});

export const ReactionProvider = ({ children }) => {
  const [currentReaction, setCurrentReaction] = useState([]);
  const [compounds, setCompounds] = useState(["H2O", "HCl"]);

  const possibleReactionActors = useMemo(
    () => getActors(currentReaction),
    [currentReaction]
  );

  const reset = useCallback(() => setCurrentReaction([]), []);

  const onStart = useCallback(() => {
    if (currentReaction.length === 0) return;
    setCompounds((compounds) => {
      reactions
        .filter(({ reactants }) => areArraysEqual(reactants, currentReaction))
        .forEach(({ products }) => compounds.push(...products));
      return compounds;
    });
    reset();
  }, [currentReaction, reset]);

  const onElementClick = useCallback(
    (element) =>
      setCurrentReaction((current) =>
        current.includes(element)
          ? current.filter((e) => e !== element)
          : [...current, element]
      ),
    []
  );

  const onCompoundDelete = useCallback(
    (index) =>
      setCompounds((compounds) => compounds.filter((_, i) => i !== index)),
    []
  );

  return (
    <ReactionContext.Provider
      value={{
        currentReaction,
        compounds,
        possibleReactionActors,
        onElementClick,
        onStart,
        onReset: reset,
        onCompoundDelete,
      }}
    >
      {children}
    </ReactionContext.Provider>
  );
};

export default ReactionContext;
