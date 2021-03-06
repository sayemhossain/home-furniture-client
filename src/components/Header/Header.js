import React from "react";
import { Link, NavLink } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../images/logo.png";
import "./Header.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg py-2">
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
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
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
                <CustomLink className="nav-link fs-5" to="/allfurniture">
                  Furnitures
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link fs-5" to="/manage">
                  Manage Inventory
                </CustomLink>
              </li>
              {user && (
                <>
                  <li className="nav-item">
                    <CustomLink className="nav-link fs-5" to="/additem">
                      Add Item
                    </CustomLink>
                  </li>
                  <li className="nav-item">
                    <CustomLink className="nav-link fs-5" to="/myitems">
                      My Items
                    </CustomLink>
                  </li>
                </>
              )}

              <li className="nav-item">
                <CustomLink className="nav-link fs-5" to="/about">
                  About
                </CustomLink>
              </li>
            </ul>
            <div className="text-center">
              {user ? (
                <button onClick={handleSignOut} className="btn btn-success">
                  <FontAwesomeIcon
                    className="me-1"
                    icon={faUser}
                  ></FontAwesomeIcon>
                  Log out
                </button>
              ) : (
                <Link to="/login" className="btn btn-success px-4">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
