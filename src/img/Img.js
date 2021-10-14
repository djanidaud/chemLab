import React from "react";

const Img = ({ name, type = "svg" }) => (
  <img src={"/images/" + name + "." + type} alt="" className={name} />
);
export default Img;
