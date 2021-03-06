import React from "react";
import newsOne from "../../../images/news/extra/2.webp";
import newsTwo from "../../../images/news/extra/1.webp";
import newsThree from "../../../images/news/extra/6.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./News.css";

const News = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>News & Updates</h2>
        <hr className="w-25 mx-auto mb-5" />
      </div>
      <div className="row">
        <div className="col-lg-4 px-3 mb-2">
          <img className="img-fluid rounded news-img" src={newsOne} alt="" />
          <div>
            <h5 className="mt-3">3 great ways to design your bedroom</h5>
            <p>
              <small>By Adam Smith, December 18, 2021</small>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              vero vitae expedita a quod illum dolores temporibus! Ex, quas
              quod.
            </p>
            <p className="news-btn">
              <a href="">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </p>
          </div>
        </div>
        <div className="col-lg-4 px-3 mb-2">
          <img className="img-fluid rounded news-img" src={newsTwo} alt="" />
          <h5 className="mt-3">How to design a happy home</h5>
          <p>
            <small>By Adam Smith, December 18, 2021</small>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            vero vitae expedita a quod illum dolores temporibus! Ex, quas quod.
          </p>
          <p className="news-btn">
            <a href="">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
        </div>
        <div className="col-lg-4 px-3">
          <img className="img-fluid rounded news-img" src={newsThree} alt="" />
          <h5 className="mt-3">Top tips for sustainable living</h5>
          <p>
            <small>By Adam Smith, December 18, 2021</small>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            vero vitae expedita a quod illum dolores temporibus! Ex, quas quod.
          </p>

          <p className="news-btn">
            <a href="">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
