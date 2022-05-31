import {
  faEnvelope,
  faHome,
  faPhone,
  faPrint,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-bg">
      <footer class="text-center footer-container  text-lg-start text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4"></section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    contact
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Features
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" class="text-reset">
                    Advertisement
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> New York, NY
                  10012, US
                </p>
                <p>
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                  info@example.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> + 01 234
                  567 88
                </p>
                <p>
                  <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> + 01 234
                  567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Copyright © 2022 - All right reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
