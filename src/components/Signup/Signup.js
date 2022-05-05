import React, { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import googleImg from "../../images/google.svg";
import "./Signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const cPassword = e.target.cpassword.value;

    console.log(name, email, password, cPassword);
    if (password != cPassword) {
      setError("Your password didn't match..!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be 6 characters");
      return;
    } else {
      createUserWithEmailAndPassword(email, password);
      setError("");
    }
  };
  if (user || googleUser) {
    navigate("/");
  }
  return (
    <div className="login-body" style={{ minHeight: "90vh" }}>
      <div className="container py-5">
        <div className="w-50 mx-auto login-form">
          <h4 className="text-center text-uppercase my-4 login-header">
            Create an account
          </h4>
          <form action="" onSubmit={handleSignup}>
            <input
              className="form-control"
              type="text"
              name="name"
              id=""
              placeholder="Your name"
            />
            <input
              className="form-control mt-4"
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
            <input
              className="form-control mt-4"
              type="password"
              name="cpassword"
              id=""
              placeholder="Confirm password"
            />
            {error}
            <div className="text-center mt-4">
              <input
                className="w-100 login-btn py-2 fw-bold rounded"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
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

export default Signup;
