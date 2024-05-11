import React from "react";
// import MainRouter from "./MainRouter";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Active from './Doctor/ActiveAppointment/Active/ActiveApp';
import Maindash from './Doctor/components/MainDash/Maindah';
import Login from './Doctor/components/Login';


function DoctorRouter() {
  return (
    <>
      {/* <MainRouter /> */}
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Maindash />} />
          <Route path='/activeapp' element={<Active />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </Router>
    </>

  )
}


export default DoctorRouter;
