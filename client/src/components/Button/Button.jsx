import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ className, label, onClick }) => {
  return (
    <button className={classNames("button", className)} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default Button;
