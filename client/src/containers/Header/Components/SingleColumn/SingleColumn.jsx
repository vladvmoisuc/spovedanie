import React from "react";
import { Link } from "react-router-dom";

// Assets
import Logo from "../../../../images/logo.png";

// Stylesheet
import "./SingleColumn.scss";

const SingleColumn = () => {
  return (
    <header className="header header_single-column">
      <Link to="/" className="header__logo-container">
        <img
          className="header__logo"
          src={Logo}
          alt="Logo-ul aplicației @spovedanie."
        />
      </Link>
    </header>
  );
};

export default SingleColumn;
