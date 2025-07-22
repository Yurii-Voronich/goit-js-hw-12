import axios from 'axios';
export const getImagesByQuery = query => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51348790-b4b99e7923fa7dbd5fd948fd1',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      return res.data.hits;
    });
};
