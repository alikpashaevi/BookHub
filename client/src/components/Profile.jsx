import React from 'react'
import './Profile.css'
import profilePic from "../assets/images/profile-pic.png";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-info">
          <img src={profilePic} alt="profile image" />
          <div className="profile-info-text">
            <span className="profile-username">user.tisho123</span>
            <span className="profile-bio">hi my name is tisho i like to read hentai books</span>
            <span className="profile-favourite-book">tishos favorite book is: <span>yamete kudasai</span></span>
            <span className='profile-books-read'>tisho has read 130 books this year</span>
          </div>
        </div>
        <div className="profile-stats">
          <ul className="profile-navbar">
            <li className="main-info active" >Main info</li>
            <li className='profile-liked'>Liked posts</li>
          </ul>
          <div className="profile-main-stats">
            <h3 className='profile-title'>The books tisho has read</h3>
            <div className="user-read-books">
              book
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile