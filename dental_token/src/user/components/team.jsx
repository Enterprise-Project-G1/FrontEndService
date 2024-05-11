// Team.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Doctors from "../img/doctors.png";
import Tashi from "../img/tashi.png";
import Tenzin from "../img/tenzin.png";
import Sancho from "../img/sancho.png";

import "../css/team.css";
import Header from "./header";
import Footer from "./footer";
import Nav from "./navigation";

const Team = () => {
  return (
    <>
     <Header/>
      <Nav/>
    <div className="team-container">
     
      <div className="team-section">
        <div className="team-info">
          <div className="team-text">
            <h2>Team to craft your smile</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/appointment" className="btn-book-appointment">
              Book Appointment
            </Link>
          </div>
          <div className="team-image">
            <img src={Doctors} alt="Team" />
          </div>
        </div>
      </div>
      {/* Next section with three boxes */}
      <div className="team-boxes">
        <div className="team-box">
          <div className="image-section">
            <img src={Tashi} alt="Team Member 1" />
          </div>
          <div className="text-section">
            <h3>Tashi Pema</h3>
            <p>Receptionist</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="image-section">
            <img src={Tashi} alt="Team Member 1" />
          </div>
          <div className="text-section">
            <h3>Tashi Pema</h3>
            <p>Receptionist</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="image-section">
            <img src={Tashi} alt="Team Member 1" />
          </div>
          <div className="text-section">
            <h3>Tashi Pema</h3>
            <p>Receptionist</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Team;
