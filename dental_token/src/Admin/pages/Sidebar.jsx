import React from "react";
import './../css/style.css';
import img from '../img/image.png';


const Side = () => {
    return (
        <div style={{backgroundColor:"blue"}}>
            <div className="con">
                <img src={img} alt="image"></img>
                <p>Receptionist</p>
                <p>Taba Dental Clinic</p>
            </div>
            <div className="doctors">
                <div>
                    <p>Doctors</p>

                </div>
                <div className="each">
                    <img className="im" src={img} alt="image"/>
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
    )
}
export default Side;