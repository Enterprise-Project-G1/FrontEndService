import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../css/signup.css";
// import logo from "../image/logo.png";
import logo from "../img/logo.png";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    gender: '',
    email: '',
    contactNumber: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('User Details:', userDetails);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Create an Account</h1>
        <div className="name">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={userDetails.name}
          onChange={handleInputChange}
        />
        </div>
        <div className="p1">
        <input
          type="text"
          name="gender"
          id="gender"
          placeholder="Gender"
          value={userDetails.gender}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleInputChange}
        />
        </div>
        <div className="p2">
        <input
          type="text"
          name="contactNumber"
          id="contactno"
          placeholder="Contact Number"
          value={userDetails.contactNumber}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="dob"
          id="dob"
          placeholder="Date of Birth"
          value={userDetails.dob}
          onChange={handleInputChange}
        />
        </div>
        <div className="p3">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={userDetails.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmpass"
          placeholder="Confirm Password"
          value={userDetails.confirmPassword}
          onChange={handleInputChange}
        />
        </div>

        <button className="bu2" onClick={handleSignUp}>Signup</button>
       
        
          <p style={{marginLeft:"30%", marginTop:"4%"}}>
          Already have an account? <Link to="/login" style={{ color: 'black', textDecoration: 'underline', fontFamily: "Roboto" }}>Login</Link>
        
        </p>
      </div>
      <div className="signup-illustration">
        <p>A better life starts with a beautiful smile</p>
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: "70%", // Adjust the width as needed
            height: "50%", // This will maintain the aspect ratio of the image
            display: "block", // To ensure the image is a block-level element
            margin: "20px", // To center the image horizontally and add space
            // marginTop: "-15%",
          }}
        />
      </div>
    </div>
  );
};


export default Signup;
