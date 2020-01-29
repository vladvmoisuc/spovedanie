import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="not-found__heading heading">
        Te întrebi de ce vezi pagina asta? Și noi ne întrebăm ce întrebare ar fi
        trebuit să apară aici.
      </h1>
      <Link to="/">
        <Button className="button_blue" label="Înapoi la meniul principal" />
      </Link>
    </div>
  );
};

export default NotFound;
