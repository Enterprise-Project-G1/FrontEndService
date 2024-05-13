import React from "react";
import "../css/token.css";
// import Smile from "../image/smile.png";
import Smile from "../img/smile.png";

import { Icon } from "@iconify/react";
import Header from "./header";
import Footer from "./footer";
import Nav from "./navigation";

const Token = () => {
  return (
    <div>
      {/* Hero Banner */}
      <Header/>
      <Nav/>
      <div className="hero-banner">
        <div className="hero-content">
          <h1 className="hero-title">Book Appointment</h1>
          <p className="hero-description">
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
        <div className="hero-image">
          <img
            src={Smile}
            alt="HeroImage"
            style={{
              maxWidth: "400px",
              height: "auto",
              float: "right",
              // marginLeft: '10%',
              marginRight: "10%",
              marginTop: "-21.1%",
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
                <p>99</p>
              </div>
              <div className="num2">
                <p>99</p>
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
          <div className="form">
            <form id="booking-form">
              <h3>Get your turn now</h3>
              <input type="text" name="Date" placeholder="Date" style={{color:'blue'}} />
              <input type="tel" name="phone" placeholder="Reason" />
              <button type="submit">Book Appointment</button>
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
