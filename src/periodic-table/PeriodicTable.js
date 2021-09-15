import React from "react";
import styles from "./PeriodicTable.styles";
import { styled } from "../styled";
import {
  TableElements,
  TableLayout,
  ELEMENT,
  TOP_LABEL,
  SIDE_LABEL,
} from "./PeriodicTable.utils";
import Element from "./element/Element";
import TopLabel from "./top-label/TopLabel";
import SideLabel from "./side-label/SideLabel";
import { applyCorrectNumberOfAtoms, range } from "../utils";

function PeriodicTable({
  className,
  onElementClick,
  currentReaction,
  possibleReactionActors,
}) {
  const layoutMapper = ({ type, value }, index) =>
    ({
      [TOP_LABEL]: () => <TopLabel {...value} key={type + index} />,
      [SIDE_LABEL]: () => <SideLabel value={value} key={type + index} />,
      [ELEMENT]: () => renderElement(value),
    }[type]());

  const renderExtraElements = (elementId) =>
    range(14)
      .map((i) => i + elementId)
      .map(renderElement);

  const renderElement = (id) => {
    const props = TableElements[id];
    const molecule = applyCorrectNumberOfAtoms(props.symbol);
    return (
      <Element
        key={"element-" + id}
        molecule={molecule}
        active={currentReaction.includes(molecule)}
        disabled={
          currentReaction.length !== 0 && !possibleReactionActors.has(molecule)
        }
        onClick={onElementClick}
        {...props}
      />
    );
  };

  return (
    <div className={className}>
      <div className="table">{TableLayout.map(layoutMapper)}</div>
      <div className="extraElements">
        {renderExtraElements(57)}
        {renderExtraElements(89)}
      </div>
    </div>
  );
}

export default styled(PeriodicTable)(styles);
