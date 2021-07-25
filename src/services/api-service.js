import axios from "axios";

const API_KEY = "4ee9f3c9031692c2042b06be7b52de80";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = (currentPage = 1) => {
  const url = `/trending/all/week?api_key=${API_KEY}&page=${currentPage}`;
  return axios.get(url).then(({ data }) => data.results);
};

export const fetchSearchMovies = (query, currentPage = 1) => {
  const url = `/search/movie?api_key=${API_KEY}&query=${query}&page=${currentPage}&include_adult=false`;

  return axios.get(url).then(({ data }) => data.results);
};
