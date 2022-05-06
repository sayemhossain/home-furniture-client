import React from "react";

const Manage = ({ furniture }) => {
  const { _id, name, img, price, description, quantity, supplierName } =
    furniture;
  return (
    <div>
      <div className="row">
        <div className="col-lg-2">
          <img className="img-fluid w-25" src={img} alt="" />
        </div>
        <div className="col-lg-2">{name}</div>
        <div className="col-lg-2">{quantity}</div>
        <div className="col-lg-2">{price}</div>
        <div className="col-lg-2">
          <button class="btn btn-outline-success">Update</button>
        </div>
        <div className="col-lg-2">
          <button className="btn btn-outline-danger">Delete</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Manage;
