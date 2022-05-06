import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFurnitureDetails from "../../hooks/useFurnitureDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Inventory.css";

const Inventory = () => {
  const furnitureId = useParams();
  const [furniture] = useFurnitureDetails(furnitureId);
  let { _id, name, img, price, description, quantity, supplierName } =
    furniture;
  const [updatedQuantity, setUpdatedQuantity] = useState([]);

  const handleUpdateQuantity = (e) => {
    e.preventDefault();
    const restock = e.target.restock.value;
    const newQuentiry = quantity + parseInt(restock);
    console.log(newQuentiry);
    // send data to the server
    fetch(`http://localhost:5000/furnitures/${furnitureId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuentiry }),
    })
      .then((res) => res.json())
      .then((data) => setUpdatedQuantity(data));
    e.target.reset();
  };

  return (
    <div className="container my-5" style={{ minHeight: "80vh" }}>
      <div>
        <div className="row ">
          <div className="col-lg-4">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col-lg-8 px-5">
            <h4>Name: {name}</h4>
            <p className="my-0 py-0">
              Price: <span className="text-danger">{price}</span>
            </p>
            <p>Quantity: {quantity}</p>
            <h6 className="mb-0 pb-0">supplied by: {supplierName}</h6>
            <p>{description}</p>
            <button className="btn btn-danger">Delivered</button>
            <div className="mt-3">
              <h5>Restock the items</h5>
              <form action="" onSubmit={handleUpdateQuantity}>
                <input
                  className="form-control w-50 mb-0 mt-3"
                  type="text"
                  name="restock"
                  placeholder="Enter your stock"
                />
                <br></br>
                <input
                  className="btn btn-success mt-0"
                  type="submit"
                  value="Restock"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="text-end my-5">
          <p>
            <Link className="inventory-link" to="/manage">
              Manage Inventory
              <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;