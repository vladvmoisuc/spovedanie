import React from "react";
import classNames from "classnames";
import { mapCategoryToColor } from "../../utils/strings";
import Button from "../../components/Button";
import "./Question.scss";

const Question = ({ match }) => {
  const { category } = match.params;
  return (
    <>
      <div className="question-section">
        <h1 className="question-section__heading heading">
          Ce subiect ți se pare prea serios ca să poți glumi despre el?
        </h1>
        <Button
          className={classNames(
            "question-section__button",
            `button_${mapCategoryToColor(category)}`
          )}
          label="Schimbă întrebarea"
        />
      </div>
    </>
  );
};

export default Question;
