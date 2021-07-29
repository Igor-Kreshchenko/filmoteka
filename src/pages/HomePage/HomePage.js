import React from "react";
import Section from "../../components/Section";
import MoviesList from "../../components/MoviesList";
import Modal from "../../components/Modal";

const HomePage = ({ movies, onOpenModal, showModal, onCloseModal, movie }) => {
  return (
    <>
      <Section>
        <MoviesList movies={movies} onClick={onOpenModal} />
      </Section>

      {showModal && <Modal onClose={onCloseModal} movie={movie} />}
    </>
  );
};

export default HomePage;
