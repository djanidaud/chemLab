import React from "react";
import styles from "./Navbar.styles";
import { styled } from "../styled";

function Navbar({ className }) {
  return (
    <div className={className}>
      <div className="logo">ChemLab</div>
      <img src="https://www.svgrepo.com/show/58697/chemistry.svg" />
      <a className="help" href="">
        Help
      </a>
      <a className="about" href="">
        About
      </a>
    </div>
  );
}

export default styled(Navbar)(styles);
