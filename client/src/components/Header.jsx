import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaBookOpen  } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActiveForYou, setIsActiveForYou] = useState(true)
  const [isActiveFollow, setIsActiveFollow] = useState(false)

  function activeFY() {
    if (!isActiveForYou) {
      setIsActiveForYou(true);
      setIsActiveFollow(false);
    }
  }

  function activeFollow() {
    if (!isActiveFollow) {
      setIsActiveForYou(false);
      setIsActiveFollow(true);
    }
  }

  const activeSection = {
    'borderBottom': 'solid 2px var(--third-color)'
  };


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <nav>
      <span className='navbar-logo'><span><FaBookOpen />BookHub</span></span>
      <ul className='navbar-components'>
        <li className={`navbar-component`} style={isActiveForYou ? activeSection : {}} onClick={activeFY}>
          For You
        </li>
        <li className={`navbar-component`} style={isActiveFollow ? activeSection : {}} onClick={activeFollow}>
          Following
        </li>
      </ul>
      <form className='navbar-form' action="/">
        <FaSearch className='search-icon' />
        <input
          className='navbar-input'
          type="text"
          placeholder='Search for a book'
          value={inputValue}
          onChange={handleChange}
        />
        {inputValue && (
          <FaCircleXmark className='clear-icon' onClick={clearInput} />
        )}
      </form>
    </nav>
  );
};

export default Header;