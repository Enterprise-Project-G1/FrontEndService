import React from "react";
import MainRouter from "./MainRouter";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Active from './doctor/ActiveAppointment/Active/ActiveApp';
import Maindash from './doctor/components/MainDash/Maindah';
import Login from './doctor/components/Login';


function App() {
  return (
    <>
      <MainRouter />
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


export default App;
