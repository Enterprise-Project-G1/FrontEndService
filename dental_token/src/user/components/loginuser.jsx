// Login.jsx
import React, { useState } from "react";
import "../css/login.css";
import { useDispatch} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import { setCredentials } from "../slices/authSlice";
import { useLoginMutation } from '../slices/usersApiSlice'
// import logo from "../img/logo.png"
import logo from "../img/fin LOGO.png";

const Loginuser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useLoginMutation();


  const handleLogin = async(e) => {
    e.preventDefault()
    try{
        const res = await login({email, password}).unwrap();
        dispatch(setCredentials({...res,}));
        toast.success("Login Successful!")
        navigate("/")
    }catch(err){
        toast.error(err?.data?.message || err.error)
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to Your Account</h1>
        <input
        className="in"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className="in"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link className="buttonl" onClick={handleLogin}>Login</Link>
        <p className="nn">
          Don't have an account? <Link  to="/Signup" style={{ color: 'black', textDecoration: 'underline' }}>Register</Link>
        </p>

      </div>
      <div className="login-illustration">
        <p>A better life starts with a beautiful smile</p>
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: '70%', // Adjust the width as needed
            height: '50%', // This will maintain the aspect ratio of the image
            display: "block", // To ensure the image is a block-level element
            margin: "20px", // To center the image horizontally and add space
            marginTop: '-15%'
          }}
        />
      </div>
    </div>
  );
};

export default Loginuser;

