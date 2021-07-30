import { createContext, useState, useEffect } from "react";
import {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieById,
} from "../services/api-service";

const MoviesContext = createContext({
  movies: [],
  movie: null,
  currentPage: 1,
  searchQuery: "",
  showModal: false,
  onChangeQuery: (query) => {},
  onOpenModal: (e) => {},
  onCloseModal: () => {},
});

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchTrendingMovies().then((movies) => setMovies([...movies]));
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchSearchMovies(searchQuery).then((movies) => setMovies([...movies]));
    }
  }, [searchQuery]);

  const onChangeQuery = (query) => {
    setMovies([]);
    setCurrentPage(1);
    setSearchQuery(query);
  };

  const onOpenModal = ({ currentTarget }) => {
    const movieId = currentTarget.id;

    fetchMovieById(movieId).then((movie) => {
      setMovie(movie);
      setShowModal(true);
    });
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const context = {
    movies,
    movie,
    currentPage,
    searchQuery,
    showModal,
    onChangeQuery,
    onOpenModal,
    onCloseModal,
  };

  return (
    <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>
  );
};

export default MoviesContext;
