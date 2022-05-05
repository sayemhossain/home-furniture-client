import React from "react";

const Login = () => {
  return (
    <div className="container" style={{ minHeight: "80vh" }}>
      <div className="w-50 mx-auto">
        <h4 className="text-center text-uppercase my-4">Login Please</h4>
        <form action="">
          <input className="form-control" type="email" name="email" id="" />
          <input className="form-control mt-4" type="password" name="" id="" />
        </form>
      </div>
    </div>
  );
};

export default Login;
