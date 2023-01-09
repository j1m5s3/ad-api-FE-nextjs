import React from 'react';
import { useState } from 'react';

import styles from '../styles/SearchBar.module.css'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform the search here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Search</button>
    </form>
  );
};

export default SearchBar;
