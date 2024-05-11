import React from "react";
import "../../components/MainDash/Maindash.css";
// import Sidebar from "../SideBar/Sidebar";
import Sidebar from "../SideBar/Sidebar";
import '../../../App.css';

const Maindash = () => {
    return (
        <div className="AppGlass">
            <Sidebar/>
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
                        <tr>
                            <td>1</td>
                            <td>Sangay dorji</td>
                            <div className="btn-cont">
                                <button>set active</button>
                            </div>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Pema Pema</td>
                            <div className="btn-cont">
                                <button>set active</button>
                            </div>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sonam Mmomo</td>
                            <div className="btn-cont">
                                <button>set active</button>
                            </div>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Tandin wandmo</td>
                            <div className="btn-cont">
                                <button>set active</button>
                            </div>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Sangay snagay</td>
                            <div className="btn-cont">
                                <button>set active</button>
                            </div>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Sonam Sonam</td>
                            <div className="btn-cont">
                                <button>set active</button>
                            </div>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default Maindash;
