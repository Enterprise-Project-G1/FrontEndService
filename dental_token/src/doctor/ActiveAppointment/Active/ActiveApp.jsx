import React from "react";
import "../../components/MainDash/Maindash.css";
import Sidebar from "../../components/SideBar/Sidebar";
import "../../../App.css";

const Active = () => {
  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="MainDash">
        <div className="continer">
          <h1 className="h1">Active Appointment</h1>
        </div>

        <div className="outer">
          <div className="p">
            <div className="q">
              <h2 style={{ color: "#57C5CA" }}>Medical Report</h2>
              <div className="NDR">
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
              <button className="bttn">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
