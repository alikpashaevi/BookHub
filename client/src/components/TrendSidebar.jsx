import React from 'react'
import './TrendSidebar.css'
import { FaMessage } from "react-icons/fa6";

const TrendSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className='trendbar'>
        <h3 className='trendbar-header'>
          Trends
        </h3>
        <ul className="trendbar-components">
          <li className="trendbar-component">#some trend <span>200+ posts</span></li>
          <li className="trendbar-component">#some trend <span>200+ posts</span></li>
          <li className="trendbar-component">#some trend <span>200+ posts</span></li>
          <li className="trendbar-component">#some trend <span>200+ posts</span></li>
          <li className="trendbar-component">#some trend <span>200+ posts</span></li>
        </ul>
      </div>
      <div className="friends-bar">
        <h3 className="friends-bar-header">Friends</h3>
        <ul className="friends-bar-components">
          <li className="friends-bar-component">tisho <FaMessage /></li>
          <li className="friends-bar-component">tagon <FaMessage /></li>
          <li className="friends-bar-component">tomera <FaMessage /></li>
          <li className="friends-bar-component">talika <FaMessage /></li>
        </ul>
      </div>
    </div>
  )
}

export default TrendSidebar