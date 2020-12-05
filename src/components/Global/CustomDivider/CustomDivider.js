import React from "react";
import "./CustomDivider.scss";

const CustomDivider = () => {
  return (
    <div className="customDivider">
      <div className="customDivider__left"></div>
      <div className="customDivider__center">
        <div className="customDivider__centerBlueHalf"></div>
        <div className="customDivider__centerGreyHalf"></div>
      </div>
      <div className="customDivider__right"></div>
    </div>
  );
};
export default CustomDivider;
