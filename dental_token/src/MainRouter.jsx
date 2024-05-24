import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './doctor/components/Login';
import Dashboard from './Admin/pages/Dashboard';
import Users from './Admin/pages/Users';
import Feedback from './Admin/pages/Feedback';
import Active from './doctor/ActiveAppointment/Active/ActiveApp';
import Maindash from './doctor/components/MainDash/Maindah';
import ProtectedRoute from './ProtectedRoute';

const MainRouter = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/admin' element={<Login/>}/>
            <Route path='/admin/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            <Route path='/admin/users' element={<ProtectedRoute><Users/></ProtectedRoute>}/>
            <Route path='/admin/feedbacks' element={<ProtectedRoute><Feedback/></ProtectedRoute>}/>
            <Route path='/admin/docdash' element={<ProtectedRoute><Maindash/></ProtectedRoute>}/>
            <Route path='/admin/active' element={<ProtectedRoute><Active/></ProtectedRoute>}/>
        </Routes>
      </Router>
     </>
  )
}

export default MainRouter