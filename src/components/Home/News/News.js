import React from "react";
import newsOne from "../../../images/news/newsOne.jpg";
import newsTwo from "../../../images/news/newsTwo.jpg";
import newsThree from "../../../images/news/newsThree.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./News.css";

const News = () => {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>News & Updates</h2>
        <hr className="w-50 mx-auto mb-5" />
      </div>
      <div className="row">
        <div className="col-lg-4 px-3 mb-2">
          <img className="img-fluid rounded" src={newsOne} alt="" />
          <div>
            <h5 className="mt-3">3 great ways to design your bedroom</h5>
            <p>
              <small>By Adam Smith, December 18, 2019</small>
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
          <img className="img-fluid rounded" src={newsTwo} alt="" />
          <h4 className="mt-3">How to design a happy home</h4>
          <p>
            <small>By Adam Smith, December 18, 2019</small>
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
          <img className="img-fluid rounded" src={newsThree} alt="" />
          <h4 className="mt-3">Top tips for sustainable living</h4>
          <p>
            <small>By Adam Smith, December 18, 2019</small>
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
