import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector hook from react-redux
import { IoNotificationsSharp } from "react-icons/io5";
import { TbCircleLetterTFilled } from "react-icons/tb";
import '../css/navigation.css';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const Nav = () => {
  // useSelector hook to access Redux store state
  const { userInfo } = useSelector(state => state.auth);

  const dispatch = useDispatch()
 const navigate = useNavigate()


 const [logoutApiCall] = useLogoutMutation()


 const logoutHandler = async () => {
   try{
     await logoutApiCall().unwrap();
     dispatch(logout());
     navigate('/login');
   
 }catch(err){
     console.log(err);
 }
 }

  // // Function to get initials from name
  // const getInitials = (name) => {
  //   if (!name) return '';
  //   const names = name.split(' ');
  //   return names.map(n => n[0]).join('').toUpperCase();
  // };

  return (
    <nav className="navbar">
      <div className="left-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/token">Token</Link>
          </li>
        </ul>
      </div>
      <div className="right-links">
        <ul>
          {userInfo && (
            <li>
              <Link to="/notification">
                <span style={{fontSize:"25px"}}>
                  <IoNotificationsSharp />
                </span>
              </Link>
            </li>
          )}
          <li>
            <Link to="/profile"><span style={{fontSize:"25px"}}><TbCircleLetterTFilled /></span></Link>
          </li>
          {userInfo ? (
            <li>
              <Link onClick={logoutHandler}>Log Out</Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Log In</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
