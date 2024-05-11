import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css'; // Import CSS file for styling
import { IoNotificationsSharp } from "react-icons/io5";
import { TbCircleLetterTFilled } from "react-icons/tb";

const Home = () => <h2>Home</h2>;
const Team = () => <h2>Team</h2>;
const Token = () => <h2>Token</h2>;
const Notification = () => <h2>Notification</h2>;
const Profile = () => <h2>Profile</h2>;
// const Logout = () => <h2>Logout</h2>;

const Nav = () => {
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
          <li>
            <Link to="/notification" > <span style={{fontSize:"25px"}}><IoNotificationsSharp /></span></Link>
          </li>
          <li>
            <Link to="/profile"><span style={{fontSize:"25px"}}><TbCircleLetterTFilled /></span></Link>
          </li>
          <li>
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
