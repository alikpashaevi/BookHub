import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <span className='navbar-logo'><span>BookHub</span></span>
      <ul className='navbar-components'>
        <li className="navbar-component active">For You</li>
        <li className="navbar-component">Following</li>
      </ul>
      <form className='navbar-form' action="/">
        <input className='navbar-input' type="text" placeholder='Search for a book'/>      
      </form>
    </nav>
  )
}

export default Header