import React, { useState } from "react";
import styles from "./Main.styles";
import { styled } from "../styled";
import PeriodicTable from "../periodic-table/PeriodicTable";
import Navbar from "../navbar/Navbar";
import { reactions } from "../reactions";
import { areArraysEqual, getActors } from "../utils";
import SideMenu from "../side-menu/SideMenu";

function Main({ className }) {
  const [currentReaction, setCurrentReaction] = useState([]);
  const [compounds, setCompounds] = useState(["H2O", "HCl"]);
  const possibleReactionActors = getActors(currentReaction);

  const getResult = () =>
    reactions.reduce(
      (acc, { reactants, products }) =>
        areArraysEqual(reactants, currentReaction)
          ? [...acc, ...products]
          : acc,
      []
    );

  const onStart = () => {
    if (currentReaction.length === 0) return;
    setCompounds([...compounds, ...getResult()]);
    setCurrentReaction([]);
  };

  const onElementClick = (element) => {
    setCurrentReaction(
      currentReaction.includes(element)
        ? currentReaction.filter((e) => e !== element)
        : [...currentReaction, element]
    );
  };

  const onCompoundDelete = (index) =>
    setCompounds((compounds) => compounds.filter((_, i) => i !== index));

  return (
    <div className={className}>
      <div className="main">
        <Navbar className="menu" />
        <PeriodicTable
          className="table"
          onElementClick={onElementClick}
          currentReaction={currentReaction}
          possibleReactionActors={possibleReactionActors}
        />
        <SideMenu
          className="sideMenu"
          compounds={compounds}
          currentReaction={currentReaction}
          onCompoundClick={onElementClick}
          possibleReactionActors={possibleReactionActors}
          onStart={onStart}
          onReset={() => setCurrentReaction([])}
          onCompoundDelete={onCompoundDelete}
        />
      </div>
      {/*<div className="purple-divider" />*/}
      {/*<div className="help-section"></div>*/}
    </div>
  );
}

export default styled(Main)(styles);
