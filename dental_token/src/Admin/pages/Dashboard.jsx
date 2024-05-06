import React, { useState } from "react";
import img from '../img/image.png';
import Nav from "./Navbar";
import './../css/style.css';

const data = [
    { PatientName: "Tashi Wangyel", Purpose: "Need to filled up my tooth", Token: "Token Number", Action: "Delete" },
    { PatientName: "Tashi Wangyel", Purpose: "Need to filled up my tooth", Token: "Token Number", Action: "Delete" },
    { PatientName: "Tashi Wangyel", Purpose: "Need to filled up my tooth", Token: "Token Number", Action: "Delete" },
    { PatientName: "Tashi Wangyel", Purpose: "Need to filled up my tooth", Token: "Token Number", Action: "Delete" },
    { PatientName: "Tashi Wangyel", Purpose: "Need to filled up my tooth", Token: "Token Number", Action: "Delete" },

]
const Dashboard = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlay1, setShowOverlay1] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showSuccessMessage1, setShowSuccessMessage1] = useState(false);
    const [showSuccessMessage2, setShowSuccessMessage2] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [number, setNumber] = useState(0)
    const [isOpen, setIsOpen] = useState(false);
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     contact:'',
    //     gender:''
    // });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform actions like sending the form data to a server
        // console.log(formData);
    };

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };
    const handleConfirmAdding = () => {
        // Update your state or perform other actions as needed
        setIsOpen(false);
        setShowSuccessMessage2(true);
        setTimeout(() => {
            setShowSuccessMessage2(false);
        }, 2000); // Hide success message after 2 seconds
    };

    const handleCancelAdding = () => {
        setIsOpen(false);
    };

    const handleSet = (id) => {
        setSelectedId(id);
        setShowOverlay1(true);
    };
    const handleConfirmSet = () => {
        // const newData = data.filter(item => item.id !== selectedId);
        // Update your state or perform other actions as needed
        setShowOverlay1(false);
        setShowSuccessMessage1(true);
        setTimeout(() => {
            setShowSuccessMessage1(false);
        }, 2000); // Hide success message after 2 seconds
    };

    const handleCancelSet = () => {
        setShowOverlay1(false);
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

    const handleChange = (event) => {
        // Ensure that the input value is a valid number
        const newValue = parseInt(event.target.value)
        if (!isNaN(newValue)) {
            setNumber(newValue)
        }
    }

    return (
        <div style={{ background: "#373C3E" }}>
            <Nav />
            <div className="outer">

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
                    <h1 style={{ color: "white" }}>Patient Appointment</h1>

                    <div className="App">
                        <table>
                            <tr>
                                <th>SI No</th>
                                <th> Patient Name</th>
                                <th>Purpose</th>
                                <th>Token</th>
                                <th>Action</th>
                            </tr>
                            {data.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{val.PatientName}</td>
                                        <td>{val.Purpose}</td>
                                        <td>
                                            <button style={{ background: "#57C5CA" }} className="btn" onClick={() => handleSet(val.id)}>Token No</button>
                                        </td>
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

            {/* Action */}
            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Are you sure you want to delete the User?</h2>
                        <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmDelete}>Yes</button>
                        <button className="btn" onClick={handleCancelDelete}>No</button>
                    </div>
                </div>
            )}
            {showSuccessMessage && (
                <div className="success-message">
                    <p>You have successfully deleted the user!</p>
                </div>
            )}

            {/* Token */}
            {showOverlay1 && (
                <div className="overlay">
                    <div style={{ display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", alignItems: "center" }} className="overlay-content">
                        <input style={{ width: "150px", height: "30px" }}
                            type="number"
                            value={number}
                            onChange={handleChange}
                            min={0} // Optional: Set minimum value for the input
                        />
                        <div>
                            <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmSet}>Save</button>
                            <button className="btn" onClick={handleCancelSet}>No</button>
                        </div>
                    </div>
                </div>
            )}
            {showSuccessMessage1 && (
                <div className="success-message">
                    <p>You have successfully set the token number!</p>
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
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                // value="Email"
                                placeholder="Email"
                                onChange={handleChange}
                                required
                            />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    // value="Password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                                  <input
                                    type="contact"
                                    id="contact"
                                    name="contact"
                                    // value="Contact"
                                    placeholder="Contact"
                                    onChange={handleChange}
                                    required
                                />
                                  <input
                                    type="gender"
                                    id="gender"
                                    name="gender"
                                    // value="Gender"
                                    placeholder="Gender"
                                    onChange={handleChange}
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
export default Dashboard;