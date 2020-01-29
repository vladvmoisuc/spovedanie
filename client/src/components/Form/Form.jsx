import React from "react";

// Stylesheet
import "./Form.scss";

const Form = ({ heading, children, buttonLabel, onSubmit }) => {
  return (
    <div className="form-container">
      <h1 className="form__heading heading">{heading}</h1>
      <form className="form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Form;
