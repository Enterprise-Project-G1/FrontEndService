import React, {useEffect, useState} from "react";
import "../../components/MainDash/Maindash.css";
import Sidebar from "../../components/SideBar/Sidebar";
import "../../../App.css";
import { useGetPatientQuery, useGetAppointmentQuery, 
  usePostReportMutation, usePostNotificationMutation, useDeleteAppointmentMutation } from "../../../slices/usersApiSlice";
import { toast } from "react-toastify";

const Active = () => {
  const {data: patients , error} = useGetPatientQuery();
  const {data: appointments , aError} = useGetAppointmentQuery();
  const [postReport] = usePostReportMutation();
  const [postNotification] = usePostNotificationMutation();
  const [deleteAppointment] = useDeleteAppointmentMutation();
  const [name , setName] = useState();
  const [reason, setReason] = useState();
  const [patientId, setPatientId] = useState();
  const [number, setNumber] = useState();
  const [details, setDetails] = useState();
  const [date, setDate] = useState();
  const [selectedId, setSelectedId] = useState();

  const [recieverId, setRecieverId] = useState()
  const message = "You have recieved a medical report."

  useEffect(() => {
    if(error){
      toast.error("Failed to fetch patients")
    }else if(aError){
      toast.error("Failed to fetch appointments")
    }
    if(patients && appointments) {
      const activePatient = patients.find(patient => patient.active === true)
      if(activePatient){
        setName(activePatient.name)
        setPatientId(activePatient.id.toString())
        setRecieverId(activePatient.id.toString())
        setNumber(activePatient.phoneNumber.toString())
        const cAppointment = appointments.find(appointment => appointment.patientId === activePatient.id)
        if(cAppointment) {
          setDate(cAppointment.date)
          setReason(cAppointment.reason)
          setSelectedId(cAppointment.id)
        }
      }
    }
  }, [error, patients, aError, appointments])

  const handlePost = async () => {
    try {
      await postReport({patientId, name, reason, date, number, details})
      await postNotification({recieverId, message})
      await deleteAppointment(selectedId);
      toast.success("Medical Report uploaded successfully!")
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <div className="AppGlass">
      <Sidebar />
      <div className="MainDash">
        <div className="continer">
          <h1 className="h1">Active Appointment</h1>
        </div>

        <div className="outer">
          <div className="p">
            <div className="q">
              <h2 style={{ color: "#57C5CA" }}>Medical Report</h2>
              <div className="NDR">
                <input
                  type="text"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="date"
                  name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  placeholder="Date"
                />
                <input
                  type="text"
                  name="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  placeholder="Reason"
                />
              </div>
              <div style={{width:"100%"}}>
                <input
                  type="text"
                  style={{width:"100%"}}
                  name="details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  placeholder="Report and Medication"
                />
              </div>
              <button onClick={() => handlePost()} className="bttn">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
