import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LibraryPage from "./pages/LibraryPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import routes from "./routes";
import "./App.css";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.library} component={LibraryPage} />
        <Route path={routes.register} component={RegisterPage} />
        <Route path={routes.logIn} component={LoginPage} />
        <Redirect to={routes.home} />
      </Switch>
    </Layout>
  );
};

export default App;
