import React from "react";
import { Link } from "react-router-dom";

// Assets
import { ReactComponent as Arrow } from "../../../../images/arrow-icon.svg";
import Logo from "../../../../images/logo.png";

// Stylesheet
import "./TwoColumns.scss";

const TwoColumns = ({ history }) => {
  return (
    <header className="header header__two-columns">
      <div className="header__left-container">
        <Arrow className="header__go-back" onClick={history.goBack} />
      </div>
      <div className="header__right-container">
        <Link to="/" className="header__logo-container">
          <img
            className="header__logo"
            src={Logo}
            alt="Logo-ul aplicației @spovedanie."
          />
        </Link>
      </div>
    </header>
  );
};

export default TwoColumns;
