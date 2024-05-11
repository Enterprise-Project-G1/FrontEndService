// Profile.jsx

import React from 'react';
import ProfileImage from '../img/doctors.png'; // Import your profile image
import '../css/profile.css';
import Header from './header';
import Footer from './footer';
import Nav from './navigation';

const Profile = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <div className="profile-container">
      <h2 className="profile-title">Account Details</h2>
      <div className="profile-section">
        <div className="profile-image">
          <img src={ProfileImage} alt="Profile" />
        </div>
        <div className="profile-details">
          <p><strong>Account Name:</strong> John Doe</p>
          <p><strong>DOB:</strong> January 1, 1990</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Contact No:</strong> +1234567890</p>
          <p><strong>Gender:</strong> Male</p>
        </div>
      </div>
      <h2 className="documents-title">My Documents</h2>
      <div className="documents-container">
        <div className="document">
          <p>Date: January 1, 2024</p>
        </div>
        <div className="document">
          <p>Date: February 15, 2024</p>
        </div>
        <div className="document">
          <p>Date: March 10, 2024</p>
        </div>
        {/* Add more documents as needed */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
