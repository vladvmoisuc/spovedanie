import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import SingleColumn from "./Components/SingleColumn";
import TwoColumns from "./Components/TwoColumns";

// Stylesheet
import "./Header.scss";

const Header = () => {
  return (
    <Switch>
      <Route path="/:category" render={props => <TwoColumns {...props} />} />
      <Route exact path="/">
        <SingleColumn />
      </Route>
    </Switch>
  );
};

export default Header;
