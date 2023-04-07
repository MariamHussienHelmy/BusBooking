import React from "react";
import "./register.css";
const Register = () => {
  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" required />
        </div>
        <div className="input-box button">
          <input type="submit" value="Register Now" />
        </div>
        <div className="text">
          <h3>
            Already have an account? <a href="#">Login now</a>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Register;
