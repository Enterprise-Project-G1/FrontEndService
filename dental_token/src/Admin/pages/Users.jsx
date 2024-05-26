import React, { useState, useEffect } from "react";
import Nav from "./Navbar";
import './../css/style.css';
import img from '../img/image.png';
import {
    useGetAppointmentQuery, useGetFeedbackQuery, useGetPatientQuery, useGetUsersQuery,
    usePostUsersMutation, useUpdatePatientEnableMutation, useUpdatePatientDisableMutation
} from "../../slices/usersApiSlice";
import { toast } from "react-toastify";

const Users = () => {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlay1, setShowOverlay1] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [id, setId] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showSuccessMessage2, setShowSuccessMessage2] = useState(false);
    const { data: feedbacks, error, isLoading } = useGetFeedbackQuery();
    const { data: patients, pError, isPLoading } = useGetPatientQuery();
    const { data: appointments, aError, isALoading } = useGetAppointmentQuery();
    const { data: users, useError } = useGetUsersQuery();

    const [postUser] = usePostUsersMutation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState(null);
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [roles] = useState([{ "id": 2, "name": "Doctor" }]);

    const [disableUser] = useUpdatePatientDisableMutation();
    const [enableUser] = useUpdatePatientEnableMutation();

    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch testimonials");
        } else if (pError) {
            toast.error("Failed to fetch patients");
        } else if (aError) {
            toast.error("Failed to fetch appointments");
        } else if (useError) {
            toast.error("Failed to fetch appointments");
        }
    }, [feedbacks, patients, appointments, users, error, pError, aError, useError]);

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

    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (name === "" || email === "" || contact === "" || gender === "" || password === "" || roles === "") {
            toast.error("All fields are required!")
        } else {
            try {
                await postUser({ name, email, contact, gender, password, roles }).unwrap();
                toast.success("User registration successful!")
                window.location.reload();
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
    };


    const handleCancelAdding = () => {
        setIsOpen(false);
    };

    const handleDisable = (id) => {
        setId(id);
        setShowOverlay(true);
    };

    const handleConfirmDisable = async (e) => {
        e.preventDefault();
        try {
            await disableUser(id);
            toast.success("User account disabled successfully!")
            window.location.reload();
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    const handleCancelDisable = () => {
        setShowOverlay(false);
    };

    const handleEnable = (id) => {
        setId(id);
        setShowOverlay1(true);
    };

    const handleConfirmEnable = async (e) => {
        e.preventDefault();
        try {
            await enableUser(id);
            toast.success("User account enabled successfully!")
            window.location.reload();
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    };

    const handleCancelEnable = () => {
        setShowOverlay1(false);
    };
    return (
        <div className="pp" style={{ background: "#373C3E" }}>
            <Nav />
            <div className="outer2">

                <div style={{ paddingLeft: "60px", paddingTop: "20px" }}>
                    <div className="con">
                        <img src={img} alt="images"></img>
                        <p className="p1">Receptionist</p>
                        <p className="p1">Taba Dental Clinic</p>
                    </div>
                    <div className="doctors">
                        <div style={{ gap: "100px" }} className="each">
                            <p>Doctors</p>
                            <div style={{ fontSize: "30px", marginLeft: "-15%" }}>
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
                                    if (val.enabled === false) {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>
                                                    <button style={{background:"green"}} className="btn" onClick={() => handleEnable(val.id)}>Enable</button>
                                                </td>
                                            </tr>
                                        )
                                    } else {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{val.name}</td>
                                                <td>{val.email}</td>
                                                <td>
                                                    <button className="btn" onClick={() => handleDisable(val.id)}>Disable</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                })}
                            </table>
                        )}



                    </div>


                </div>
            </div>
            {showOverlay && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Are you sure you want to disable the user account?</h2>
                        <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmDisable}>Yes</button>
                        <button className="btn" onClick={handleCancelDisable}>No</button>
                    </div>
                </div>
            )}

            {showOverlay1 && (
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Are you sure you want to enable the user account?</h2>
                        <button style={{ background: "#373C3E" }} className="btn" onClick={handleConfirmEnable}>Yes</button>
                        <button className="btn" onClick={handleCancelEnable}>No</button>
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
                        <h1 style={{ color: "white" }}>Add Doctor</h1>
                        <div style={{ paddingBottom: "10px" }}>
                            <i style={{ fontSize: "70px" }} class="fa-solid fa-user-plus"></i>
                        </div>
                        <form className="form" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                placeholder="Name"
                                onChange={handleNameChange}
                                required
                                className="input00"
                            />

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={handleEmailChange}
                                required
                                className="input00"
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={handlePasswordChange}
                                required
                                className="input00"
                            />
                            <input
                                type="contact"
                                id="contact"
                                name="contact"
                                value={contact}
                                placeholder="Contact"
                                onChange={handleContactChange}
                                required
                                className="input00"
                            />
                            <input
                                type="gender"
                                id="gender"
                                name="gender"
                                value={gender}
                                placeholder="Gender"
                                onChange={handleGenderChange}
                                required
                                className="input00"
                            />


                            <div>
                                <button style={{ background: "#373C3E" }} className="btn" onClick={handleSubmit}>Submit</button>
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