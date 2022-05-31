import React from "react";
import "./SmallBanner.css";

const SmallBanner = () => {
  return (
    <div className="banner-container">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8 banner-text">
            <h3 className="text-white">
              Wanna always be updated? Subscribe to our Newsletter:
            </h3>
          </div>
          <div className="col-lg-4">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter your email address"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-success"
                type="button"
                id="button-addon2"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
