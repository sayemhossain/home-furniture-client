import React from "react";
import "./Info.css";
import infoImg from "../../../images/news/extra/1.webp";
import facebook from "../../../images/social-media/facebook-icon.png";
import instagram from "../../../images/social-media/instagram-icon.png";
import linkedin from "../../../images/social-media/linkedin-icon.png";
import twitter from "../../../images/social-media/twitter-icon.png";
import wapp from "../../../images/social-media/whatsapp-icon.png";

const Info = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-5">
          <img src={infoImg} alt="" />
        </div>
        <div className="col-lg-7">
          <h4 className="info-subheader">Home Furniture wirehouse,</h4>
          <h1 className="info-header">A place you find everything</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur veniam voluptate accusantium id nisi repudiandae
            voluptatem mollitia neque. Laborum amet repellendus qui quisquam
            sequi maiores dolor quibusdam. Veniam, ipsam id? Deleniti fugit,
            officiis soluta ratione sit fuga consequatur ullam molestiae illum?
            Nobis libero consequuntur, ipsa, voluptatem earum dolore vel facilis
            voluptas quaerat provident in! Illo dignissimos praesentium sed id
            ducimus?
          </p>
          <h5 className="mt-3">Find us on</h5>
          <div className="social-media">
            <img className="img-fluid " src={facebook} alt="" />
            <img className="img-fluid " src={instagram} alt="" />
            <img className="img-fluid " src={linkedin} alt="" />
            <img className="img-fluid" src={twitter} alt="" />
            <img className="img-fluid " src={wapp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
