import React from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import word from '../Usercomponents/Header';
import Axios from "axios";
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let result = await Axios.post("http://localhost:8080/auth/login",
      {
        // data
        email: data.email,
        password: data.password

      },

    );


    localStorage.setItem("token", (result.data.token));

    console.log(result);

  };


  return (
    <div className="wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="input-box">
          <input type="text" placeholder="Enter your email" required {...register('email', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email && <p className="error-message">Invalid email format</p>}
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required {...register('password', {
            minLength: 8
          })} />
          {errors.password && <p className="error-message">Password at least 8 characters</p>}
        </div>

        <div className="input-box button">
          <input type="Submit" value="Login" />
        </div>
        <div className="text">
          <h3>Don't have an account? <Link to="/register">Register now</Link></h3>
        </div>
      </form>
    </div>
  );
}
export default Login;
