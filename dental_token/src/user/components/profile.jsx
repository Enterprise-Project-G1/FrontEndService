import React, { useEffect, useState } from 'react';
import ProfileImage from '../img/profile.png';
import { useSelector } from 'react-redux';
import '../css/profile.css';
import Header from './header';
import Nav from './navigation';
import Footer from './footer';
import { toast } from 'react-toastify';
import { useGetPatientQuery } from '../slices/usersApiSlice';

const Profile = () => {
  const { data: patients, error, isLoading } = useGetPatientQuery();
  console.log(patients);
  const { userInfo } = useSelector(state => state.auth);
  console.log(userInfo);
  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch patient details");
    }
    if (patients && userInfo) {
      const patient = patients.find(patient => patient.email === userInfo.user.username);
      if (patient) {
        setPatientData(patient);
      }
    }
  }, [patients, userInfo, error, patientData]);

  return (
    <div className="profile-container">
      <Header />
      <Nav />
      <h2 className="profile-title">Account Details</h2>
      <div className="profile-section">
        <div className="profile-image-section">
          <img src={ProfileImage} alt="Profile" className="profile-image" />
        </div>
        {isLoading && <p>Loading details...</p>}
        {patientData && (
          <div className="profile-details-section">
            <div className="profile-details-row">
              <p><strong>{patientData.name}</strong></p>
            </div>
            <div className="profile-details-row double">
              <p>
                <span className="label">DOB:</span>
                <strong>{patientData.dateOfBirth}</strong>
              </p>
              <p>
                <span className="label">Email:</span>
                <strong>{patientData.email}</strong>
              </p>
            </div>
            <div className="profile-details-row double">
              <p>
                <span className="label">Contact No:</span>
                <strong>{patientData.phoneNumber}</strong>
              </p>
              <p>
                <span className="label">Gender:</span>
                <strong>{patientData.gender}</strong>
              </p>
            </div>
          </div>
        )}
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
      <Footer />
    </div>
  );
};

export default Profile;
