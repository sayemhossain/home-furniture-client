import React from "react";
import notFoundImg from "../../images/notFoundImg.webp";

const NotFound = () => {
  return (
    <div
      style={{ minHeight: "80vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <img className="img-fluid" src={notFoundImg} alt="" />
    </div>
  );
};

export default NotFound;
