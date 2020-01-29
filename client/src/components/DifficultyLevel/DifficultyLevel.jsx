import React from "react";
import classNames from "classnames";
import { difficultyLevels } from "../../constants/constants";
import "./DifficultyLevel.scss";

const LevelBar = ({ className }) => {
  return <span className={`level-bar ${className}`}></span>;
};

const DifficultyLevel = ({ difficulty, color }) => {
  const difficultyLevel = difficultyLevels[difficulty];
  return (
    <div className="difficulty-level">
      <LevelBar
        className={classNames({
          [`level-bar_${color}`]: difficultyLevel >= 0
        })}
      />
      <LevelBar
        className={classNames({
          [`level-bar_${color}`]: difficultyLevel >= 1
        })}
      />
      <LevelBar
        className={classNames({
          [`level-bar_${color}`]: difficultyLevel >= 2
        })}
      />
    </div>
  );
};

export default DifficultyLevel;
