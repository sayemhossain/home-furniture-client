import React from "react";
import band1 from "../../../images/banding/band1.webp";
import band2 from "../../../images/banding/band2.webp";
import band3 from "../../../images/banding/band3.webp";
import band4 from "../../../images/banding/band4.webp";
import band5 from "../../../images/banding/band5.webp";

const Band = () => {
  return (
    <div>
      <hr />
      <div className="my-5 d-flex justify-content-around flex-wrap">
        <img src={band1} alt="" />
        <img src={band2} alt="" />
        <img src={band3} alt="" />
        <img src={band4} alt="" />
        <img src={band5} alt="" />
      </div>
      <hr className="mb-5" />
    </div>
  );
};

export default Band;
