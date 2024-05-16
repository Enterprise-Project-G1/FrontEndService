import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home'; // Assuming you have a Home component
// import Home from "./components/home";
import Home from "./user/components/home"
import Team from "./user/components/team";
import Token from "./user/components/token";
import Notification from "./user/components/notification";
import Profile from "./user/components/profile";
import Loginuser from './user/components/loginuser';
import Signup from './user/components/signup';

function Mrouters() {
  return (
    <>
      <Router>

        <Routes>
          {/* <Route path="/" element={<Loginuser />} /> */}
          <Route path='/login' element={<Loginuser />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/' element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/token" element={<Token />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Loginuser />} />
        </Routes>
      </Router>
    </>
  );
}

export default Mrouters;
