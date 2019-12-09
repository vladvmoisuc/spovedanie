import React from "react";
import { Switch, Route } from "react-router-dom";

// Containers
import CategoriesGrid from "./containers/CategoriesGrid";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Question from "./containers/Question";

// Stylesheet
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Switch>
          <Route
            path="/"
            exact
            render={props => <CategoriesGrid {...props} />}
          />
          <Route
            path="/:category/:questionId"
            render={props => <Question {...props} />}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default App;
