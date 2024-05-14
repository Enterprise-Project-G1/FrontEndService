import React from 'react';
import ProfileImage from '../img/profile.png';
import '../css/profile.css';
import Header from './header';
import Nav from './navigation';
import Footer from './footer';

const Profile = () => {
  return (

    <div className="profile-container">
      <Header/>
      <Nav/>
      <h2 className="profile-title">Account Details</h2>
      <div className="profile-section">
        <div className="profile-image-section">
          <img src={ProfileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-details-section">
          <div className="profile-details-row">
            <p><strong>Tashi Wangyel</strong></p>
          </div>
          <div className="profile-details-row double">
            <p>
              <span className="label">DOB:</span>
              <strong>20/04/2002</strong>
            </p>
            <p>
              <span className="label">Email:</span>
              <strong>bajayfs@gmail.com</strong>
            </p>
          </div>
          <div className="profile-details-row double">
            <p>
              <span className="label">Contact No:</span>
              <strong>77864017</strong>
            </p>
            <p>
              <span className="label">Gender:</span>
              <strong>Male</strong>
            </p>
          </div>
        </div>
      </div>
      <h2 className="documents-title">My Documents</h2>
      <div className="documents-container">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div className="document" key={index}>
            <div className="document-content">
              <p className='date'>12/03/2024</p>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;