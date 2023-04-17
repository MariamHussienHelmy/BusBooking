import React from 'react';
import './login.css';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Axios from "axios";

import { setAuthUser } from "../helper/Storage";
function Login() {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    let result = await Axios.post("http://localhost:8080/auth/login",
      {
        // data
        email: data.email,
        password: data.password

      })
      .then((resp) => {
        setAuthUser(resp.data);
      })
      .catch((e) => {

        const errors = e.response.data;

        if (errors.err) {
          setError('email', {
            type: "server",
            // message: "wrong email"
          });
        }
        if (errors.errors[0].msg) {
          setError('password', {
            type: "server",
            message: errors.errors[0].msg
          });
        }
      });

  };


  return (
    <div className="wrapper">

      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="input-box">
          <input type="text" placeholder="Enter your email" required {...register('email', {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.email && <p>{errors.email.message}  something went wrong with email</p>}
          <p> {errors.email && errors.email.message}</p>

        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required {...register('password', {
            minLength: 8
          })} />

          {errors.password && <p>{errors.password.message} password at least 8 characters</p>}

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
