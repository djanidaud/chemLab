import React, { useContext, useMemo } from "react";
import styles from "./StorageArea.styles";
import { styled } from "../styled";
import Carousel from "../carousel/Carousel";
import Compound from "./compound/Compound";
import { compoundsData } from "../reactions";
import theme from "../theme";
import { chunks } from "../utils";
import ReactionContext from "../context/reactionContext";

function StorageArea({ className }) {
  const {
    compounds,
    onElementClick,
    currentReaction,
    possibleReactionActors,
    onCompoundDelete,
  } = useContext(ReactionContext);

  const slides = useMemo(
    () =>
      compounds
        .map((el, i) => (
          <Compound
            key={"compound-" + i}
            active={currentReaction.includes(el)}
            symbol={el}
            onClick={onElementClick}
            onDelete={() => onCompoundDelete(i)}
            color={theme.elementsColor[compoundsData.get(el).type].hover}
            disabled={
              currentReaction.length !== 0 && !possibleReactionActors.has(el)
            }
          />
        ))
        .reduce(chunks(9), [])
        .map((e, i) => (
          <div className="potion-section" key={"potion-section-" + i}>
            {e}
          </div>
        )),
    [
      currentReaction,
      compounds,
      possibleReactionActors,
      onElementClick,
      onCompoundDelete,
    ]
  );

  return (
    <div className={className}>
      <Carousel selectedSlide={Math.max(slides.length - 1, 0)}>
        {slides}
      </Carousel>
    </div>
  );
}

export default styled(StorageArea)(styles);
