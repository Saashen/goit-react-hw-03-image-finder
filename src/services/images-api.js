import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '14926411-aa7bad2d088edfa07dff12899';
const SETTINGS = '&image_type=photo&orientation=horizontal&per_page=12';

// eslint-disable-next-line import/prefer-default-export
export const fetchImages = (query, page = 1) =>
  axios.get(`${BASE_URL}?q=${query}&page=${page}&key=${KEY}${SETTINGS}`);
