import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MoreIcon } from "../../images/more-icon.svg";

// Stylesheet
import "./FloatingButton.scss";

const FloatingButton = () => {
  return (
    <Link to="/questions" className="floating-button">
      <MoreIcon />
    </Link>
  );
};

export default FloatingButton;
