// Notification.jsx
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Header from './header';
import Footer from './footer';
import Nav from './navigation';
// import { Link } from "react-router-dom";
import img from "../img/Vector.png";
import "./../css/notification.css"
import { useGetPatientQuery, useGetNotificationQuery, useDeleteNotificationMutation } from "../../slices/usersApiSlice";

const Notification = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { userInfo } = useSelector(state => state.auth);
  const { data: patients, error } = useGetPatientQuery();
  const { data: notifications, nError } = useGetNotificationQuery();
  const [id, setId] = useState(null);
  const [recieverId, setRecieverId]= useState(null);
  const [deleteNotification] = useDeleteNotificationMutation();

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch patient details");
    } else if (nError) {
      toast.error("Failed to fetch the notifications.")
    }
    if (patients && userInfo) {
      const patient = patients.find(patient => patient.email === userInfo.user.username);
      if (patient) {
        setRecieverId(patient.id);
      }
    }
  }, [patients, userInfo, error, nError])

  const handleDelete = (id) => {
    setId(id);
    setShowOverlay(true);
  };

  const handleConfirmDelete = async(e) => {
    e.preventDefault();
    try {
      await deleteNotification(id);
      toast.success("Notification deleted successfully!")
      window.location.reload();
    }catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  };

  const handleCancelDelete = () => {
    setShowOverlay(false);
  };
  return (
    <>
      <Header />
      <Nav />
      <div>

        <div className="outer">

          <div className="inner">
            <h2>Notification</h2>

            {/* <div className="main"> */}
            {notifications && notifications.map((notification) => {
              if (notification.recieverId === recieverId.toString()) {
                return (
                  <div className="all">
                    <div className="emp"></div>
                    <div className="each">
                      <img src={img} alt="img" />
                      <p style={{ width: "88%", color: "white" }}>
                        {notification.message}
                      </p>
                      <i onClick={() => handleDelete(notification.id)} style={{ fontSize: "28px", color: "#57C5CA" }} class="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                )
              }
              return null;
            })

            }
          </div>
        </div>
        {showOverlay && (
          <div className="overlay">
            <div className="overlay-content">
              <h2>Are you sure you want to delete the notification?</h2>
              <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmDelete}>Yes</button>
              <button className="btn" onClick={handleCancelDelete}>No</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Notification;
