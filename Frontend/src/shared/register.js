import React from "react";
import { useForm } from "react-hook-form";
import "./register.css";
import { Link } from 'react-router-dom';
import Axios from "axios";

//npm i react-axios
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    Axios.post("http://localhost:8080/auth/register",
      {
        // data
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password
      }
    )
    console.log(data);
  };

  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <input type="text" placeholder="Enter your name" {...register("name", { required: true })} required />
          {errors.name && <p className="error">enter your name</p>}
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your phone" {...register("phone", { required: true })} required />
          {errors.name && <p className="error">enter your name</p>}
        </div>
        <div className="input-box">
          <input type="email" placeholder="Enter your email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} required />
          {errors.email?.type === 'required' && <p className="error">enter your email</p>}
          {errors.email?.type === 'pattern' && <p className="error">enter a valid email</p>}
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" {...register("password", { required: true, minLength: 8 })} required />
          {errors.password?.type === 'required' && <p className="error">enter your password</p>}
          {errors.password?.type === 'minLength' && <p className="error">Password at least 8 characters</p>}
        </div>
        <div className="input-box button">

          <input type="submit" value="Register Now" />

        </div>
        <div className="text">
          <h3>
            Already have an account? <Link to="/login">Login now</Link>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Register;
