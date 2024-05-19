import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Login from './doctor/components/Login';
import Dashboard from './Admin/pages/Dashboard';
import Users from './Admin/pages/Users';
import Feedback from './Admin/pages/Feedback';

const MainRouter = () => {
  return (
    <>
      <Router>
        <Routes>
            {/* <Route path='/admin' element={<Login/>}/> */}
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
            <Route path='/admin/users' element={<Users/>}/>
            <Route path='/admin/feedbacks' element={<Feedback/>}/>
        </Routes>
      </Router>
     </>
  )
}

export default MainRouter