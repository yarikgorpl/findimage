import axios from 'axios';

const API_KEY = '34553245-0215fc3b52d59e1d2b85f0996';
const BASE_URL = 'https://pixabay.com/api/';

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements.searchQuery.value.trim();

  if (!searchQuery) {
    alert('Please enter a search query.');
    return;
  }

  const searchParams = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  axios
    .get(BASE_URL, {
      params: searchParams,
    })
    .then(({ data }) => {
      console.log('Images:', data.hits);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      alert('An error occurred while fetching images. Please try again later.');
    });
}
