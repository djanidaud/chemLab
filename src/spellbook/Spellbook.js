import React, { useEffect, useState } from "react";
import styles from "./Spellbook.styles";
import { styled } from "../styled";
import classNames from "classnames";
import { prettyReaction } from "../utils";
import Page from "./page/Page";
import { reactions as defaultReactions } from "../reactions";

function Spellbook({
  className,
  width,
  coverMargin,
  maxPages = 5,
  reactions,
  searching,
}) {
  const hidden = reactions.length === 0;
  reactions = searching || hidden ? defaultReactions : reactions;
  const allPages = Math.ceil(reactions.length / 4);
  const initPage = allPages === 1 ? 0 : Math.ceil(allPages / 8);
  const [currentPage, setCurrentPage] = useState(initPage);
  const [pages, setPages] = useState([]);

  useEffect(
    () => setCurrentPage(() => initPage),
    [initPage, allPages, reactions]
  );

  useEffect(() => {
    setPages(() =>
      Array(allPages)
        .fill(0)
        .reduce(
          (acc, _, index) =>
            index > currentPage + maxPages || index < currentPage - maxPages
              ? acc
              : [...acc, createPage(index)],
          []
        )
    );
  }, [currentPage]);

  const displayPage = (page) =>
    [0, 1].map((index) => {
      if (page * 2 + index >= reactions.length) return "";
      const { reacts, products } = reactions[page * 2 + index];
      return (
        <div className="reaction" key={`reaction-${page}-${index}`}>
          {prettyReaction(reacts)}
          <div className="arrow-down">↓</div>
          {prettyReaction(products)}
        </div>
      );
    });

  const createPage = (index) => {
    const flipped = currentPage > index;
    const active = currentPage === index || currentPage - 1 === index;
    const shouldDisplay = currentPage - 2 <= index && index <= currentPage + 1;

    return (
      <Page
        pageNumber={index}
        key={"page-" + index}
        className={classNames([
          "page",
          {
            flipped,
            active,
          },
        ])}
        style={{
          width:
            (width - coverMargin) / 2 -
            (flipped ? index % maxPages : maxPages - (index % maxPages)),
        }}
        onClick={() =>
          setCurrentPage((currentPage) => currentPage + (flipped ? -1 : 1))
        }
        frontPage={shouldDisplay && displayPage(2 * index)}
        backPage={shouldDisplay && displayPage(2 * index + 1)}
      />
    );
  };

  return (
    <div className={classNames([className, { searching, hidden }])}>
      {/*<img src="/images/ttt.png" alt="" className="book-cover" />*/}
      {pages}
    </div>
  );
}

export default styled(Spellbook)(styles);
