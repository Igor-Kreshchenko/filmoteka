import React, { Component } from "react";
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

class App extends Component {
  state = {
    movies: [],
    clickedMovie: null,
    currentPage: 1,
    searchQuery: "",
    showModal: false,
    error: null,
  };

  componentDidMount() {
    fetchTrendingMovies().then((movies) =>
      this.setState({ movies: [...movies] })
    );
  }

  componentDidUpdate(_, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      fetchSearchMovies(searchQuery).then((movies) =>
        this.setState({ movies: [...movies] })
      );
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      movies: [],
      currentPage: 1,
      searchQuery: query,
      error: null,
    });
  };

  onOpenModal = ({ currentTarget }) => {
    const movieId = currentTarget.id;
    fetchMovieById(movieId).then((movie) =>
      this.setState({ showModal: true, clickedMovie: movie })
    );
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { movies, clickedMovie, showModal } = this.state;
    const { onChangeQuery, onOpenModal, onCloseModal } = this;

    return (
      <div className="App">
        <Layout onChangeQuery={onChangeQuery}>
          <Section>
            <MoviesList movies={movies} onClick={onOpenModal} />
          </Section>
        </Layout>

        {showModal && <Modal onClose={onCloseModal} movie={clickedMovie} />}
      </div>
    );
  }
}

export default App;
