import React from "react";
import styles from "./Navbar.styles";
import { styled } from "../styled";

const Navbar = ({ className }) => (
  <div className={className}>
    <div className="logo">ChemLab</div>
    <img src={"/images/logo.svg"} alt="" />
    {/*<button className="help">Help</button>*/}
    {/*<button className="about">About</button>*/}
  </div>
);

export default styled(Navbar)(styles);
