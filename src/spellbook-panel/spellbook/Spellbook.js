import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Spellbook.styles";
import { styled } from "../../styled";
import classNames from "classnames";
import { range } from "../../utils";
import Page from "./page/Page";
import { reactions as defaultReactions } from "../../reactions";
import { maxPages } from "./Spellbook.utils";

function Spellbook({ className, reactions, searching }) {
  const hidden = reactions.length === 0;
  reactions = searching || hidden ? defaultReactions : reactions;
  const allPages = Math.ceil(reactions.length / 4);
  const initPage = allPages === 1 ? 0 : Math.ceil(allPages / 8);
  const [currentPage, setCurrentPage] = useState(initPage);

  useEffect(
    () =>
      setCurrentPage(() => {
        const possible = reactions.reduce(
          (acc, { matched }, i) => (matched ? [...acc, i] : acc),
          []
        );
        if (possible.length === 0) return initPage;

        const first = possible[0];
        return first === 0 ? 0 : Math.ceil((first - 1) / 4);
      }),
    [initPage, allPages, reactions]
  );

  const fetchPageReactions = useCallback(
    (page) =>
      range(2)
        .map((i) => 2 * page + i)
        .filter((reactionId) => reactionId < reactions.length)
        .map((reactionId) => reactions[reactionId]),
    [reactions]
  );

  const onClick = useCallback(
    (flipped) =>
      setCurrentPage((currentPage) => currentPage + (flipped ? -1 : 1)),
    []
  );

  const createPage = useCallback(
    (index) => {
      const flipped = currentPage > index;
      const active = currentPage === index || currentPage - 1 === index;
      const shouldDisplay =
        currentPage - 2 <= index && index <= currentPage + 1;

      return (
        <Page
          pageNumber={index}
          key={"page-" + index}
          className={classNames("page", {
            flipped,
            active,
          })}
          flipped={flipped}
          onClick={onClick}
          frontPage={shouldDisplay && fetchPageReactions(2 * index)}
          backPage={shouldDisplay && fetchPageReactions(2 * index + 1)}
        />
      );
    },
    [currentPage, fetchPageReactions, onClick]
  );

  const pages = useMemo(
    () =>
      range(allPages)
        .filter((index) => Math.abs(currentPage - index) <= maxPages)
        .map(createPage),
    [currentPage, allPages, createPage]
  );

  return (
    <div className={classNames([className, { searching, hidden }])}>
      {pages}
    </div>
  );
}

export default styled(memo(Spellbook))(styles);
