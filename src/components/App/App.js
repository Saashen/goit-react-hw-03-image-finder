import React, { Component } from 'react';
import styles from './App.module.css';

// Components
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Searchbar from '../Searchbar/Searchbar';
import Loader from '../Loader/Loader';

// Services
import { fetchImages } from '../../services/images-api';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  };

  loadImages = (query, page) => {
    this.setState({ isLoading: true });

    fetchImages(query, page)
      .then(({ data }) =>
        this.setState(prevState => ({
          page: prevState.page + 1,
          images: [...prevState.images, ...data.hits],
        })),
      )
      .catch(error => {
        throw new Error(error);
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.loadImages(this.state.query);

    this.setState({ page: 1, images: [], query: '' });
  };

  handleLoadMoreButton = () => {
    const { query, page } = this.state;
    this.loadImages(query, page);

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { query, images, isLoading } = this.state;

    return (
      <div className={styles.App}>
        {isLoading && <Loader />}
        <Searchbar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          query={query}
        />
        <ImageGallery images={images} />
        {images.length > 0 && (
          <Button handleClick={this.handleLoadMoreButton} />
        )}
      </div>
    );
  }
}
