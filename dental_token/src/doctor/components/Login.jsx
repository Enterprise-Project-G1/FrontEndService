import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../css/Login.css";
import "../components/Login.css"
// import logo from "../logo.png";
import logo from "../../logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // If login is successful, navigate to the dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to Your Account</h1>
        <input
          style={{ borderRadius: "7px" }}
          className="input1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{ borderRadius: "7px" }}
          className="input1"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button1" onClick={handleLogin}>Login</button>
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

export default Login;
