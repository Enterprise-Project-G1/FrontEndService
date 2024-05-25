// Team.jsx

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Doctors from "../img/doctors.png";
import Tashi from "../img/tashi.png";
// import Header from "../"
import Header from "../components/header";
import Nav from "../components/navigation";
import Footer from "../components/footer";
// import Tenzin from "../img/tenzin.png";
// import Sancho from "../img/sancho.png";
import { Icon } from "@iconify/react";


import "../css/team.css";

const Team = () => {
  return (
    <div className="team-container">
      <Header />
      <Nav />
      <div className="team-section">
        <div className="team-info">
          <div className="team-text">
            <h2>Team to craft your smile</h2>
            <p>
              Think of your smile as a masterpiece,
              and the "team to craft your smile" as the group of artists
              and technicians working together to make it perfect. Dentists
              make sure your teeth are healthy, orthodontists straighten them
              out if they're crooked, hygienists keep everything clean, and
              cosmetic dental experts add those final touches to make your smile sparkle.
              It's like having a dream team dedicated to making sure your smile is both beautiful and healthy!
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
        <div className="section">
          <h3 className='section-title'>Our Team</h3>
          <div className="section-layer">
            <hr className='hr1'></hr>
            <Icon className='section-icon' icon="mdi:tooth-outline" />
            {/* <div className='hr'></div> */}
            <hr className='hr2'></hr>
          </div>
        </div>
        <div className="team-box">
          <div className="image-section">
            <img src={Tashi} alt="Team Member 1" />
          </div>
          <div className="text-section">
            <h1>Tashi Pema</h1>
            <h3>Receptionist</h3>
            <p>
              As a receptionist in a dental practice,
              my motive and inspiration revolve around fostering
              a supportive and welcoming atmosphere for every patient
              who walks through the door or calls on the phone. I'm driven
              by the opportunity to make a positive difference in someone's day,
              whether it's by offering a friendly greeting, providing helpful
              information, or simply lending a sympathetic ear. My inspiration
              comes from seeing the transformative impact that a healthy and confident
              smile can have on a person's life. Knowing that I'm part of a team
              dedicated to improving people's oral health and overall well-being fills
              me with a sense of purpose and pride in what I do.
            </p>
            <p>
              I became a receptionist in a dental practice because
              I've always been drawn to roles where I can interact
              with and assist people. The idea of being at the forefront
              of a healthcare setting, welcoming patients, and helping
              them navigate their appointments resonated with me. I
              find joy in providing excellent customer service and
              creating a positive experience for others. Additionally,
              the dental field intrigued me because it combines healthcare
              with aesthetics, and I'm passionate about both aspects of wellness.
              Being a receptionist allows me to be a part of a team that prioritizes
              patient care and promotes overall well-being, which aligns with my values
              and interests.
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="image-section">
            <img src={Tashi} alt="Team Member 1" />
          </div>
          <div className="text-section">
            <h1>Tashi Pema</h1>
            <h3>Receptionist</h3>
            <p>
              As a receptionist in a dental practice,
              my motive and inspiration revolve around fostering
              a supportive and welcoming atmosphere for every patient
              who walks through the door or calls on the phone. I'm driven
              by the opportunity to make a positive difference in someone's day,
              whether it's by offering a friendly greeting, providing helpful
              information, or simply lending a sympathetic ear. My inspiration
              comes from seeing the transformative impact that a healthy and confident
              smile can have on a person's life. Knowing that I'm part of a team
              dedicated to improving people's oral health and overall well-being fills
              me with a sense of purpose and pride in what I do.
            </p>
            <p>
              I became a receptionist in a dental practice because
              I've always been drawn to roles where I can interact
              with and assist people. The idea of being at the forefront
              of a healthcare setting, welcoming patients, and helping
              them navigate their appointments resonated with me. I
              find joy in providing excellent customer service and
              creating a positive experience for others. Additionally,
              the dental field intrigued me because it combines healthcare
              with aesthetics, and I'm passionate about both aspects of wellness.
              Being a receptionist allows me to be a part of a team that prioritizes
              patient care and promotes overall well-being, which aligns with my values
              and interests.
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="image-section">
            <img src={Tashi} alt="Team Member 1" />
          </div>
          <div className="text-section">
            <h1>Tashi Pema</h1>
            <h3>Receptionist</h3>
            <p>
              As a receptionist in a dental practice,
              my motive and inspiration revolve around fostering
              a supportive and welcoming atmosphere for every patient
              who walks through the door or calls on the phone. I'm driven
              by the opportunity to make a positive difference in someone's day,
              whether it's by offering a friendly greeting, providing helpful
              information, or simply lending a sympathetic ear. My inspiration
              comes from seeing the transformative impact that a healthy and confident
              smile can have on a person's life. Knowing that I'm part of a team
              dedicated to improving people's oral health and overall well-being fills
              me with a sense of purpose and pride in what I do.
            </p>
            <p>
            I became a receptionist in a dental practice because
              I've always been drawn to roles where I can interact
              with and assist people. The idea of being at the forefront
              of a healthcare setting, welcoming patients, and helping
              them navigate their appointments resonated with me. I
              find joy in providing excellent customer service and
              creating a positive experience for others. Additionally,
              the dental field intrigued me because it combines healthcare
              with aesthetics, and I'm passionate about both aspects of wellness.
              Being a receptionist allows me to be a part of a team that prioritizes
              patient care and promotes overall well-being, which aligns with my values
              and interests.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;