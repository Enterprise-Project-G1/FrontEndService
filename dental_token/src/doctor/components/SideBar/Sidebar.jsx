import React from "react";
// import './Sidebar.css'
import "../SideBar/Sidebar.css";
// import Logo from '../../image/fin LOGO.png';
import Logo from "../../image/fin LOGO.png";
import { Link } from "react-router-dom";
// import './../../App.css';
import "../../../App.css";
import { TbReportAnalytics } from "react-icons/tb";
import { TbFileText } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
    return (
        <div className="Sidebar1">
            <div style={{height:"120px",width:"120px"}}  className="logo1">
                <img style={{height:"120px",width:"120px"}} src={Logo} alt="" />
            </div>

            <div className="line1"></div>

            <div className="menu1">
                    <div className="menuItem1 ">
                        <span style={{fontSize:"20px"}}><TbReportAnalytics /></span>
                        {/* <span>Appointment</span> */}
                        <Link exact to="/dashboard">Appointment</Link>
                    </div>
                    <div className="menuItem1">
                        <span style={{fontSize:"20px"}}><TbFileText /></span>
                        {/* <span>Active Appointment</span> */}
                        <Link to="/activeapp">Active Appointment</Link>
                    </div>

            

            </div>
            <div className="line1 line21"></div>

            <div className="doctorInfo1">
                <div className="div11">
                    <p className="name1">Tashi Wangyal</p>
                    <p>Dentist</p>
                </div>

                <div className="info-btn1">
            <button style={{backgroundColor:"#373c3e", color:"white"}}><span style={{fontSize:"19px"}}><FiLogOut /> </span>Log Out</button>
                </div >
            

            </div>




        </div>
    )
}

export default Sidebar