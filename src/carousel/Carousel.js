import React, { useEffect, useState } from "react";
import styles from "./Carousel.styles";
import { styled } from "../styled";
import classNames from "classnames";
import LeftArrow from "../icons/left-arrow-icon/LeftArrow";
import RightArrow from "../icons/right-arrow-icon/RightArrow";

function Carousel({ className, children, selectedSlide = 0 }) {
  const [selected, setSelected] = useState(selectedSlide);
  const [slides, setSlides] = useState([]);
  const [dots, setDots] = useState([]);
  const hasMultipleChildren = children.length > 1;

  const previous = () =>
    setSelected(selected === 0 ? children.length - 1 : selected - 1);

  const next = () =>
    setSelected(selected === children.length - 1 ? 0 : selected + 1);

  useEffect(() => setSelected(selectedSlide), [selectedSlide]);

  useEffect(() => {
    setSlides(
      children.map((child, index) => (
        <section
          className="carousel-section"
          key={"carousel-section-" + index}
          style={{
            transform: `translate(calc(100% * ${index - selected}))`,
          }}
        >
          {child}
        </section>
      ))
    );
  }, [selected, children]);

  useEffect(
    () =>
      setDots(
        children.map((_, index) => (
          <svg
            key={"dot-" + index}
            className={classNames(["dot", { active: index === selected }])}
          >
            <circle cx="6" cy="6" r="3" />
          </svg>
        ))
      ),
    [selected, children]
  );

  return (
    <div className={className}>
      {hasMultipleChildren && (
        <span className="left-arrow" onClick={previous}>
          <LeftArrow />
        </span>
      )}
      {slides}
      {hasMultipleChildren && (
        <span className="right-arrow" onClick={next}>
          <RightArrow />
        </span>
      )}
      {hasMultipleChildren && <div className="dots">{dots}</div>}
    </div>
  );
}

export default styled(Carousel)(styles);
