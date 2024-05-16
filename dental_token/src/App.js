import './App.css';
import Mrouters from "./Mrouters";
import MainRouter from './MainRouter';
// import DoctorRouter from './DoctorRouter';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
    <>
    <MainRouter/>
    <Mrouters/>
    <ToastContainer/>
   </>
  
  )
}


export default App;
