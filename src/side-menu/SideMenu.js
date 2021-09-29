import React, { memo } from "react";
import styles from "./SideMenu.styles";
import { styled } from "../styled";
import StorageArea from "../storage-area/StorageArea";
import CraftingArea from "../crafting-area/CraftingArea";
import Img from "../img/Img";
import SpellbookPanel from "../spellbook-panel/SpellbookPanel";

const SideMenu = ({ className }) => (
  <div className={className}>
    <Img name="vertical-curve" />
    <Img name="horizontal-curve" />
    <div className="area">
      <SpellbookPanel className="panel" />
      <CraftingArea className="panel" />
      <StorageArea className="panel" />
    </div>
  </div>
);

export default styled(memo(SideMenu))(styles);
