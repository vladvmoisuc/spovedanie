import React, { Component } from "react";

// Components
import Form from "../../components/Form";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

// Utilities
import http from "../../services/http";

// Stylesheet
import "./QuestionEdit.scss";

class QuestionEdit extends Component {
  state = {
    author: "",
    question: "",
    isPublished: "",
    category: "",
    difficulty: ""
  };

  async componentDidMount() {
    const { category: urlCateg, id } = this.props.match.params;
    const url = `/questions/${urlCateg}/${id}`;
    const response = await http("GET", url);
    const {
      author,
      question,
      isPublished,
      category,
      difficulty
    } = await response.json();
    this.setState({
      author,
      question,
      isPublished,
      category,
      difficulty
    });
  }

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleEdit = async e => {
    e.preventDefault();
    const { id } = this.props.match.params;
    const endpoint = `/questions/${id}`;
    const token = localStorage.getItem("Authentification Token");
    const body = JSON.stringify(this.state);
    const headers = {
      "X-Authorization-Token": token
    };
    await http("PUT", endpoint, body, headers);
    this.props.history.push("/questions");
  };

  render() {
    const { author, question, isPublished, category, difficulty } = this.state;
    return (
      <Form
        heading="Vrei să editezi o întrebare?"
        buttonLabel="Modifică întrebarea"
        onSubmit={this.handleEdit}
      >
        <InputGroup
          id="author"
          type="text"
          label="Autorul întrebării"
          value={author}
          onChange={this.handleInputChange}
        />
        <InputGroup
          id="question"
          type="text"
          label="Întrebarea"
          value={question}
          onChange={this.handleInputChange}
        />
        <InputGroup
          id="isPublished"
          type="text"
          label="E publicată?"
          value={isPublished}
          onChange={this.handleInputChange}
        />
        <InputGroup
          id="category"
          type="text"
          label="Categorie"
          value={category}
          onChange={this.handleInputChange}
        />
        <InputGroup
          id="difficulty"
          type="text"
          label="Dificultatea întrebării"
          value={difficulty}
          onChange={this.handleInputChange}
        />
        <Button
          className="button_blue"
          label="Modifică întrebarea"
          onClick={this.handleLogin}
        />
      </Form>
    );
  }
}

export default QuestionEdit;
