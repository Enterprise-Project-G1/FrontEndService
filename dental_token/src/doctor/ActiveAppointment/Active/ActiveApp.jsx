import React from "react";
import "../../components/MainDash/Maindash.css";
import Sidebar from "../../components/SideBar/Sidebar";
import "../../../App.css";

const Active = () => {
  return (
    <div className="AppGlass1">
      <Sidebar />
      <div className="MainDash1">
        <div className="continer1">
          <h1 className="h11">Active Appointment</h1>
        </div>

        <div className="outer1">
          <div style={{width:"905px"}} className="p1">
            <div style={{width:"605px"}} className="q1">
              <h2 style={{ color: "#57C5CA" }}>Medical Report</h2>
              <div className="NDR1">
                <input
                  type="text"
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                  placeholder="Name"
                />
                <input
                  type="date"
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                  placeholder="Date"
                />
                <input
                  type="text"
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                  placeholder="Reason"
                />
              </div>
              <div style={{width:"100%"}}>
                <input
                  type="text"
                  style={{width:"100%"}}
                  //   value={inputValue}
                  //   onChange={handleInputChange}
                  placeholder="Report and Medication"
                />
              </div>
              <button className="bttn1">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
