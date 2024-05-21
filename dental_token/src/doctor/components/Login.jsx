import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Login.css"
import logo from "../../logo.png";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setCredentials } from "../../slices/authSlice";
import { useLoginMutation } from "../../slices/usersApiSlice";

const Logindoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault()
    try {
      const res = await login({email, password}).unwrap();
      console.log(res)
      dispatch(setCredentials({...res,}));
      toast.success("Login Successful!")
      if(res.user.authorities[0].authority === "Receptionist"){
        navigate('/admin/dashboard')
      }else{
        navigate('/admin/docdash')
      }
      
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  };

  return (
    <div className="login-container">
      <div className="login-form123">
        <h1 className="hh1">Login to Your Account</h1>
        <input
        className="login12"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
        className="login12"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bun12" onClick={handleLogin}>Login</button>
      </div>
      <div className="login-illustration">
        <p>Plant smiles for a better world</p>
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: '70%', // Adjust the width as needed
            height: '70%', // This will maintain the aspect ratio of the image
            display: "block", // To ensure the image is a block-level element
            margin: "20px", // To center the image horizontally and add space
            marginTop: '-20%'
          }}
        />
      </div>
    </div>
  );
};

export default Logindoctor;
