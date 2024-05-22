import React from 'react';
import logo from '../img/logo.png'; // import your logo image
import phone from '../img/phone.png';
import mail from '../img/mail.png';
import '../css/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo123" />
        <p className="logo-name">Dental Token</p>
      </div>
      <div className="right-section">
        <div className="contact-info">
          <img src={phone} alt="Logo" className="contact-icon" />
          <p className="contact-text">+975 17234567</p>
        </div>
        <div className="mail-info">
          <img src={mail} alt="Logo" className="mail-icon" />
          <p className="contact-text">tabadental@gmail.com</p>
        </div>
      </div>
    </header>
  );
};

export default Header;