import React from "react";
import styles from "./Main.styles";
import { styled } from "../styled";
import PeriodicTable from "../periodic-table/PeriodicTable";
import Navbar from "../navbar/Navbar";
import SideMenu from "../side-menu/SideMenu";
import { ReactionProvider } from "../context/reactionContext";
import Footer from "../footer/Footer";

const Main = ({ className }) => (
  <div className={className}>
    <ReactionProvider>
      <div className="main">
        <Navbar className="menu" />
        <PeriodicTable className="table" />
        <SideMenu className="sideMenu" />
      </div>
    </ReactionProvider>
    <Footer />
  </div>
);
export default styled(Main)(styles);
