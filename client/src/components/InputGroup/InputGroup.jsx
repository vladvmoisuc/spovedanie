import React from "react";

// Stylesheet
import "./InputGroup.scss";

const InputGroup = ({ id, type, label, value, onChange }) => {
  return (
    <div className="input-group">
      <label className="input-group_label" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        className="input-group_input"
        type={type}
        id={id}
        value={value}
      />
    </div>
  );
};

export default InputGroup;
