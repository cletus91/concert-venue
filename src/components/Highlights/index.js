import React from "react";
import Description from "./Description";
import Discount from "./Discount";

const Highlights = () => {
  return (
    <div>
      <div className="highlight_wrapper">
        <Description />
        <Discount />
      </div>
    </div>
  );
};

export default Highlights;
