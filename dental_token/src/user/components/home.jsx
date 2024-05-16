import React, { useState, useEffect } from 'react';
import "../../user/css/Home.css";
import Smile from "../../user/img/smile.png";
import { Icon } from '@iconify/react';
import Logo from "../../user/img/fin LOGO.png";
import FeedbackImg from "../../user/img/feedback.png";
import Header from './header';
import Footer from './footer';
import Nav from './navigation';
import { useFeedbackMutation, useGetFeedbackQuery } from '../../slices/usersApiSlice';
import { toast } from 'react-toastify';

const Home = () => {
  const { data: feedbacks, error, isLoading } = useGetFeedbackQuery();
  const [postFeedback] = useFeedbackMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch testimonials");
    }
  }, [feedbacks, error]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const handlePreviousTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || feedback === "") {
      toast.error("All fields are required!")
    } else {
      try {
        await postFeedback({ name, email, feedback }).unwrap();
        toast.success("Feedback sent successfully!")
        window.location.reload();
      } catch (err) {
        toast.error(err?.data?.message || err.error)
      }
    }

  };

  return (
    <div>
      {/* Hero Banner */}
      <Header />
      <Nav />
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className='hero-title12'>Showing Smile is an Art</h1>
          <p className='hero-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className='hero-button12'>Book Appointment</button>
        </div>
        <div className="hero-image">
          <img src={Smile} alt='Smile' />
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
        <div className="logo10">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="description1">
          <h1 className='he'>We at Dental Token</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="section">
        <h3 className='section-title'>Testimoials</h3>
        <div className="section-layer">
          <hr className='hr1'></hr>
          <Icon className='section-icon' icon="mdi:tooth-outline" />
          <hr className='hr2'></hr>
        </div>
      </div>
      <div className='testimonials'>
        {isLoading && <p>Loading testimonials...</p>}
        {feedbacks && feedbacks.length > 0 && (
          <div className='testCard'>
            <div onClick={handlePreviousTestimonial} className='icon10'>
              <Icon className='arrow10 left' icon="oui:arrow-left" />
            </div>
            <div className='test-main-content'>
              <div className='quote10'>
                <Icon className='quote-icon10' icon="material-symbols:format-quote-outline" />
              </div>
              <div className='test-content'>
                <p>{feedbacks[currentTestimonialIndex].feedback}</p>
                <p>~ {feedbacks[currentTestimonialIndex].name}</p>
              </div>
            </div>
            <div onClick={handleNextTestimonial} className='icon10'>
              <Icon className='arrow10 right' icon="oui:arrow-right" />
            </div>
          </div>
        )}
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
          <img src={FeedbackImg} alt="Feedback" />
        </div>
        <div className='form-fields'>
          <form onSubmit={handleSubmit} className='form-container10'>
            <input
              className='in12'
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder='Name'
              required
            />
            <input
              className='in12'
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder='Email'
              required
            />
            <textarea
              className='in13'
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder='Feedback'
              required
            />
            <button onClick={handleSubmit} type="submit" className='form-submit'>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
