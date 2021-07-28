import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Library from "./pages/Library";
import LogIn from "./pages/LogIn";
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
    <div className="App">
      <AppBar onChangeQuery={onChangeQuery} />
      <Container>
        <Switch>
          <Route exact path={routes.home}>
            <Home
              movies={movies}
              movie={movie}
              onOpenModal={onOpenModal}
              showModal={showModal}
              onCloseModal={onCloseModal}
            />
          </Route>

          <Route path={routes.library} component={Library} />
          <Route path={routes.logIn} component={LogIn} />
          <Redirect to={routes.home} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
