import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa';
import '../css/footer.css'; // Import CSS file for styling
import logo from '../img/logo2.png'; // import your logo image


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="contact">
          <h3 className='header'>Contact</h3>
          <p className="logo-description contact-des">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
        </div>
      </div>
      <div className="footer-middle">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="logo-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
      </div>
      <div className="footer-right">
        <div className="social">
          <h3 className='header'>Social</h3>
        </div>
        <div className="social-icons">
          <FaWhatsapp className="icon" />
          <FaInstagram className="icon" />
          <FaFacebook className="icon" />
          <FaTelegram className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
