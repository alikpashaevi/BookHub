import React, { useState } from 'react';
import './Header.css';
import { FaSearch, FaBookOpen  } from 'react-icons/fa';
import { FaCircleXmark } from 'react-icons/fa6';

const Header = () => {
  const [inputValue, setInputValue] = useState('');

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
        <li className="navbar-component active">For You</li>
        <li className="navbar-component">Following</li>
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
