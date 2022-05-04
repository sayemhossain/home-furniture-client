import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section id="footer" className="bg-dark text-white">
        <div className="container text-center pt-5 text-md-start">
          <div className="row">
            <div className="col-md-4 footer-box text-white">
              <p className="text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                obcaecati beatae similique inventore reiciendis vero dolorum
                deleniti aliquid reprehenderit soluta!
              </p>
            </div>

            <div className="col-md-4 footer-box">
              <p className="text-white">
                <b>CONTACT US</b>
              </p>
              <p className="text-white">Dhanmondi-32, Dhaka</p>
              <p className="text-white">01766-069458</p>
              <p className="text-white">shayem15-12011@diu.edu.bd</p>
            </div>

            <div className="col-md-4 footer-box text-center">
              <p className="text-white">
                <b>SUBCRIBE NEWSLETTER</b>
              </p>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button type="button" className="btn btn-danger">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        <hr />
        <p className="copyright text-white">
          &copy; Copyright by Shayem Hossain
        </p>
      </section>
    </div>
  );
};

export default Footer;
