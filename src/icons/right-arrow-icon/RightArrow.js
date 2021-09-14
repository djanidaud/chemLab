import React from "react";
import { styled } from "../../styled";
import styles from "./RightArrow.styles";

function RightArrow({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 443.52 443.52">
      <path
        d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734
			L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8
			C342.889,227.058,342.889,216.255,336.226,209.591z"
      />
    </svg>
  );
}

export default styled(RightArrow)(styles);
