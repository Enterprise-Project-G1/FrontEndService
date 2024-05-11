// Appointment.jsx

import React from 'react';
import Footer from './footer';
import Header from './header';
import Nav from './navigation';

const Appointment = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <div className="appointment-container">
 
      <h2>Book an Appointment</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />

        <button type="submit">Submit</button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default Appointment;
