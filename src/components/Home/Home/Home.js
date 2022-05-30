import React from "react";
import homeImg from "../../../images/slider1-1.webp";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Marketing from "../Marketing/Marketing";
import News from "../News/News";
import Info from "../Info/Info";
import Furnitures from "../../Furnitures/Furnitures";
import offer from "../../../images/home7-fullbanner.webp";
import Band from "../Band/Band";
import Shipment from "../Shipment.js/Shipment";
import Mission from "../Mission/Mission";
import Question from "../Question/Question";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row p-2">
            <div className="col-lg-6 home-txt">
              <h5>A watch is a portable</h5>
              <h1 className="fs-1 mt-2">Smart Furniture</h1>
              <p>
                Experience the decibles like your ears deserve to Safe for the
                ears, very for the heart.
              </p>
              <div>
                <button className="btn px-4 py-2 rounded-pill">
                  Explore More{" "}
                  <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={homeImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Marketing></Marketing>
      <Furnitures></Furnitures>
      <div className="offer">
        <img className="img-fluid" src={offer} alt="" />
      </div>
      <Info></Info>
      <Shipment></Shipment>
      <News></News>
      <Mission></Mission>
      <Question></Question>
    </>
  );
};

export default Home;
