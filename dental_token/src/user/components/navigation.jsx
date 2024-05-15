import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector hook from react-redux
import { IoNotificationsSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
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
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <nav className="navbar">
      <div className="left-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
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
                <span style={{ fontSize: "25px" }}>
                  <IoNotificationsSharp />
                </span>
              </Link>
            </li>
          )}
          {userInfo && (
            <li>
              <Link to="/profile">
                <span style={{ fontSize: "25px" }}>
                  <FaUser />
                </span>
              </Link>
            </li>
          )}
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
