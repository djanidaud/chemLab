import React, { useEffect, useState } from "react";
import styles from "./StorageArea.styles";
import { styled } from "../styled";
import Carousel from "../carousel/Carousel";
import Compound from "./compound/Compound";
import { compoundsData } from "../reactions";
import theme from "../theme";
import { chunks } from "../utils";

function StorageArea({
  className,
  compounds,
  onCompoundClick,
  currentReaction,
  possibleReactionActors,
}) {
  const [slides, setSlides] = useState([]);

  useEffect(
    () =>
      setSlides(
        compounds
          .map((el, i) => (
            <Compound
              key={"compound-" + i}
              active={currentReaction.includes(el)}
              symbol={el}
              onClick={onCompoundClick}
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
          ))
      ),
    [currentReaction]
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
