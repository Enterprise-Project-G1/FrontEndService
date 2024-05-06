import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../img/Vector.png";
import "./../css/notification.css"

const Login = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleDelete = () => {
        setShowOverlay(true);
    };

    const handleConfirmDelete = () => {
        // Update your state or perform other actions as needed
        setShowOverlay(false);
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 2000); // Hide success message after 2 seconds
    };

    const handleCancelDelete = () => {
        setShowOverlay(false);
    };
    return (
        <div>
            <h1>Login</h1>
            <Link to="/dashboard">LogIn</Link> <br />

            <div className="outer">

                <div className="inner">
                    <h2>Notification</h2>

                    {/* <div className="main"> */}
                    <div className="all">
                        <div className="emp"></div>
                        <div className="each">
                            <img src={img} alt="img" />
                            <p style={{ width: "88%", color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <i onClick={() => handleDelete()} style={{ fontSize: "28px", color: "#57C5CA" }} class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="all">
                        <div className="emp"></div>
                        <div className="each">
                            <img src={img} alt="img" />
                            <p style={{ width: "88%", color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <i onClick={() => handleDelete()} style={{ fontSize: "28px", color: "#57C5CA" }} class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="all">
                        <div className="emp"></div>
                        <div className="each">
                            <img src={img} alt="img" />
                            <p style={{ width: "88%", color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <i onClick={() => handleDelete()} style={{ fontSize: "28px", color: "#57C5CA" }} class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="all">
                        <div className="emp"></div>
                        <div className="each">
                            <img src={img} alt="img" />
                            <p style={{ width: "88%", color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <i onClick={() => handleDelete()} style={{ fontSize: "28px", color: "#57C5CA" }} class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    <div className="all">
                        <div className="emp"></div>
                        <div className="each">
                            <img src={img} alt="img" />
                            <p style={{ width: "88%", color: "white" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <i onClick={() => handleDelete()} style={{ fontSize: "28px", color: "#57C5CA" }} class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                    {/* </div> */}
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
            {showSuccessMessage && (
                <div className="success-message">
                    <p>You have successfully deleted the notification!</p>
                </div>
            )}

        </div>
    )
}
export default Login;