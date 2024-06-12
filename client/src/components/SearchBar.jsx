import React from 'react';
import { FaCircleXmark } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ inputValue, handleChange, clearInput }) {
  return (
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
  );
}

export default SearchBar;
