import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import routes from "./routes";
import "./App.css";
import {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieById,
} from "./services/api-service";

const App = () => {
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

  return (
    <Layout>
      <Switch>
        <Route exact path={routes.home}>
          <HomePage
            onChangeQuery={onChangeQuery}
            movies={movies}
            movie={movie}
            onOpenModal={onOpenModal}
            showModal={showModal}
            onCloseModal={onCloseModal}
          />
        </Route>
        <Route path={routes.library} component={LibraryPage} />
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.logIn} component={LoginPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Layout>
  );
};

export default App;
