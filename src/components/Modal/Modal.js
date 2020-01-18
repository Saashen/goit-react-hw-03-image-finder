import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL }) => (
  <div className={styles.Overlay}>
    <div className={styles.Modal}>
      <img src={largeImageURL} alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};

export default Modal;
