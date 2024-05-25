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
import { Link } from 'react-router-dom';

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
          <p className='hero-description'>
            A smile is like a beautiful piece of art that everyone can create. At our dental practice,
            we help you make your smile look its best. With our dental tokens, you get access to excellent
            dental care that keeps your teeth healthy and looking great. Just like an artist works on a painting,
            we work on your teeth to bring out your best smile. Your smile is special,
            and we’re here to help you show it off with confidence.</p>
          <div style={{width:"150px",background:"black",marginLeft:"8.7%",borderRadius:"20px",padding:"15px", textDecoration:"none"}}>
            <Link to={"/token"} className='hero-button12'>Book Appointment</Link>
          </div>
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
            <h4>General Dentistry</h4>
            <p>Our dental hospital provides a range of general dentistry services to keep 
              your teeth and gums healthy. Regular check-ups and cleanings are essential to prevent dental issues and maintain oral hygiene. During these visits, our skilled dentists examine your 
              teeth, gums, and mouth, and perform professional cleanings to remove plaque and tartar.</p>
          </div>
        </div>
        <div className="card">
          <div className='div1'>
            <h1>2</h1>
          </div>
          <div>
            <h4>Orthodontics</h4>
            <p> For patients seeking to correct misaligned teeth and bite issues, our dental hospital offers comprehensive orthodontic services. We provide traditional braces and modern clear aligners, such as Invisalign, to gradually straighten teeth and improve dental alignment. Our orthodontic specialists work closely with you to develop a
              personalized treatment plan tailored to your specific needs. After the main treatment, we provide retainers to help maintain the new position of your teeth and ensure lasting results.  </p>
          </div>
        </div>
        <div className="card">
          <div className='div1'>
            <h1>3</h1>
          </div>
          <div>
            <h4>Cosmetic Dentistry</h4>
            <p>Our cosmetic dentistry services are designed to enhance the appearance of your smile and boost your self-esteem. Professional teeth whitening procedures can effectively remove stains and brighten your teeth, giving you a radiant smile. For more extensive cosmetic improvements, we offer veneers—thin, custom-made shells that cover the
              front surface of your teeth to mask imperfections and create a uniform look.  </p>
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
          <p>We at Dental Token believe that a smile is a powerful form of expression and a true work of art.
            Our mission is to help every patient achieve a healthy, beautiful smile that they can confidently share with the world.
            We are dedicated to providing top-tier dental care using the latest technology and techniques in a warm, welcoming environment.
            Our team of skilled and compassionate dental professionals is committed to personalized care, ensuring that each patient receives
            treatments tailored to their unique needs. At Dental Token, we strive to make every visit a positive experience, because we
            understand that showing a smile is an art, and we're here to help you master it.</p>
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
