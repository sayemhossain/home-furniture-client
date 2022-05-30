import React from "react";
import "./Mission.css";
import missionImg from "../../../images/half_image.jpg";

const Mission = () => {
  return (
    <div className="my-5 container">
      <div className="row">
        <div className="col-lg-6">
          {" "}
          <img className="img-fluid" src={missionImg} alt="" />
        </div>
        <div className="col-lg-6 mission-text mt-3">
          <p className="my-0 py-0">СHECK</p>
          <h2 className="fw-bold">OUR MISSION</h2>
          <p className="pe-5">
            If you want high quality and professional home furnitures look no
            further.
          </p>
          <p>
            <small>
              1st Choice home furniture is a local San Diego furniture company
              that provides professional furnitures. We’re a a warehouse company
              that serves all San Diego areas and all over the wrold. No move is
              too big or small, we do small, medium and very large moves, and
              plan the most efficient route to make your move a smooth
              transition.
            </small>
          </p>

          <h6 className="mt-2">Call us for your upcoming move!</h6>
          <h4>+123-456-7890</h4>
        </div>
      </div>
    </div>
  );
};

export default Mission;
