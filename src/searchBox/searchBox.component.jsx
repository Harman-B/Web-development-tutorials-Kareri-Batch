import React from 'react';

import './searchBox.styles.css';

const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input className='searchRobot' type='search' placeholder={placeholder} onChange={handleChange} />
  )
}

export default SearchBox;