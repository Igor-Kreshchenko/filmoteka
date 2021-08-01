import React, { useContext } from "react";
import Section from "../../components/Section";
import MoviesList from "../../components/MoviesList";
import Modal from "../../components/Modal";
import SearchForm from "../../components/SearchForm";
import MoviesContext from "../../store/movies-context";

const HomePage = () => {
  const moviesContext = useContext(MoviesContext);
  const showModal = moviesContext.showModal;
  const movies = moviesContext.movies;

  return (
    <>
      <SearchForm />
      <Section>
        <MoviesList movies={movies} />
      </Section>

      {showModal && <Modal />}
    </>
  );
};

export default HomePage;
