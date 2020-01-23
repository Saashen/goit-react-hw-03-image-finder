/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

import Modal from '../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  handleImageClick = () => this.setState({ isModalOpen: true });

  closeModal = e => {
    if (e.type === 'keydown' && e.code !== 'Escape') return;
    if (e.type === 'click' && e.target.nodeName === 'IMG') return;
    this.setState({ isModalOpen: false });
  };

  render() {
    const { largeImageURL, webformatURL, tags } = this.props;
    const { isModalOpen } = this.state;
    return (
      <>
        {isModalOpen && (
          <Modal
            alt={tags}
            largeImageURL={largeImageURL}
            closeModal={this.closeModal}
            tags={tags}
          />
        )}
        <li className={styles.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={styles.ImageGalleryItem_image}
            onClick={this.handleImageClick}
          />
        </li>
      </>
    );
  }
}
