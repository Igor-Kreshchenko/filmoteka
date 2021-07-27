import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Section from "./components/Section";
import MoviesList from "./components/MoviesList";
import Modal from "./components/Modal";
import {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieById,
} from "./services/api-service";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  // componentDidUpdate(_, prevState) {
  //   const { searchQuery } = this.state;

  //   if (prevState.searchQuery !== searchQuery) {
  //     fetchSearchMovies(searchQuery).then((movies) =>
  //       this.setState({ movies: [...movies] })
  //     );
  //   }
  // }

  useEffect(() => {
    fetchTrendingMovies().then((movies) => setMovies([...movies]));
  }, []);

  // useEffect(() => {
  //   fetchSearchMovies(searchQuery).then((movies) => setMovies([...movies]));
  // }, [searchQuery]);

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

  return (
    <div className="App">
      <Layout onChangeQuery={onChangeQuery}>
        <Section>
          <MoviesList movies={movies} onClick={onOpenModal} />
        </Section>
      </Layout>

      {showModal && <Modal onClose={onCloseModal} movie={movie} />}
    </div>
  );
};

export default App;
