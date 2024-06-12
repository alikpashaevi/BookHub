import React, { useState } from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import { Logo } from './Logo';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const [isActiveForYou, setIsActiveForYou] = useState(true);
  const [isActiveFollow, setIsActiveFollow] = useState(false);

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
    borderBottom: 'solid 2px var(--third-color)',
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <nav>
      < Logo />
      <ul className='navbar-components'>
        <li
          className={`navbar-component`}
          style={isActiveForYou ? activeSection : {}}
          onClick={activeFY}
        >
          For You
        </li>
        <li
          className={`navbar-component`}
          style={isActiveFollow ? activeSection : {}}
          onClick={activeFollow}
        >
          Following
        </li>
      </ul>
      <SearchBar
        inputValue={inputValue}
        handleChange={handleChange}
        clearInput={clearInput}
      />
    </nav>
  );
};

export default Header;
