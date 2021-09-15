import React from "react";
import { reactions } from "./reactions";

const elementsWithTwoAtoms = ["H", "N", "O", "F", "Cl", "Br", "I", "At"];

export const applyCorrectNumberOfAtoms = (element) =>
  elementsWithTwoAtoms.includes(element) ? element + 2 : element;

export const prettyCompound = (name, j) =>
  Array.from(name).map((c, index) =>
    c >= "0" && c <= "9" ? <sub key={`char-${j}-${index}`}>{c}</sub> : c
  );

export const prettyReaction = (reaction) =>
  reaction.reduce(
    (acc, val, index) =>
      acc.concat([
        index === 0 ? (
          ""
        ) : (
          <span className="plus" key={"plus-" + index}>
            +
          </span>
        ),
        ...prettyCompound(val, index),
      ]),
    []
  );

export const includesAll = (arr, subArr) =>
  subArr.every((val) => arr.includes(val));

export const areArraysEqual = (arr1, arr2) =>
  arr1.length === arr2.length &&
  includesAll(arr2, arr1) &&
  includesAll(arr1, arr2);

export const getActors = (currentReaction) =>
  new Set([
    ...reactions.reduce(
      (acc, { reacts }) =>
        includesAll(reacts, currentReaction) ? [...acc, ...reacts] : acc,
      []
    ),
    ...currentReaction,
  ]);

export const range = (length) => Array.from(Array(length).keys());
