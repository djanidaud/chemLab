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
import { applyCorrectNumberOfAtoms } from "../utils";

function PeriodicTable({
  className,
  onElementClick,
  currentReaction,
  possibleReactionActors,
}) {
  const layoutMapper = ({ type, value }, index) => {
    switch (type) {
      case ELEMENT:
        const element = TableElements[value];
        return renderElement(
          "element-" + value,
          applyCorrectNumberOfAtoms(element.symbol),
          element
        );
      case TOP_LABEL:
        return <TopLabel {...value} key={"topLabel-" + index} />;
      case SIDE_LABEL:
        return <SideLabel value={value} key={"sideLabel-" + index} />;
      default:
        return <div key={"empty-" + index} />;
    }
  };

  const renderExtraElements = (elementId) =>
    Array.from(Array(14).keys()).map((i) => {
      const element = TableElements[elementId + i];

      return renderElement("element-" + elementId + i, element.symbol, element);
    });

  const renderElement = (key, molecule, props) => (
    <Element
      key={key}
      molecule={molecule}
      active={currentReaction.includes(molecule)}
      disabled={
        currentReaction.length !== 0 && !possibleReactionActors.has(molecule)
      }
      onClick={onElementClick}
      {...props}
    />
  );

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
