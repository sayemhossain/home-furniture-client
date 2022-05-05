import React from "react";
import { Link } from "react-router-dom";
import googleImg from "../../images/google.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-body">
      <div className="container" style={{ minHeight: "90vh" }}>
        <div className="w-50 mx-auto login-form">
          <h4 className="text-center text-uppercase my-4 login-header">
            Login Please
          </h4>
          <form action="">
            <input
              className="form-control"
              type="email"
              name="email"
              id=""
              placeholder="Enter email"
            ></input>
            <input
              className="form-control mt-4"
              type="password"
              name=""
              id=""
              placeholder="Your password"
            />
            <div className="text-center mt-4">
              <input
                className="w-100 login-btn py-2 fw-bold rounded"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="signip-link">
              Create an account
            </Link>
          </p>
          <div className="d-flex justify-content-center px-5">
            <hr className="w-50" /> <p className="px-2">or</p>
            <hr className="w-50" />
          </div>
          <div className="text-center w-100">
            <button className="btn google-btn">
              <img src={googleImg} alt="" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
