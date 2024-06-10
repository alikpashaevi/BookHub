import React from 'react'
import './Sidebar.css'
import { FaBell, FaHome, FaEnvelope, FaUser, FaGlobe, FaEllipsisH } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import profilePic from "../assets/images/profile-pic.png";

const Sidebar = () => {
  return (
    <aside>
      <ul className='sidebar-components'>
        <li className="sidebar-component active"><a href=""><FaHome />Home</a></li>
        <li className="sidebar-component"><a href="/"><FaMagnifyingGlass />Explore</a></li>
        <li className="sidebar-component"><a href="/"><FaBell />Notifications</a></li>
        <li className="sidebar-component"><a href="/"><FaEnvelope />Messages</a></li>
        <li className="sidebar-component"><a href="/"><FaGlobe />Trends</a></li>
        <li className="sidebar-component"><a href="/"><FaUser />Profile</a></li>
        <li className="sidebar-component"><a href="/"><FaEllipsisH />Other</a></li>
      </ul>
      <div className='sidebar-user'><img className='sidebar-profile-pic' src={profilePic} alt="profile picture" />user.tisho123</div>
    </aside>
  )
}

export default Sidebar