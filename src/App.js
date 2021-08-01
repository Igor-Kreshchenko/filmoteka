import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/Layout";
import routes from "./routes";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const LibraryPage = lazy(() => import("./pages/LibraryPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const App = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.library} component={LibraryPage} />
          <Route path={routes.register} component={RegisterPage} />
          <Route path={routes.logIn} component={LoginPage} />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

export default App;
