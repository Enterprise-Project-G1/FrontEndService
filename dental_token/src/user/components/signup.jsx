import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../css/signup.css";
import { toast } from 'react-toastify';
import logo from "../img/logo.png";
import { useRegisterMutation } from '../slices/usersApiSlice';

const Signup = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateofBirth] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleDateOfBirthChange = (e) => {
    setDateofBirth(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      await register({ name, gender, email, phoneNumber, dateOfBirth, password}).unwrap();
      toast.success("User Registration Successful!")
      navigate("/login")
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
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
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="p1">
          <input
            type="text"
            name="gender"
            id="gender"
            placeholder="Gender"
            value={gender}
            onChange={handleGenderChange}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="p2">
          <input
            type="text"
            name="phoneNumber"
            id="contactno"
            placeholder="Contact Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />

          <input
            type="text"
            name="dateOfBirth"
            id="dob"
            placeholder="Date of Birth (dd/mm/yyyy)"
            value={dateOfBirth}
            onChange={handleDateOfBirthChange}
          />
        </div>
        <div className="p3">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmpass"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        <button className="bu2" onClick={handleSignUp}>Signup</button>


        <p style={{ marginLeft: "30%", marginTop: "4%" }}>
          Already have an account? <Link to="/login" style={{ color: 'black', textDecoration: 'underline', fontFamily: "Roboto" }}>Login</Link>
        </p>
      </div>
      <div className="signup-illustration">
        <p>A better life starts with a beautiful smile</p>
        <img
          src={logo}
          alt="logo"
          style={{
            maxWidth: "70%",
            height: "50%",
            display: "block",
            margin: "20px",
          }}
        />
      </div>
    </div>
  );
};


export default Signup;
