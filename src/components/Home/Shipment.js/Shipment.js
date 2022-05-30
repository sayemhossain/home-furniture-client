import React from "react";
import shipment1 from "../../../images/Airplane-Icon.png";
import shipment2 from "../../../images/Ship-Icon.png";
import shipment3 from "../../../images/Truck-Icon.png";

const Shipment = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p>
              {" "}
              <small>Real Solutions, Real Fast!</small>
            </p>
            <h2>Delivering the Best Global Logistics Solutions.</h2>
          </div>
          <div className="col-lg-6">
            {" "}
            <p>
              Our global logistics expertise, advanced supply chain technology &
              customized logistics solutions will help you analyze, develop and
              implement successful supply chain management strategies from
              end-to-end.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div class="card">
              <img src={shipment1} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Air Freight</h5>
                <p class="card-text">
                  We can arrange and provides with the comprehensive service in
                  the sphere of urgent, valuable, fragile or any cargoes
                  conscientious accelerated delivery by air.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card">
              <img
                className="img-fluid mx-auto"
                src={shipment2}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Air Freight</h5>
                <p class="card-text">
                  We provides with the main types of basic conditions
                  International sea transportation is implemented by our
                  partners’ vessels, the largest ocean carriers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card p-2">
              <img
                className="img-fluid mx-auto"
                src={shipment3}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title">Air Freight</h5>
                <p class="card-text">
                  We provides a wide range of transportation services including
                  quality international road transportation of cargoes & goods
                  arriving from the ports all over the world.
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
