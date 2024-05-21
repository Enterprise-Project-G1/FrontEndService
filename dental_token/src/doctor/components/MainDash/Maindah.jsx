import React, { useEffect } from "react";
import "../../components/MainDash/Maindash.css";
// import Sidebar from "../SideBar/Sidebar";
import Sidebar from "../SideBar/Sidebar";
import '../../../App.css';
import { useGetPatientQuery } from "../../../slices/usersApiSlice";
import { toast } from "react-toastify";

const Maindash = () => {
    const { data: patients, error, isPLoading } = useGetPatientQuery();
    let sortedPatients=[];
    useEffect(() => {
        if (error) {
            toast.error("Failed to fetch patients")
        }
    }, [patients, error])
    if(patients){
        sortedPatients = [...patients].sort((a, b) => a.token - b.token);
    }
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
                            {/* Rows here */}
                            {sortedPatients && sortedPatients.map((patient) => {
                                if (patient.token > 0) {
                                    return (
                                        <tr>
                                            <td>{patient.token}</td>
                                            <td>{patient.name}</td>
                                            <div className="btn-cont">
                                                <button>set active</button>
                                            </div>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Maindash;
