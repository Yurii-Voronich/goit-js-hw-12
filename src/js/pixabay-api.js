import axios from 'axios';
import { perPage } from '../main';
export const getImagesByQuery = (query, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '51348790-b4b99e7923fa7dbd5fd948fd1',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });
};
