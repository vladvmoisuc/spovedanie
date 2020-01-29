import React from "react";
import classNames from "classnames";
import { ReactComponent as DeleteIcon } from "../../images/delete-icon.svg";
import { ReactComponent as EditIcon } from "../../images/edit-icon.svg";

//Stylesheet
import "./QuestionCard.scss";

const QuestionCard = ({ id, question, color, isAdmin, onDelete }) => {
  return (
    <div className={classNames("question-card", "copy")}>
      {isAdmin && (
        <div className="question-card__buttons">
          <span className="question-card__button">
            <EditIcon className="question-card__icon" />
          </span>
          <span className="question-card__button">
            <DeleteIcon
              className="question-card__icon"
              onClick={() => onDelete(id)}
            />
          </span>
        </div>
      )}
      <p
        className={classNames(
          "question-card__question",
          `question-card__question_${color}`
        )}
      >
        {question}
      </p>
    </div>
  );
};

export default QuestionCard;
