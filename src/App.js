import React, { Component } from "react";
import Layout from "./components/Layout";
import Section from "./components/Section";
import MoviesList from "./components/MoviesList";
import { fetchTrendingMovies, fetchSearchMovies } from "./services/api-service";
import "./App.css";

class App extends Component {
  state = {
    movies: [],
    currentPage: 1,
    searchQuery: "",
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

  render() {
    const { movies } = this.state;
    const { onChangeQuery } = this;

    return (
      <div className="App">
        <Layout onChangeQuery={onChangeQuery}>
          <Section>
            <MoviesList movies={movies} />
          </Section>
        </Layout>
      </div>
    );
  }
}

export default App;
