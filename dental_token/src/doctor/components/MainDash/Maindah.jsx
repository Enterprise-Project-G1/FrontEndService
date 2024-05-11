import React from "react";
import "../../components/MainDash/Maindash.css";
// import Sidebar from "../SideBar/Sidebar";
import Sidebar from "../SideBar/Sidebar";
import '../../../App.css';

const Maindash = () => {
    return (
        <div className="AppGlass1">
            <Sidebar/>
            <div className="MainDash1">
            <div className="continer1">
                <h1 className="h11">Appointment</h1>
            </div>

            <div className="border1">

                <table className="table1 t1">
                    <thead>
                        <tr className="tr1">
                            <th className="th1">Token No.</th>
                            <th className="th1">Patient's Name</th>
                            <th className="th1">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Rows here */}
                        <tr className="tr1">
                            <td className="td1">1</td>
                            <td className="td1">Sangay dorji</td>
                            <div className="btn-cont1">
                                <button className="button1">set active</button>
                            </div>
                        </tr>
                        <tr className="tr1">
                            <td className="td1">2</td>
                            <td className="td1">Pema Pema</td>
                            <div className="btn-cont1">
                                <button className="button1">set active</button>
                            </div>

                        </tr>
                        <tr className="tr1">
                            <td className="td1">3</td>
                            <td className="td1">Sonam Mmomo</td>
                            <div className="btn-cont1">
                                <button className="button1">set active</button>
                            </div>
                        </tr>
                        <tr className="tr1">
                            <td className="td1">4</td>
                            <td className="td1">Tandin wandmo</td>
                            <div className="btn-cont1">
                                <button className="button1">set active</button>
                            </div>
                        </tr>
                        <tr className="tr1">
                            <td className="td1">5</td>
                            <td className="td1">Sangay snagay</td>
                            <div className="btn-cont1">
                                <button className="button1">set active</button>
                            </div>
                        </tr>
                        <tr className="tr1">
                            <td className="td1">5</td>
                            <td className="td1">Sonam Sonam</td>
                            <div className="btn-cont1">
                                <button className="button1">set active</button>
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
