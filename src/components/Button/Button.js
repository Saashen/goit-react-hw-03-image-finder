import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ handleClick }) => (
  <button type="button" className={styles.Button} onClick={handleClick}>
    LoadMore
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Button;
