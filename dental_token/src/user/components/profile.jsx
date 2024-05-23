import React, { useEffect, useState } from 'react';
import ProfileImage from '../img/profile.png';
import { useSelector } from 'react-redux';
import '../css/profile.css';
import Header from './header';
import Nav from './navigation';
import Footer from './footer';
import { toast } from 'react-toastify';
import { useGetPatientQuery } from '../../slices/usersApiSlice';

const Profile = () => {
  const { data: patients, error, isLoading } = useGetPatientQuery();
  const { userInfo } = useSelector(state => state.auth);
  const [patientData, setPatientData] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [showToast, setShowToast] = useState(false);



  const handleView = () => {
    setShowModel(true);
  }
  const handleDelete = () => {
    setShowToast(true);
    setShowModel(false);

  }

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
          <div onClick={handleView} className="document" key={index}>
            <div className="document-content">
              <p className='date'>12/03/2024</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />

      {showModel && (
        <div className="overlayt">
          <div className='overlay-contentt'>
            <div onClick={() => setShowModel(false)} style={{ alignSelf: "end" }}><i class="fa-solid fa-xmark"></i></div>
            <h2>Medical Reciept</h2>
            <div style={{ height: "1px", width: "95%", background: "#C6C6C6" }}></div>
            <div style={{ width: "80%", display: "flex", flexWrap: "wrap", gap: "50px" }}>
              <div>
                <p>Name:</p>
                <h4>Tashi Wangyel</h4>
              </div>
              <div>
                <p>Contact Number:</p>
                <h4>123456756</h4>
              </div>
              <div>
                <p>Email:</p>
                <h4>Tashi@gmail.com</h4>
              </div>
            </div>
            <div style={{ height: "1px", width: "95%", background: "#C6C6C6" }}></div>
            <div style={{ width: "80%", display: "flex", flexWrap: "wrap", flexDirection: "column", alignItems: "flex-start" }}>
              <h3>Details</h3>
              <p style={{ textAlign: "start" }}>sdfghj cdhsg fdv gdfdgd vfdgfd fsgdf
                sdgd dgdzgshjkl fdgdghjk dfgh jdfghj dfgh jdfgh jk
                sdfghj dfgh jsdfghjk dfghj dfgh jsdfgh dfgh dfgh dfgh dfg
                dfghjdfghj fgh jkfghjk fghjk ertyu ifgh jkrtyui rty uityu i
                d fghj edfrgh jfg hj fghjkd fghj fghjkf ghjk ghjk ghj
              </p>
              <p>Date</p>
              <h3>12/3/2323</h3>
            </div>
            <div>
              <button style={{ background: "red", width: "110px" }} onClick={handleDelete}>Delete</button>
            </div>

          </div>
        </div>
      )}

      {showToast && (
        <div className="overlay" onClick={() => setShowToast(false)} />
      )}
      {showToast && (
        <div className="toast" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#FFFFFF', color: '#000', padding: '10px 20px', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: '1000' }}>
          <p style={{ marginBottom: '10px' }}>Are you sure you want to delete Medical report.</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '70%', gap: "10px" }}>
            <button onClick={() => setShowToast(false)} className="toast-button" style={{ color: 'white', backgroundColor: '#FF0000', minWidth: '120px' }}>Delete</button>

            <button onClick={() => setShowToast(false)} className="toast-button" style={{ color: '#373C3E', minWidth: '120px' }}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;
