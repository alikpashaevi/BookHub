import React, {useState} from 'react'
import './Sidebar.css'
import { FaBell, FaHome, FaEnvelope, FaUser, FaGlobe, FaEllipsisH } from "react-icons/fa";
import { FaMagnifyingGlass, FaArrowRightFromBracket, FaUserPlus  } from "react-icons/fa6";
import profilePic from "../assets/images/profile-pic.png";

const Sidebar = () => {
  const [activeSideBar, setActiveSideBar] = useState("Home")
  const [profileActive, setProfileActive] = useState(false);


  function selectSideBar(props) {
      setActiveSideBar(props.currentTarget.getAttribute('v'));
  }

  return (
    <aside>
      <ul className='sidebar-components'>
        <li className={`sidebar-component ${activeSideBar === "Home" ? "active" : ""}` }  v="Home" onClick={selectSideBar}><FaHome /> Home</li>
        <li className={`sidebar-component ${activeSideBar === "Explore" ? "active" : ""}` } v="Explore" onClick={selectSideBar}><FaMagnifyingGlass /> Explore</li>
        <li className={`sidebar-component ${activeSideBar === "Notifications" ? "active" : ""}` } v="Notifications" onClick={selectSideBar}><FaBell /> Notifications</li>
        <li className={`sidebar-component ${activeSideBar === "Messages" ? "active" : ""}` } v="Messages"onClick={selectSideBar} ><FaEnvelope /> Messages</li>
        <li className={`sidebar-component ${activeSideBar === "Profile" ? "active" : ""}` } v="Profile" onClick={selectSideBar}><FaUser /> Profile</li>
        <li className={`sidebar-component ${activeSideBar === "Trends" ? "active" : ""}` } v="Trends" onClick={selectSideBar}><FaGlobe /> Trends</li>
        <li className={`sidebar-component ${activeSideBar === "Other" ? "active" : ""}` } v="Other" onClick={selectSideBar}><FaEllipsisH /> Other</li>
      </ul>
      
      <div className='user-section'
        onMouseLeave={() => setProfileActive(false)}
        >
          <div
          className='sidebar-user'
          onMouseEnter={() => setProfileActive(true)}
        >
          <img className='sidebar-profile-pic' src={profilePic} alt="profile picture" />
          user.tisho123
        </div>
        {profileActive ? (
        <div className='profile-popup-window'>
          <div>Add new acc <FaUserPlus /></div>
          <hr />
          <div>Log out <FaArrowRightFromBracket /></div>
        </div>
        ) : <div className='profile-popup-window' style={{ animation: 'slide-down 1s ease forwards' }}>
        <div>Add new acc <FaUserPlus /></div>
        <hr />
        <div>Log out <FaArrowRightFromBracket /></div>
      </div>}
      </div>

    </aside>
  )
}

export default Sidebar