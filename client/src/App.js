import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Containers
import CategoriesGrid from "./containers/CategoriesGrid";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import Question from "./containers/Question";
import Login from "./containers/Login";
import QuestionsList from "./containers/QuestionsList";
import QuestionEdit from "./containers/QuestionEdit";

// Stylesheet
import "./App.scss";

class App extends Component {
  state = {
    questionsByCategory: {
      diverse: [],
      ciudate: [],
      perverse: []
    }
  };

  componentDidMount = () => {
    fetch("/api/questions/")
      .then(response => response.json())
      .then(questions => {
        const questionsByCategory = {
          diverse: [],
          ciudate: [],
          perverse: []
        };

        questions.forEach(question => {
          questionsByCategory[question.category].push(question);
        });

        this.setState({
          questionsByCategory
        });
      });
  };

  render() {
    const { questionsByCategory } = this.state;
    return (
      <div className="app">
        <Header />
        <main className="main">
          <Switch>
            <Route
              path="/questions/:category/:id"
              render={props => <QuestionEdit {...props} />}
            ></Route>
            <Route path="/login" render={props => <Login {...props} />}></Route>
            <Route path="/questions">
              <QuestionsList questions={questionsByCategory} />
            </Route>
            <Route
              path={["/:category/:id", "/:category/"]}
              render={props => (
                <Question {...props} questions={questionsByCategory} />
              )}
            />
            <Route
              path="/"
              exact
              render={props => <CategoriesGrid {...props} />}
            />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
