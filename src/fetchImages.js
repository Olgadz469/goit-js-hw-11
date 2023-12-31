import axios from 'axios';
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '39741653-b91bc537daff05ac15601d270';

async function fetchImages(query, page, perPage) {

  const response = await axios.get(
   `${API_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,

  );
  return response.data;

}

export { fetchImages };