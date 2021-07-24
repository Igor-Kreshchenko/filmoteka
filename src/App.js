import React from "react";
import Layout from "./components/Layout";
import Section from "./components/Section";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Section>
          <MoviesList />
        </Section>
      </Layout>
    </div>
  );
}

export default App;
