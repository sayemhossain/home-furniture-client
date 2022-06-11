import React from "react";
import shipping from "../../../images/1.webp";
import support from "../../../images/2.webp";
import payment from "../../../images/3.webp";
import moneyback from "../../../images/4.webp";
import "./Marketing.css";

const Marketing = () => {
  return (
    <div className="px-5 my-5">
      <div className="row" data-aos="fade-up" data-aos-duration="500">
        <div className="col-lg-3 col-md-6 px-3 content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <img className="img-fluid m-img" src={shipping} alt="" />
            </div>
            <div className="col-lg-9">
              <h5>Free Shipping</h5>
              <p>
                Product are free<br></br> shipping
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 px-3 content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <img className="img-fluid m-img" src={support} alt="" />
            </div>
            <div className="col-lg-9">
              <h5>Support 24/7</h5>
              <p>
                Support 24 hours<br></br> a day
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 px-3 content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <img className="img-fluid m-img" src={payment} alt="" />
            </div>
            <div className="col-lg-9">
              <h5>Secure Payment</h5>
              <p>
                We ensure secure <br></br> payment
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 px-3 content">
          <div className="row d-flex align-items-center">
            <div className="col-lg-3">
              <img className="img-fluid m-img" src={moneyback} alt="" />
            </div>
            <div className="col-lg-9">
              <h5>100% Moneyback</h5>
              <p>Most product are free shipping.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
