import React from 'react';
import { Logo } from './Logo';
import SearchBar from './SearchBar';
import './Explore.css'

const Explore = ({ inputValue, handleChange, clearInput }) => {
  return (
    <nav>
      <Logo />
      <SearchBar
        inputValue={inputValue}
        handleChange={handleChange}
        clearInput={clearInput}
      />
    </nav>
  );
};

export default Explore;
