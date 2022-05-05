import React from "react";
import { Link } from "react-router-dom";
import "./Furniture.css";

const Furniture = ({ furniture }) => {
  const { name, img, price, description, quantity, supplierName } = furniture;
  return (
    <div>
      <div>
        <div class="card">
          <div className="img-container text-center p-3">
            <img
              className="img-fluid"
              src={img}
              class="card-img-top"
              alt="..."
            />
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
            <div>
              <div className="card-info">
                <div>
                  <p>price: {price}</p>
                </div>
                <div>
                  <Link to="/inventory">
                    <button className="card-btn py-1 rounded">
                      Stock update
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
