import React, { useState } from "react";
import Nav from "./Navbar";
import './../css/style.css';
import img from './../img/image.png';

const data = [
    { id: 1, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 2, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 3, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 4, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 5, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 3, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 4, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },
    { id: 5, UserName: "Tashi Wangyel", Feedback: "Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit", Action: "Delete" },


]

const Feedback = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccessMessage2, setShowSuccessMessage2] = useState(false);


    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };
    const handleConfirmAdding = () => {
        // Update your state or perform other actions as needed
        setIsOpen(false);
        setShowSuccessMessage2(true);
        setTimeout(() => {
            setShowSuccessMessage2(false);
        }, 2000); 
    };
    const handleSubmit = (event) => {
        event.preventDefault();
       
    };

    const handleCancelAdding = () => {
        setIsOpen(false);
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowOverlay(true);
    };

    const handleConfirmDelete = () => {
        const newData = data.filter(item => item.id !== selectedId);
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
        <div style={{ background: "#373C3E" }}>
            <Nav />
            <div className="outer2">

                <div style={{ paddingLeft: "60px", paddingTop: "20px" }}>
                    <div className="con">
                        <img src={img} alt="image"></img>
                        <p>Receptionist</p>
                        <p>Taba Dental Clinic</p>
                    </div>
                    <div className="doctors">
                        <div style={{ gap: "100px" }} className="each">
                            <p>Doctors</p>
                            <div style={{ fontSize: "30px" }}>
                                <i onClick={toggleOverlay} class="fa-solid fa-circle-plus"></i>
                            </div>
                        </div>
                        <div className="each">
                            <img className="im" src={img} alt="image"></img>
                            <p>Dr. Tashi Wangyel</p>
                        </div>
                        <div className="each">
                            <img className="im" src={img} alt="image"></img>
                            <p>Dr. Tashi Wangyel</p>
                        </div>
                        <div className="each">
                            <img className="im" src={img} alt="image"></img>
                            <p>Dr. Tashi Wangyel</p>
                        </div>
                        <div className="each">
                            <img className="im" src={img} alt="image"></img>
                            <p>Dr. Tashi Wangyel</p>
                        </div>

                    </div>
                </div>

                <div style={{ paddingLeft: "80px", paddingTop: "20px" }}>
                    <div className="totalmain">
                        <div className="total">
                            <div className="icon-container"> {/* Container for the icon */}
                                <i class="fa-solid fa-circle-user"></i>
                            </div>
                            <div>
                                <p>Total no. of Users</p>
                                <p>34567</p>
                            </div>
                        </div>
                        <div className="total">
                            <div className="icon-container"> {/* Container for the icon */}
                                <i class="fa-solid fa-list-check"></i>
                            </div>
                            <div>
                                <p>Today's appointments</p>
                                <p>34567</p>
                            </div>
                        </div>
                        <div className="total">
                            <div className="icon-container"> {/* Container for the icon */}
                                <i class="fa-regular fa-message"></i>
                            </div>
                            <div>
                                <p>Total no. of Feedbacks</p>
                                <p>34567</p>
                            </div>
                        </div>
                    </div>
                    <h1 style={{ color: "white" }}>Feedback</h1>
                    <div className="App">
                        <table>
                            <tr>
                                <th>SI No</th>
                                <th> UserName</th>
                                <th>Feedback</th>
                                <th>Action</th>
                            </tr>
                            {data.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{val.UserName}</td>
                                        <td>{val.Feedback}</td>
                                        <td>
                                            <button className="btn" onClick={() => handleDelete(val.id)}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            })}
                        </table>


                    </div>
                </div>
            </div>
            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Are you sure you want to delete the Feedback?</h2>
                        <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmDelete}>Yes</button>
                        <button className="btn" onClick={handleCancelDelete}>No</button>
                    </div>
                </div>
            )}
            {showSuccessMessage && (
                <div className="success-message">
                    <p>You have successfully deleted the feedback!</p>
                </div>
            )}

             {/* Add Doctor */}
             {isOpen && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h1 style={{color:"white"}}>Add Doctor</h1>
                        <div style={{paddingBottom:"10px"}}>
                        <i style={{fontSize:"70px"}} class="fa-solid fa-user-plus"></i>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                // value="Name"
                                placeholder="Name"
                                // onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                // value="Email"
                                placeholder="Email"
                                // onChange={handleChange}
                                required
                            />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    // value="Password"
                                    placeholder="Password"
                                    // onChange={handleChange}
                                    required
                                />
                                  <input
                                    type="contact"
                                    id="contact"
                                    name="contact"
                                    // value="Contact"
                                    placeholder="Contact"
                                    // onChange={handleChange}
                                    required
                                />
                                  <input
                                    type="gender"
                                    id="gender"
                                    name="gender"
                                    // value="Gender"
                                    placeholder="Gender"
                                    // onChange={handleChange}
                                    required
                                />
                
                          
                            <div>
                                <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmAdding}>Submit</button>
                                <button className="btn" onClick={handleCancelAdding}>Cancel</button>
                            </div>
                        </form>


                    </div>
                </div>
            )}
            {showSuccessMessage2 && (
                <div className="success-message">
                    <p>You have successfully Added the user!</p>
                </div>
            )}
        </div>
    )
}
export default Feedback;