// Login.jsx
import React, { useState } from "react";
import "../css/login.css";
import { Link } from 'react-router-dom';
import logo from "../img/logo.png"

const Loginuser = () => {
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    // If login is successful, navigate to the dashboard
    // navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login to Your Account</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/home" className="buttonl" onClick={handleLogin}>Login</Link>
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

