import React from "react";
import { r, reactions } from "./reactions";
import balance from "reaction-balancer";
const elementsWithTwoAtoms = ["H", "N", "O", "F", "Cl", "Br", "I", "At"];

export const applyCorrectNumberOfAtoms = (element) =>
  elementsWithTwoAtoms.includes(element) ? element + 2 : element;

export const prettyCompound = (name, j) =>
  Array.from(name).map((c, index) =>
    isNaN(c) ? c : <sub key={`char-${j}-${index}`}>{c}</sub>
  );

export const prettyReaction = (reaction, coefsMap = null) =>
  reaction.map((val, index) => {
    const coef = coefsMap ? coefsMap.get(val) : 1;

    return (
      <React.Fragment key={"prettyReaction-" + index}>
        {index !== 0 && <span className="plus">+</span>}
        {coefsMap && coef !== 1 && <span className="coef">{coef}</span>}
        <span className="pretty-compound">{prettyCompound(val, index)} </span>
      </React.Fragment>
    );
  });

export const prettyFormula = ({ reactants, products, coeffs }) => {
  const coeffsMap = new Map(coeffs);
  return (
    <>
      {prettyReaction(reactants, coeffsMap)}
      <div className="arrow-down">↓</div>
      {prettyReaction(products, coeffsMap)}
    </>
  );
};

export const includesAll = (arr, subArr) =>
  subArr.every((val) => arr.includes(val));

export const areArraysEqual = (arr1, arr2) =>
  arr1.length === arr2.length &&
  includesAll(arr2, arr1) &&
  includesAll(arr1, arr2);

export const getActors = (currentReaction) =>
  new Set([
    ...reactions.reduce((acc, { reactants }) => {
      if (includesAll(reactants, currentReaction)) acc.push(...reactants);
      return acc;
    }, []),
    ...currentReaction,
  ]);

export const range = (length) => Array.from(Array(length).keys());

export const chunks = (number) => (acc, val, index) => {
  if (index % number === 0) acc.push([val]);
  else acc[acc.length - 1].push(val);
  return acc;
};
