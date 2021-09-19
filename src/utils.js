import React from "react";
import { reactions } from "./reactions";
import molecularParser from "molecular-parser";
import { inv, det, multiply, gcd } from "mathjs";

const elementsWithTwoAtoms = ["H", "N", "O", "F", "Cl", "Br", "I", "At"];

export const applyCorrectNumberOfAtoms = (element) =>
  elementsWithTwoAtoms.includes(element) ? element + 2 : element;

export const prettyCompound = (name, j) =>
  Array.from(name).map((c, index) =>
    c >= "0" && c <= "9" ? <sub key={`char-${j}-${index}`}>{c}</sub> : c
  );

export const prettyReaction = (reaction, coefsMap = null) =>
  reaction.map((val, index) => {
    const coef = coefsMap ? coefsMap.get(val) : "1";

    return (
      <React.Fragment key={"prettyReaction-" + index}>
        {index !== 0 && <span className="plus">+</span>}
        {coefsMap && coef !== "1" && <span className="coef">{coef}</span>}
        <span className="pretty-compound">{prettyCompound(val, index)} </span>
      </React.Fragment>
    );
  });

export const prettyFormula = ({ reacts, products, coefs }) => {
  const coefsMap = new Map(coefs.reduce(chunks(2), []));
  return (
    <>
      {prettyReaction(reacts, coefsMap)}
      <div className="arrow-down">↓</div>
      {prettyReaction(products, coefsMap)}
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
    ...reactions.reduce(
      (acc, { reacts }) =>
        includesAll(reacts, currentReaction) ? [...acc, ...reacts] : acc,
      []
    ),
    ...currentReaction,
  ]);

export const range = (length) => Array.from(Array(length).keys());

export const chunks = (number) => (acc, val, index) => {
  if (index % number === 0) acc.push([val]);
  else acc[acc.length - 1].push(val);
  return acc;
};

const balance = ({ reacts, products }) => {
  const compounds = [...reacts, ...products];
  const [A, vector] = getReactionMatrix(compounds, reacts.length);
  const inverse = inv(A);
  const determinant = det(A);

  const coefs = multiply(multiply(inverse, vector), determinant);
  coefs.push(determinant);
  const greatestMultiplier = coefs.reduce((acc, a) => gcd(acc, a));

  return new Map(
    coefs.map((coef, i) => [compounds[i], coef / greatestMultiplier])
  );
};

const getReactionMatrix = (compounds, numberOfReacts) => {
  const atoms = getReactionAtoms(compounds);
  const lastCompound = compounds.pop();
  const matrix = atoms.map((atom) =>
    compounds
      .map(countAtoms(atom))
      .map((count, i) => (i < numberOfReacts ? count : -count))
  );
  const vector = atoms.map((atom) => countAtoms(atom)(lastCompound));

  compounds.push(lastCompound);
  return [matrix, vector];
};

const countAtoms = (actor) => (compound) =>
  molecularParser.parse(compound)[actor] || 0;

const getReactionAtoms = (allElements) => {
  const atoms = new Set();
  allElements.forEach((actor) =>
    actor.match(/[A-Z][a-z]*/g).forEach((el) => atoms.add(el))
  );
  return Array.from(atoms);
};

const reaction = { reacts: ["H2", "O2"], products: ["H2O"] };
const reaction1 = {
  reacts: ["Al", "KOH", "H2O"],
  products: ["K3AlO6H6", "H2"],
};
const reaction2 = { reacts: ["Na", "H2O"], products: ["NaOH", "H2"] };

//console.log(balance(reaction1));

const parseMol = (compound) => {
  const atomsMap = new Map();
  const stack = [];

  const incEntry = (key, count = 1) =>
    atomsMap.set(key, (atomsMap.get(key) || 0) + count);

  const processElement = (element, scale = 1) => {
    let lastAddedAtom = "";
    element = parseElement(element);

    element.forEach((atom, i) => {
      if (isNumber(atom)) {
        incEntry(lastAddedAtom, parseInt(atom) * scale - 1);
      } else {
        lastAddedAtom = atom;
        incEntry(
          atom,
          element.length === i + 1 || !isNumber(element[i + 1]) ? scale : 1
        );
      }
    });
  };

  const backToStack = (affected, scale) => {
    affected.forEach((element) => {
      element = parseElement(element);

      stack.push(
        element.reduce((acc, atom, i) => {
          if (isNumber(atom)) {
            return acc + parseInt(atom) * scale;
          }

          return (
            acc +
            atom +
            (element.length === i + 1 || !isNumber(element[i + 1]) ? scale : "")
          );
        })
      );
    });
  };

  const processBrackets = (context) => {
    let affected = [];
    let scale = parseInt(context);

    stack.pop();
    let lastPopped;

    let deepness = 0;
    while ((lastPopped = stack.pop()) !== "(" || deepness !== 0) {
      if (lastPopped === ")") deepness++;
      if (lastPopped === "(") deepness--;
      affected.push(lastPopped);
    }

    if (stack.length === 0) affected.forEach((el) => processElement(el, scale));
    else backToStack(affected, scale);
  };

  compound.match(/[A-Z][a-z]*\d*|[()]|\d+/g).forEach((comp) => {
    if (comp === "(" || comp === ")") {
      stack.push(comp);
      return;
    }

    if (isNumber(comp)) {
      processBrackets(comp);
      return;
    }

    if (stack.length === 0) {
      processElement(comp);
      return;
    }

    if (stack[stack.length - 1] === ")") {
      processBrackets("1");
    }

    stack.push(comp);
  });

  while (stack[stack.length - 1] === ")") {
    processBrackets("1");
  }

  return atomsMap;
};

const parseElement = (element) => element.match(/[A-Z][a-z]*|\d+/g) || [];
const isNumber = (str) => !isNaN(str);
const testParser = (comp) => console.log(comp, parseMol(comp));

testParser("H2O");
testParser("Fe2OH3");
testParser("AlC3H8C3H8OAl");
testParser("Na(OH)2");
testParser("Na(OH2)2");
testParser("H22(O2)");
testParser("H22((O2)4)25");
testParser("H2((O2)2(Ca2)2)2");
testParser("H2((O2))");
testParser("H2(H2(O2)2)2");
