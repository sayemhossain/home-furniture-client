import {
  faComments,
  faCommentSms,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Question.css";
import questionCover from "../../../images/question-cover.jpg";

const Question = () => {
  return (
    <div className="question-container py-3">
      <div className="my-5 container">
        <div className="text-center">
          <p className="my-0 py-0">FAQ</p>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <hr className="w-25 mx-auto mb-5" />
        </div>
        <div>
          <div className="row">
            <div className="col-lg-4">
              <div class="card question-card">
                <div className="question-icon-container ">
                  <FontAwesomeIcon
                    className="question-icon "
                    icon={faCommentSms}
                  />
                </div>
                <div class="card-body text-center p-4">
                  <h5 class="card-title">
                    Do you sell unique or stylish items?
                  </h5>
                  <p class="card-text">
                    <small>
                      {" "}
                      Yes! Our almost all items are unique. Be sure to let your
                      Gorilla Movers representative know ahead of time in case
                      it requires a third mover or special equipment.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card question-card special-card">
                <div className="question-icon-container ">
                  <FontAwesomeIcon
                    className="question-icon "
                    icon={faCommentSms}
                  />
                </div>
                <div class="card-body text-center p-4">
                  <h5 class="card-title">
                    How do you take care of your furnitures?
                  </h5>
                  <p class="card-text">
                    <small>
                      It’s our mission to keep our produtcs safely and securely.
                      To ensure your items are moved unharmed, we carefully pad
                      and shrink wrap them.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card question-card">
                <div className="question-icon-container ">
                  <FontAwesomeIcon
                    className="question-icon "
                    icon={faCommentSms}
                  />
                </div>
                <div class="card-body text-center p-4">
                  <h5 class="card-title">
                    Can you pack my stuff or does it have to be packed?
                  </h5>
                  <p class="card-text">
                    <small>
                      {" "}
                      We are happy to pack your stuff! Be sure to tell us prior
                      to the move to ensure efficiency. To minimize costs,
                      customers have the option to pack their belongings.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
