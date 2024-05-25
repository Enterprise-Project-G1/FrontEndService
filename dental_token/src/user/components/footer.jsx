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
          <p className="logo-description contact-des">If you have any questions, need assistance, or would like to explore collaboration opportunities, feel free to reach out to us. You can contact us via email at tashi@gmail.com or by phone at 17613552. Our team is dedicated to providing prompt and helpful assistance to address your needs and inquiries. We look forward to hearing from you!</p>
        </div>
      </div>
      <div className="footer-middle">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p className="logo-description">
          Creating a website where users can book dental appointments using a token system is an innovative approach to streamlining the booking process and adding value for both patients and dental practices. The platform will feature a user-friendly interface where patients can view available appointment slots and confirm bookings using tokens, which they can acquire through various means.  </p>
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
