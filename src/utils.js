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

console.log(balance(reaction1));

const parse = (compound, context = 1) => {
  // Fe2(OH)3 -> Fe2O3H3
  let leftB = compound.indexOf("(");
  let rightB = compound.indexOf(")");
  let arr = [];

  while (leftB !== -1 && rightB !== -1) {
    const scalar = takeDigits(compound, rightB + 1);
    console.log(scalar);
    compound.splice(rightB, 1 + scalar.length);
    compound.splice(leftB, 1);

    const slised = compound.splice(leftB, rightB - leftB - 1);

    if (scalar !== "")
      parse(slised, context * parseInt(scalar)).forEach((e) => {
        arr.push(e);
      });

    leftB = compound.indexOf("(");
    rightB = compound.indexOf(")");
  }
  const c = [];

  compound
    .join("")
    .match(/[A-Z][a-z]*\d*/g)
    .forEach((el) => c.push(el + "*" + context));

  return [...c, ...arr];
};

const takeDigits = (text, index) => {
  let digits = "";

  while (index < text.length && "0" <= text[index] && text[index] <= "9") {
    digits += text[index];
    index++;
  }
  return digits;
};
const eq = Array.from("A2B(C2)23");
console.log("A2B(C2)23");
console.log(parse(eq).join("-"));

//console.log("H2O(Add)HJH(A2)222".replace(/\([\S]*\)\d*/g, ""));
