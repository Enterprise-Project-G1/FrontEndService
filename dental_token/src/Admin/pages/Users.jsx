import React, { useState, useEffect } from "react";
import Nav from "./Navbar";
import './../css/style.css';
import img from '../img/image.png';
import { useGetAppointmentQuery, useGetFeedbackQuery, useGetPatientQuery, useGetUsersQuery } from "../../slices/usersApiSlice";
import { toast } from "react-toastify";

const Users = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccessMessage2, setShowSuccessMessage2] = useState(false);
    const { data: feedbacks, error, isLoading } = useGetFeedbackQuery();
    const {data: patients, pError, isPLoading} = useGetPatientQuery();
    const {data: appointments, aError, isALoading} = useGetAppointmentQuery();
    const {data: users, useError, isUserLoading} = useGetUsersQuery();

    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch testimonials");
        }else if(pError){
            toast.error("Failed to fetch patients");
        }else if(aError) {
            toast.error("Failed to fetch appointments");
        }else if(useError){
            toast.error("Failed to fetch appointments");
        }
    }, [feedbacks, patients, appointments, users, error, pError, aError, useError]);

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
    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can perform actions like sending the form data to a server
        // console.log(formData);
    };


    const handleCancelAdding = () => {
        setIsOpen(false);
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowOverlay(true);
    };

    const handleConfirmDelete = () => {
        // const newData = data.filter(item => item.id !== selectedId);
        // // Update your state or perform other actions as needed
        // setShowOverlay(false);
        // setShowSuccessMessage(true);
        // setTimeout(() => {
        //     setShowSuccessMessage(false);
        // }, 2000); // Hide success message after 2 seconds
        toast.success("Clicked!!")
    };

    const handleCancelDelete = () => {
        setShowOverlay(false);
    };
    return (
        <div className="pp" style={{ background: "#373C3E" }}>
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
                            <div style={{ fontSize: "30px", marginLeft:"-15%" }}>
                                <i onClick={toggleOverlay} class="fa-solid fa-circle-plus"></i>
                            </div>
                        </div>
                        {users && users.map((val) => {
                            if (val.roles[0].name === 'Doctor') {
                                return (
                                    <div className="each">
                                        <img className="im" src={img} alt="images"></img>
                                        <p>Dr. {val.name}</p>
                                    </div>
                                )
                            }
                            return null;
                        })
                        }
                    </div>
                </div>

                <div style={{ paddingLeft: "80px", paddingTop: "20px" }}>
                    <div className="totalmain">
                        <div className="total">
                            <div className="icon-container"> {/* Container for the icon */}
                                <i class="fa-solid fa-circle-user"></i>
                            </div>
                            {isPLoading && <p>Loading Patients</p>}
                            {patients && (
                                <div>
                                <p>Total no. of Users</p>
                                <p>{patients.length}</p>
                            </div>
                            )} 
                        </div>
                        <div className="total">
                            <div className="icon-container"> {/* Container for the icon */}
                                <i class="fa-solid fa-list-check"></i>
                            </div>
                            {isALoading && <p>Loading Appointments</p>}
                            {appointments && (
                                <div>
                                <p>Today's appointments</p>
                                <p>{appointments.length}</p>
                            </div>
                            )}
                        </div>
                        <div className="total">
                            <div className="icon-container"> {/* Container for the icon */}
                                <i class="fa-regular fa-message"></i>
                            </div>
                            {isLoading && <p>Loading Feedbacks</p>}
                            {feedbacks && feedbacks.length > 0 && (
                                <div>
                                    <p>Total no. of Feedbacks</p>
                                    <p>{feedbacks.length}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <h1 style={{ color: "white" }}>Users</h1>


                    <div className="App11">
                        {patients && (
                            <table className="table123">
                            <tr>
                                <th>SI No</th>
                                <th> UserName</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            {patients.map((val, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>
                                            <button className="btn" onClick={() => handleDelete(val.id)}>Disable</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </table>
                        )}
                        


                    </div>


                </div>
            </div>
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
export default Users;