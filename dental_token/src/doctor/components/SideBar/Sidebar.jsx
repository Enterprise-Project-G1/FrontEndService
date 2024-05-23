import React, { useEffect, useState } from "react";
import "../SideBar/Sidebar.css";
import Logo from "../../image/fin LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import "../../../App.css";
import { TbReportAnalytics } from "react-icons/tb";
import { TbFileText } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { useGetUsersQuery, useLogoutMutation } from "../../../slices/usersApiSlice";
import { toast } from "react-toastify";
import { logout } from "../../../slices/authSlice";

const Sidebar = () => {
    const { data: users, error } = useGetUsersQuery();
    const { userInfo } = useSelector(state => state.auth);
    const [userData, setUserData] = useState();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/admin');

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch user details!")
        }
        if (users && userInfo) {
            const user = users.find(user => user.email === userInfo.user.username);
            if (user) {
                setUserData(user);
            }
        }
    }, [users, userInfo, error, userData])
    return (
        <div className="Sidebar">
            <div style={{ width: "150px", height: "150px" }} className="logo">
                <img style={{ width: "150px", height: "150px" }} src={Logo} alt="" />
            </div>

            <div className="line"></div>

            <div className="menu">
                <div className="menuItem ">
                    <span style={{ fontSize: "20px" }}><TbReportAnalytics /></span>
                    {/* <span>Appointment</span> */}
                    <Link exact to="/admin/docdash">Appointment</Link>
                </div>
                <div className="menuItem">
                    <span style={{ fontSize: "20px" }}><TbFileText /></span>
                    {/* <span>Active Appointment</span> */}
                    <Link to="/admin/active">Active Appointment</Link>
                </div>



            </div>
            <div className="line line2"></div>

            <div className="doctorInfo">
                <div className="div1">
                    {userData && (
                        <p className="name">{userData.name}</p>
                    )}
                    <p>Dentist</p>
                </div>

                <div className="info-btn">
                    <button onClick={logoutHandler} style={{ backgroundColor: "#373c3e", color: "white" }}><span style={{ fontSize: "19px" }}><FiLogOut /> </span>Log Out</button>
                </div >
            </div>
        </div>
    )
}

export default Sidebar