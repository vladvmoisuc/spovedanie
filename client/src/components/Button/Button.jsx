import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.scss";

const Button = ({ className, label, value, isDisabled, onClick }) => {
  return (
    <button
      className={classNames("button", className)}
      disabled={isDisabled}
      onClick={onClick}
      value={value}
    >
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
