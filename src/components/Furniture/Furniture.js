import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Furniture.css";

const Furniture = ({ furniture }) => {
  const { _id, name, img, price, description, quantity, supplierName } =
    furniture;
  const navigate = useNavigate();

  const navigateToFurnitureDetails = () => {
    navigate(`/inventory/${_id}`);
  };
  return (
    <div>
      <div class="card">
        <div className="img-container text-center p-3">
          <img className="img-fluid" src={img} class="card-img-top" alt="..." />
        </div>
        <div class="card-body p-3">
          <h5 class="card-title">
            {name}
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill custom-bg">
              {quantity}
              <span class="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p class="card-text">
            {description.length > 150
              ? description.slice(0, 150) + "..."
              : description}
          </p>
          <h6>Supplier: {supplierName}</h6>
          <div>
            <div className="card-info">
              <div>
                <p>price: {price}</p>
              </div>
              <div>
                <button
                  onClick={() => navigateToFurnitureDetails(_id)}
                  className="card-btn py-1 rounded"
                >
                  Stock update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
