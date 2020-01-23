import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, closeModal, tags }) => {
  window.addEventListener('keydown', closeModal);

  return (
    <button type="button" className={styles.Overlay} onClick={closeModal}>
      <div>
        <img src={largeImageURL} alt={tags} className={styles.Modal} />
      </div>
    </button>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
