import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './doctor/components/Login';
import Dashboard from './Admin/pages/Dashboard';
import Users from './Admin/pages/Users';
import Feedback from './Admin/pages/Feedback';

const MainRouter = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/users' element={<Users/>}/>
            <Route path='/feedbacks' element={<Feedback/>}/>
            {/* <Route path='*' element={<h1>Note Found</h1>}/> */}
        </Routes>
      </Router>
     </>
  )
}

export default MainRouter