import React from "react";
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
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
              {description.length > 150
                ? description.slice(0, 150) + "..."
                : description}
            </p>
            <div>
              <div className="row">
                <div className="col-lg-6"></div>
                <div className="col-lg-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
