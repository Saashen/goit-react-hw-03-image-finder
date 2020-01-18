import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

// import Modal from '../Modal/Modal';

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <>
    {/* <Modal largeImageURL={largeImageURL} /> */}
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  </>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
