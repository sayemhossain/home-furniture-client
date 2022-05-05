import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import googleImg from "../../images/google.svg";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, loginerror] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  console.log(from);
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (loginerror) {
      setError("Your password didn't match..!");
      return;
    } else {
      signInWithEmailAndPassword(email, password);
    }
  };

  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-body" style={{ minHeight: "90vh" }}>
      <div className="container py-5">
        <div className="w-50 mx-auto login-form">
          <h4 className="text-center text-uppercase my-4 login-header">
            Login Please
          </h4>
          <form action="" onSubmit={handleLogin}>
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
              name="password"
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
            <button
              className="btn google-btn"
              onClick={() => signInWithGoogle()}
            >
              <img src={googleImg} alt="" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
