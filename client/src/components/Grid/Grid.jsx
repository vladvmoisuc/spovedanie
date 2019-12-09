import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Grid.scss";

const Grid = ({ className, children }) => {
  return <div className={classNames("grid", className)}>{children}</div>;
};

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Grid;
