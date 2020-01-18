import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ handleSubmit, handleChange, query }) => (
  <header className={styles.Searchbar}>
    <form onSubmit={handleSubmit} className={styles.SearchForm}>
      <button type="submit" className={styles.SearchForm_button}>
        <span className={styles.SearchForm_button_label}>Search</span>
      </button>

      <input
        onChange={handleChange}
        className={styles.SearchForm_input}
        type="text"
        value={query}
        autoComplete="off"
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

Searchbar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Searchbar;
