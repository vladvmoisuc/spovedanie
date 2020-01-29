import React, { Component } from "react";
import classNames from "classnames";

// Components
import Button from "../../components/Button";
import NotFound from "../../components/NotFound";
import DifficultyLevel from "../../components/DifficultyLevel";

// Utilities
import { mapCategoryToColor } from "../../utils/strings";
import { randomizeList } from "../../utils/arrays";

// Stylesheet
import "./Question.scss";

class Question extends Component {
  state = {
    questions: [],
    currentQuestionIndex: 0
  };

  componentDidMount = () => {
    this.handleQuestionsList();
  };

  // Use componentDidUpdate to be sure that questions are fetched
  // and placed into the state(mainly for when the page is accesed directly, not
  // through the menu)
  componentDidUpdate = (prevProps, prevState) => {
    const { questions: propsQuestions, match, history } = this.props;
    const { questions, currentQuestionIndex } = this.state;
    if (prevProps.questions !== propsQuestions) {
      this.handleQuestionsList();
    }
    if (prevState.questions !== questions) {
      if (questions.length) this.handleUrlChange();
    }
    if (prevState.currentQuestionIndex !== currentQuestionIndex) {
      questions[currentQuestionIndex] &&
        history.push(
          `/${match.params.category}/${questions[currentQuestionIndex]._id}`
        );
    }
    if (prevProps.match.params.id !== match.params.id) {
      this.handleUrlChange();
    }
  };

  handleQuestionsList = () => {
    let { questions, match } = this.props;
    const { category } = match.params;
    if (category === "oricare") {
      questions = Object.keys(questions).reduce((list, category) => {
        if (questions[category]) list = [...list, ...questions[category]];
        return list;
      }, []);
    } else {
      questions = questions[category];
    }
    this.setState({
      questions: randomizeList(questions)
    });
  };

  handleQuestionChange = () => {
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    });
  };

  handleUrlChange = () => {
    const { history, match } = this.props;
    let { id, category } = match.params;
    let { questions, currentQuestionIndex } = this.state;
    // Condition placed for the moments when the state is empty
    // (componentDidMount / componentDidUpdate -> until rerender)
    if (!questions.length) return;
    else if (!id) {
      // Place in the URL the id of the first question from the state
      // Used mainly for the moments when http://domain.xyz/:category is accesed directly, without an /:id appended
      id = questions[currentQuestionIndex]._id;
      history.replace(`/${category}/${id}`);
    } else if (id) {
      currentQuestionIndex = questions.findIndex(({ _id }) => _id === id);
      this.setState({
        currentQuestionIndex
      });
    }
  };

  render() {
    const { currentQuestionIndex, questions } = this.state;
    const color = mapCategoryToColor(this.props.match.params.category);
    if (questions[currentQuestionIndex]) {
      return (
        <div className="question-section">
          <DifficultyLevel
            color={color}
            difficulty={questions[currentQuestionIndex].difficulty}
          />
          <h1 className="question-section__heading heading">
            {questions[currentQuestionIndex].question}
          </h1>
          <Button
            className={classNames(
              "question-section__button",
              `button_${color}`
            )}
            label="Schimbă întrebarea"
            onClick={this.handleQuestionChange}
          />
        </div>
      );
    } else {
      return (
        <div className="question-section">
          <NotFound />
        </div>
      );
    }
  }
}

export default Question;
