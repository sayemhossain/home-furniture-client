import { faComments, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="my-5 container">
      <div className="text-center">
        <p className="my-0 py-0">FAQ</p>
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <hr className="w-50 mx-auto mb-5" />
      </div>
      <div>
        <div className="row">
          <div className="col-lg-4">
            <div class="card">
              <div className="question-icon-container ">
                <FontAwesomeIcon className="question-icon " icon={faComments} />
              </div>
              <div class="card-body text-center p-4">
                <h5 class="card-title">
                  Do you move unique or very lare items?
                </h5>
                <p class="card-text">
                  Yes! We move almost all items. Be sure to let your Gorilla
                  Movers representative know ahead of time in case it requires a
                  third mover or special equipment.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card">
              <div className="question-icon-container ">
                <FontAwesomeIcon className="question-icon " icon={faComments} />
              </div>
              <div class="card-body text-center p-4">
                <h5 class="card-title">
                  How do you take care of fragile items/antiques?
                </h5>
                <p class="card-text">
                  It’s our mission to move your belongings safely and securely.
                  To ensure your items are moved unharmed, we carefully pad and
                  shrink wrap them.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div class="card">
              <div className="question-icon-container ">
                <FontAwesomeIcon className="question-icon " icon={faComments} />
              </div>
              <div class="card-body text-center p-4">
                <h5 class="card-title">
                  Can you pack my stuff or does it have to be packed?
                </h5>
                <p class="card-text">
                  We are happy to pack your stuff! Be sure to tell us prior to
                  the move to ensure efficiency. To minimize costs, customers
                  have the option to pack their belongings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
