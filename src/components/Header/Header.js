import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light navbar-bg py-2">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="img-fuild logo" src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CustomLink
                  className="nav-link fs-5"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link fs-5" to="/blogs">
                  Add product
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link fs-5" to="/blogs">
                  Manage
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link fs-5" to="/blogs">
                  Blogs
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link fs-5" to="/blogs">
                  About
                </CustomLink>
              </li>
            </ul>
            <div>
              <Link to="/login" className="btn btn-danger px-3">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
