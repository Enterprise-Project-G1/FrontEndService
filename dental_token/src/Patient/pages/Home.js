import React, { useState } from 'react';
import './Home.css';
import Smile from './images/smile.png';
import { Icon } from '@iconify/react';
import Logo from './images/fin LOGO.png';
import Feedback from './images/feedback.png';

const HomePage = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      feedback: ''
    });
  };
  return (
    <div>
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className='hero-title'>Showing Smile is an Art</h1>
          <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='hero-button'>Book Appointment</button>
        </div>
        <div className="hero-image">
          <img src={Smile} alt="Hero Image" />
        </div>
      </div>

      {/* Section Title with Icon */}
      <div className="section">
        <h3 className='section-title'>Our Services</h3>
        <div className="section-layer">
          <hr className='hr1'></hr>
          <Icon className='section-icon' icon="mdi:tooth-outline" />
          {/* <div className='hr'></div> */}
          <hr className='hr2'></hr>
        </div>
      </div>

      {/* Three Cards */}
      <div className="cards">
        <div className="card">
          <div className='div1'>
            <h1>1</h1>
          </div>
          <div>
            <h4>Dental Checkup</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div className="card">
          <div className='div1'>
            <h1>2</h1>
          </div>
          <div>
            <h4>Dental Checkup</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
        <div className="card">
          <div className='div1'>
            <h1>3</h1>
          </div>
          <div>
            <h4>Dental Checkup</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>

      {/* Section with Logo and Description */}
      <div className="section">
        <h3 className='section-title'>Who We Are</h3>
        <div className="section-layer">
          <hr className='hr1'></hr>
          {/* <div className='hr'></div> */}
          <Icon className='section-icon' icon="mdi:tooth-outline" />
          {/* <div className='hr'></div> */}
          <hr className='hr2'></hr>
        </div>
      </div>
      <div className="section-logo-description">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="description">
          <h1>We at Dental Token</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>

      {/* Section with Form */}
      <div className="section">
        <h3 className='section-title'>Testimoials</h3>
        <div className="section-layer">
          <hr className='hr1'></hr>
          <Icon className='section-icon' icon="mdi:tooth-outline" />
          <hr className='hr2'></hr>
        </div>
      </div>
      <div className='testimonials'>
        <div className='testCard'>
          <div className='icon'>
            <Icon className='arrow left' icon="oui:arrow-left" />
          </div>
          <div className='test-main-content'>
            <div className='quote'>
              <Icon className='quote-icon' icon="material-symbols:format-quote-outline" />
            </div>
            <div className='test-content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse </p>
              <p>~ Tashi Wangyel</p>
            </div>
          </div>
          <div className='icon'>
            <Icon className='arrow right' icon="oui:arrow-right" />
          </div>
        </div>
      </div>
      <div className="section">
        <h3 className='section-title'>Feedback</h3>
        <div className="section-layer">
          <hr className='hr1'></hr>
          <Icon className='section-icon' icon="mdi:tooth-outline" />
          <hr className='hr2'></hr>
        </div>
      </div>
      <div className="section-form">
        <div className="form-image">
          <img src={Feedback} alt="Logo" />
        </div>
        <div className='form-fields'>
          <form onSubmit={handleSubmit} className='form-container'>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='email'
              required
            />
            <textarea
              id="feedback"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder='feedback'
              required
            />
            <div className='form-submit' type="submit">Submit</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
