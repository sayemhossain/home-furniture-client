import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import googleImg from "../../images/google.svg";
import "./Login.css";
import "react-toastify/dist/ReactToastify.css";
import { async } from "@firebase/util";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, loginerror] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  let from = location.state?.from?.pathname || "/";
  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    if (loginerror) {
      setError("Your password didn't match..!");
      return;
    } else {
      await signInWithEmailAndPassword(email, password);
      const { data } = await axios.post(
        "https://lit-brook-11922.herokuapp.com/login",
        {
          email,
        }
      );
      localStorage.setItem("accessToken", data);
      navigate(from, { replace: true });
    }
  };
  // this is for reset password
  const handleResetPassword = () => {
    const email = emailRef.current.value;
    sendPasswordResetEmail(email);
    toast("Sent Email");
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
            {error}
            {error ? (
              <p>
                Forgot password?
                <span
                  className="text-primary ms-1"
                  onClick={() => handleResetPassword()}
                >
                  Reset Password
                </span>
              </p>
            ) : (
              ""
            )}
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
