import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFurnitureDetails from "../../hooks/useFurnitureDetails";

const Inventory = () => {
  const furnitureId = useParams();
  const [furniture] = useFurnitureDetails(furnitureId);
  let { _id, name, img, price, description, quantity, supplierName } =
    furniture;
  const [newQuantity, setNewQuantity] = useState(0);

  const handleDelivery = () => {
    quantity = quantity - 1;
    setNewQuantity(quantity);
  };
  return (
    <div className="container my-5" style={{ minHeight: "80vh" }}>
      <div className="">
        <div className="row ">
          <div className="col-lg-4">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-lg-8 px-5">
            <h4>Name: {name}</h4>
            <p className="my-0 py-0">
              Price: <span className="text-danger">{price}</span>
            </p>
            <p>Quantity: {newQuantity}</p>
            <h6 className="mb-0 pb-0">supplied by: {supplierName}</h6>
            <p>{description}</p>
            <button onClick={handleDelivery} className="btn btn-danger">
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
