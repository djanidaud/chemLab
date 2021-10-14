import React from "react";
import { styled } from "../styled";
import styles from "./Footer.styles";
import Img from "../img/Img";

function Footer({ className }) {
  return (
    <div className={className}>
      <div className="divider">
        <Img name="divider1" />
        <Img name="divider2" />
        <div className="side-menu-bottom" />
      </div>
      <Img name="footer_slope" />
      <div className="footer-body">
        <div className="footer-options">
          <div>
            <span>Terms and Conditions</span>
            <span className="bullet">•</span>
            <span>Privacy Notice</span>
          </div>
          <div className="copyright">© 2021 ChemLab</div>
        </div>
      </div>
      <Img name="chemist" type="png" />
      <Img name="chemists" type="png" />
      <Img name="potions" type="png" />
    </div>
  );
}

export default styled(Footer)(styles);
