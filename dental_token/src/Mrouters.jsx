import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home'; // Assuming you have a Home component
import Home from "./components/home";
import Team from './components/team'; // Assuming you have a Team component
import Token from './components/token'; // Assuming you have a Token component
import Notification from './components/notification'; // Assuming you have a Notification component
import Profile from './components/profile'; // Assuming you have a Profile component
import Login from './components/login';
import Signup from './components/signup';

function Mrouters() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/token" element={<Token />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default Mrouters;
