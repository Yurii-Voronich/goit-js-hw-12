import { getImagesByQuery } from './js/pixabay-api';
import {
  renderGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  clearMarkup,
  hideLoadMoreButton,
} from './js/render-functions';
import iziToast from 'izitoast';
//git
let currentPage = 1;
export let perPage = 15;
let totalPages = null;
let userQuery = null;
let cardHeight = null;
const formEl = document.querySelector('.form');
export const galleryEl = document.querySelector('.gallery');
export const loaderEl = document.querySelector('.loader');
export const buttonEl = document.querySelector('.js-show-more');

const onSubmit = async e => {
  try {
    e.preventDefault();

    userQuery = formEl.elements['search-text'].value.trim();
    if (!userQuery) {
      return iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `please fill your search request`,
      });
    }
    showLoader();
    clearMarkup();
    hideLoadMoreButton();
    buttonEl.removeEventListener('click', onShowMoreClick);
    currentPage = 1;
    const data = await getImagesByQuery(userQuery, currentPage);

    totalPages = Math.ceil(data.totalHits / perPage);

    if (data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
    }

    renderGallery(data.hits);

    formEl.reset();

    if (totalPages > 1) {
      showLoadMoreButton();
      buttonEl.addEventListener('click', onShowMoreClick);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `${error}`,
    });
  } finally {
    hideLoader();
  }
};
const onShowMoreClick = async e => {
  try {
    showLoader();
    currentPage++;
    const data = await getImagesByQuery(userQuery, currentPage);
    renderGallery(data.hits);
    hideLoader();
    scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (currentPage === totalPages) {
      hideLoadMoreButton();
      buttonEl.removeEventListener('click', onShowMoreClick);
      iziToast.error({
        position: 'topRight',
        title: 'Error',
        message: `You have reached max pages, no more photos avialable`,
      });
    }
    const heightCard =
      galleryEl.lastElementChild.getBoundingClientRect().height;

    scrollBy({
      top: heightCard * 2 + 48,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  }
};
formEl.addEventListener('submit', onSubmit);
