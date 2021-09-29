import React from "react";

const Img = ({ name }) => (
  <img src={"/images/" + name + ".svg"} alt="" className={name} />
);
export default Img;
