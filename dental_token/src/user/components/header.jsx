import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../img/logo.png'; // import your logo image
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo" />
        <p className="logo-name">Dental Token</p>
      </div>
      <div className="right-section">
        <div className="contact-info">
          <FaPhone className="contact-icon" />
          <p className="contact-text">+975 17234567</p>
        </div>
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p className="contact-text">bajay@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
