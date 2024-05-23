import React, { useEffect, useState } from "react";
import "../../components/MainDash/Maindash.css";
import Sidebar from "../SideBar/Sidebar";
import '../../../App.css';
import { useGetPatientQuery, useUpdatePatientActiveMutation, usePostTokenMutation, useUpdatePatientInactiveMutation } from "../../../slices/usersApiSlice";
import { toast } from "react-toastify";

const Maindash = () => {
    const { data: patients, error } = useGetPatientQuery();
    const [updateActive] = useUpdatePatientActiveMutation();
    const [updateInactive] = useUpdatePatientInactiveMutation();
    const [postToken] = usePostTokenMutation();
    const [token, setToken] = useState(0);

    let sortedPatients = [];
    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch patients");
        }
    }, [error]);

    if (patients) {
        sortedPatients = [...patients].sort((a, b) => a.token - b.token);
    }

    const handleSetActive = async (id, ctoken) => {
        await updateActive(id).unwrap();
        toast.success(`Token number ${ctoken} set active!`);
        setToken(0);
        const prevActive = sortedPatients.find(patient => patient.token === ctoken - 1);
        console.log(prevActive)
        if (prevActive) {
            const id = prevActive.id;
            await postToken({ id, token}).unwrap();
            await updateInactive(id).unwrap();
            window.location.reload();
        }
    };

    return (
        <div className="AppGlass">
            <Sidebar />
            <div className="MainDash">
                <div className="continer">
                    <h1 className="h1">Appointment</h1>
                </div>

                <div className="border">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Token No.</th>
                                <th>Patient's Name</th>
                                <th>Active</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedPatients && sortedPatients.map((patient) => {
                                if (patient.token > 0) {
                                    return (
                                        <tr key={patient.id}>
                                            <td>{patient.token}</td>
                                            <td>{patient.name}</td>
                                            <td>
                                                <div className="btn-cont">
                                                    <button onClick={() => handleSetActive(patient.id, patient.token)}>Set Active</button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Maindash;
