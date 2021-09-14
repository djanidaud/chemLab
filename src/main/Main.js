import React, { useState } from "react";
import styles from "./Main.styles";
import { styled } from "../styled";
import PeriodicTable from "../periodic-table/PeriodicTable";
import Navbar from "../navbar/Navbar";
import CraftingArea from "../crafting-area/CraftingArea";
import { reactions } from "../reactions";
import { areArraysEqual, getActors } from "../utils";
import SideMenu from "../side-menu/SideMenu";

function Main({ className }) {
  const [currentReaction, setCurrentReaction] = useState([]);
  const [compounds, setCompounds] = useState(["H2O", "HCl"]);
  const possibleReactionActors = getActors(currentReaction);

  const getResult = () =>
    reactions.reduce(
      (acc, { reacts, products, coefs }) =>
        areArraysEqual(reacts, currentReaction) ? [...acc, ...products] : acc,
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

  return (
    <div className={className}>
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
      />
      <CraftingArea
        className="craftingArea"
        currentReaction={currentReaction}
        onStart={onStart}
        onReset={() => setCurrentReaction([])}
      />
    </div>
  );
}

export default styled(Main)(styles);
