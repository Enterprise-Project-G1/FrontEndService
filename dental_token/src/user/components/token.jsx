import React, {useEffect, useState} from "react";
import "../css/token.css";
import Smile from "../img/smile.png";
import { Icon } from "@iconify/react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./navigation";
import { usePostAppointmentMutation, useGetPatientQuery, useGetAppointmentQuery } from "../../slices/usersApiSlice";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Token = () => {
  const [postAppointment] = usePostAppointmentMutation();
  const { data: patients, error} = useGetPatientQuery();
  const { data: appointments, aError} = useGetAppointmentQuery();
  const { userInfo } = useSelector(state => state.auth);
  const [patientData, setPatientData] = useState(null);
  const [patientId, setPatientId] = useState(null);
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error("Failed to fetch patient details");
    }else if(aError) {
      toast.error("Failed to fetch appointments");
    }
    if (patients && userInfo) {
      const patient = patients.find(patient => patient.email === userInfo.user.username);
      if (patient) {
        setPatientData(patient);
        setPatientId(patient.id);
      }
    }
  }, [patients, appointments, userInfo, error, aError, patientData]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  }

  const hadleReasonChange = (e) => {
    setReason(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const dateFromDatabase = new Date(date);
    dateFromDatabase.setHours(0, 0, 0, 0);

    const isNotEarlierThanToday = dateFromDatabase >= today;
  
    if(patientId === null){
      toast.error("Please login to book appointment!");
      navigate('/login');
    }else if(date === "" || reason === ""){
      toast.error("All fields are required!")
    }else if(isNotEarlierThanToday === false){
      toast.error("Invalid date provided for appointment!")
    }else{
      const cAppointment = appointments.find(appointment => appointment.patientId === patientId);
      if(cAppointment){
        toast.error("You already have an appointment.")
      }else{
        try{
          await postAppointment({patientId, date, reason}).unwrap();
          toast.success("Appointment Sent Successfully!")
          window.location.reload();
        }catch (err){
          toast.error(err?.data?.message || err.error)
        }
      }
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <Header/>
      <Nav/>
      <div className="hero-banner123">
        <div className="hero-content123">
          <h1 className="hero-title123" style={{marginLeft:"2%"}}>Book Appointment</h1>
          <p className="hero-description123">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          {/* <button className='hero-button'>Book Appointment</button> */}
        </div>
        <div className="hero-image13">
          <img
            src={Smile}
            alt="HeroImage"
            style={{
              // maxWidth: "1000px",
              // width:"auto",
              height: "650px",
              float: "right",
              // marginLeft: '10%',
              marginRight: "4%",
              marginTop: "-31%",
            }}
          />
        </div>
      </div>

      {/* Section Title with Icon */}
      <div className="section">
        <h3 className="section-title" style={{color:'#57C5CA'}}>Active Token</h3>
        <div className="section-layer">
          <div className="hr11">
            <hr></hr>
          </div>
          <div className="icon">
            <Icon icon="mdi:tooth-outline" />
          </div>
          <div className="hr22">
            <hr></hr>
          </div>
        </div>
      </div>
      <div>
        <main className="main-content">
          <section className="active-token">
            <div>
              <div className="num1">
                {/* <p> <Icon icon="mdi:tooth-outline" /></p> */}
                <Icon icon="material-symbols:format-quote-outline" />

              </div>
              <div className="num2">
                {/* <p> <Icon icon="mdi:tooth-outline" /></p> */}
                <Icon icon="material-symbols:format-quote-outline" />

              </div>
              <div className="num3">
                <p>12</p>
              </div>
            </div>
            <div>
              <h3 style={{ marginTop: "-4%", color:'#57C5CA', textAlign:"center"}}>Book Now</h3>
              <div className="section-layer">
                <div className="hr11">
                  <hr></hr>
                </div>
                <div className="icon">
                  <Icon className="section-icon" icon="mdi:tooth-outline" />
                </div>
                <div className="hr22">
                  <hr></hr>
                </div>
              </div>
            </div>
          </section>
          <div className="form123">
            <form id="booking-form123">
              <h3>Get your turn now</h3>
              <input className="in33" onChange={handleDateChange} id="date" type="date" value={date} name="Date" placeholder="Date" />
              <input className="in34" onChange={hadleReasonChange} id="reason" type="text" value={reason} name="phone" placeholder="Reason" />
              <button onClick={handleSubmit} type="submit">Book Appointment</button>
              {/* <h3>Book Now</h3> */}
            </form>
          </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Token;
