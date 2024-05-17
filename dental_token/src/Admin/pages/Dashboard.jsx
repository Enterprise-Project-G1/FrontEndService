import React, { useState, useEffect } from "react";
import img from '../img/image.png';
import Nav from "./Navbar";
import './../css/style.css';
import { useGetFeedbackQuery, useGetAppointmentQuery, useGetPatientQuery, 
    useGetUsersQuery, usePostUsersMutation, useDeleteAppointmentMutation } from "../../slices/usersApiSlice";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlay1, setShowOverlay1] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [number, setNumber] = useState(0)
    const [isOpen, setIsOpen] = useState(false);
    const { data: feedbacks, error, isLoading } = useGetFeedbackQuery();
    const { data: patients, pError, isPLoading } = useGetPatientQuery();
    const { data: appointments, aError, isALoading } = useGetAppointmentQuery();
    const { data: users, userError, isUserLoading } = useGetUsersQuery();
    const [deleteAppointment] = useDeleteAppointmentMutation();

    const [postUser] = usePostUsersMutation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState(null);
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState([{"id":2, "name":"Doctor"}]);


    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch testimonials");
        } else if (pError) {
            toast.error("Failed to fetch patients");
        } else if (aError) {
            toast.error("Failed to fetch appointments");
        } else if (userError) {
            toast.error("Faied to fetch users");
        }
    }, [feedbacks, patients, appointments, users, error, pError, aError, userError]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleContactChange = (e) => {
        setContact(e.target.value);
    }

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(name === "" || email === "" || contact === "" || gender === "" || password === "" || roles === ""){
            toast.error("All fields are required!")
        }else{
            try{
                await postUser({name, email, contact, gender, password, roles}).unwrap();
                toast.success("User registration successful!")
                window.location.reload();
            }catch(err){
                toast.error(err?.data?.message || err.error)
            }
        }
    };

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    const handleCancelAdding = () => {
        setIsOpen(false);
    };

    const handleSet = (id) => {
        setSelectedId(id);
        setShowOverlay1(true);
    };
    const handleConfirmSet = () => {
        
        setShowOverlay1(false);
    };

    const handleCancelSet = () => {
        setShowOverlay1(false);
    };

    const handleDelete = (id) => {
        setSelectedId(id);
        setShowOverlay(true);
    };

    const handleConfirmDelete = async(e) => {
        e.preventDefault()
        try{
            await deleteAppointment(selectedId);
            toast.success("Appointment deleted successfully!")
            window.location.reload()
        }catch(err) {
            toast.error(err?.data?.message || err.error)
        }
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
            <div className="outer2">

                <div style={{ paddingLeft: "60px", paddingTop: "20px" }}>
                    <div className="con">
                        <img src={img} alt="images"></img>
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
                    <h1 style={{ color: "white" }}>Patient Appointment</h1>

                    <div className="App11">
                        {appointments && patients && (
                            <table className="table123">
                                <tr>
                                    <th>SI No</th>
                                    <th>Patient Name</th>
                                    <th>Purpose</th>
                                    <th>Date</th>
                                    <th>Token</th>
                                    <th>Action</th>
                                </tr>
                                {appointments.map((val, index) => {
                                    const patient = patients.find(patient => patient.id === val.patientId);
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{patient ? patient.name : "Unknown Patient Id!"}</td>
                                            <td>{val.reason}</td>
                                            <td>{val.date}</td>
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
                        )}
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


            {/* Add Doctor */}
            {isOpen && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h1 style={{ color: "white" }}>Add Doctor</h1>
                        <div style={{ paddingBottom: "10px" }}>
                            <i style={{ fontSize: "70px" }} class="fa-solid fa-user-plus"></i>
                        </div>
                        <form className="form">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Name"
                                onChange={handleNameChange}
                                required
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={handleEmailChange}
                                required
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                required
                            />
                            <input
                                type="contact"
                                id="contact"
                                name="contact"
                                value={contact}
                                placeholder="Contact"
                                onChange={handleContactChange}
                                required
                            />
                            <input
                                type="gender"
                                id="gender"
                                name="gender"
                                value={gender}
                                placeholder="Gender"
                                onChange={handleGenderChange}
                                required
                            />

                            <div>
                                <button style={{ background: "#373C3E" }} className="btn" onClick={handleSubmit}>Submit</button>
                                <button className="btn" onClick={handleCancelAdding}>Cancel</button>
                            </div>
                        </form>


                    </div>
                </div>
            )}

        </div>
    )
}
export default Dashboard;