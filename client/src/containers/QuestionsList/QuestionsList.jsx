import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import Filters from "../../components/Filters";
import QuestionCard from "../../components/QuestionCard";

// Utilities
import { mapCategoryToColor } from "../../utils/strings";
import { categoriesToQueryParams } from "../../utils/objects";
import http from "../../services/http";

// Stylesheet
import "./QuestionsList.scss";

class QuestionsList extends Component {
  state = {
    questions: [],
    isAdmin: false
  };

  componentDidMount() {
    if (localStorage.getItem("Authentification Token")) {
      this.setState({
        isAdmin: true
      });
    }
    let { questions } = this.props;
    questions = Object.keys(questions).reduce((acc, category) => {
      acc.push(...questions[category]);
      return acc;
    }, []);
    this.setState({
      questions
    });
  }

  componentDidUpdate(prevProps) {
    let { questions } = this.props;
    if (prevProps.questions !== questions) {
      questions = Object.keys(questions).reduce((acc, category) => {
        acc.push(...questions[category]);
        return acc;
      }, []);
      this.setState({
        questions
      });
    }
  }

  handleFiltering = async categories => {
    const endpoint = `/questions?${categoriesToQueryParams(categories)}`;
    const response = await http("GET", endpoint);
    const questions = await response.json();
    this.setState({
      questions
    });
  };

  handleDelete = async id => {
    const endpoint = `/questions/${id}`;
    const token = localStorage.getItem("Authentification Token");
    const headers = { "X-Authorization-Token": token };
    await http("DELETE", endpoint, {}, headers);
  };

  render() {
    const { questions, isAdmin } = this.state;
    return (
      <div className="questions">
        <Filters onFilter={this.handleFiltering} />
        <div className="questions-list">
          {questions.map(({ question, category, _id }) => {
            if (isAdmin) {
              return (
                <Link to={`/questions/${category}/${_id}`} key={question}>
                  <QuestionCard
                    isAdmin={isAdmin}
                    id={_id}
                    question={question}
                    color={mapCategoryToColor(category)}
                    onDelete={this.handleDelete}
                  />
                </Link>
              );
            } else {
              return (
                <QuestionCard
                  isAdmin={isAdmin}
                  id={_id}
                  question={question}
                  color={mapCategoryToColor(category)}
                  onDelete={this.handleDelete}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default QuestionsList;
