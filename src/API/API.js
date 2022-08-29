import axios from 'axios';
const KEY = 'f1ede884e56fe0f7b64d4165e0e8bda7';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';
const ID_MOVIE = 'https://api.themoviedb.org/3/movie/';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
export const getMovies = async page => {
  const response = await axios.get(`${BASE_URL}?api_key=${KEY}&page=${page}`);

  return response.data;
};

export const searchMovies = async ({ search }) => {
  const response = await axios.get(
    `${SEARCH_URL}?api_key=${KEY}&query=${search}`
  );

  return response.data.results;
};

export const getIdMovie = async movieId => {
  const response = await axios.get(`${ID_MOVIE}/${movieId}?api_key=${KEY}`);

  return response.data;
};

export const getCastMovie = async movieId => {
  const response = await axios.get(
    `${ID_MOVIE}/${movieId}/credits?api_key=${KEY}`
  );

  return response.data.cast;
};

export const getRevievMovie = async movieId => {
  const response = await axios.get(
    `${ID_MOVIE}/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );

  return response.data.results;
};
