import React from "react";
import shipment1 from "../../../images/Airplane-Icon.png";
import shipment2 from "../../../images/Ship-Icon.png";
import shipment3 from "../../../images/Truck-Icon.png";
import "./Shipment.css";

const Shipment = () => {
  return (
    <div className="py-5">
      <div className="container">
        <p className=" fw-bold" style={{ color: "#ec8445" }}>
          {" "}
          <small>Real Solutions, Real Fast!</small>
        </p>
        <div className="row my-3 mb-5">
          <div className="col-lg-6">
            <h2 className="shipment-heading">
              Delivering the Best Global <br></br> Logistics Solutions.
            </h2>
          </div>
          <div className="col-lg-6">
            {" "}
            <p className="shipment-pera">
              Our global logistics expertise, advanced supply chain technology &
              customized logistics solutions will help you analyze, develop and
              implement successful supply chain management strategies from
              end-to-end.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="card shipment-card px-2 py-5 ">
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={shipment1}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Air Freight</h5>
                <p class="card-text">
                  <small>
                    {" "}
                    We can arrange and provides with the comprehensive service
                    in the sphere of urgent, valuable, fragile or any cargoes
                    conscientious accelerated delivery by air.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card shipment-card px-2 py-5">
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={shipment2}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Ocean Freight</h5>
                <p class="card-text">
                  <small>
                    We provides with the main types of basic conditions
                    International sea transportation is implemented by our
                    partners’ vessels, the largest ocean carriers.
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card px-2 py-5 shipment-card">
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={shipment3}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body text-center">
                <h5 class="card-title">Road Freight</h5>
                <p class="card-text">
                  <small>
                    We provides a wide range of transportation services
                    including quality international road transportation of
                    cargoes & goods arriving from the ports all over the world.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
