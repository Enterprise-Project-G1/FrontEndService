import './App.css';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Active from './doctor/ActiveAppointment/Active/ActiveApp';
// import Maindash from './doctor/components/MainDash/Maindah';
// import Login from './doctor/components/Login';
// import Mrouters from "./"
import Mrouters from "./Mrouters";
// import MainRouter from './MainRouter';
// import DoctorRouter from './DoctorRouter';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
    <>
    <Mrouters/>
    <ToastContainer/>
   </>
  
  )
}


export default App;
