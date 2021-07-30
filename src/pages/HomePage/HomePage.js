import React, { useContext } from "react";
import Section from "../../components/Section";
import MoviesList from "../../components/MoviesList";
import Modal from "../../components/Modal";
import SearchForm from "../../components/SearchForm";
import MoviesContext from "../../store/movies-context";

const HomePage = ({
  onChangeQuery,
  movies,
  onOpenModal,
  onCloseModal,
  movie,
}) => {
  const moviesContext = useContext(MoviesContext);
  const showModal = moviesContext.showModal;

  return (
    <>
      <SearchForm onChangeQuery={onChangeQuery} />
      <Section>
        <MoviesList movies={movies} onClick={onOpenModal} />
      </Section>

      {showModal && <Modal onClose={onCloseModal} movie={movie} />}
    </>
  );
};

export default HomePage;
