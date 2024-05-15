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
              <input className="in33" type="text" name="Date" placeholder="Date" style={{color:'blue'}} />
              <input className="in34" type="tel" name="phone" placeholder="Reason" />
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
