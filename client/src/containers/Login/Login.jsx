import React, { Component } from "react";

// Components
import Form from "../../components/Form";
import InputGroup from "../../components/InputGroup";
import Button from "../../components/Button";

import http from "../../services/http";

// Stylesheet
import "./Login.scss";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleLogin = async e => {
    e.preventDefault();
    const body = { body: JSON.stringify(this.state) };
    const { headers } = await http("POST", "/login/", body);
    const token = headers.get("X-Authorization-Token");
    localStorage.setItem("Authentification Token", token);
    if (token) this.props.history.push("/questions");
  };

  render() {
    const { username, password } = this.state;

    return (
      <Form
        heading="Ne logăm și noi puțin?"
        buttonLabel="Loghează-te"
        onSubmit={this.handleLogin}
      >
        <InputGroup
          id="username"
          type="text"
          label="Nume de utilizator"
          value={username}
          onChange={this.handleInputChange}
        />
        <InputGroup
          id="password"
          type="password"
          label="Parola"
          value={password}
          onChange={this.handleInputChange}
        />
        <Button
          className="button_blue"
          label="Loghează-te"
          onClick={this.handleLogin}
        />
      </Form>
    );
  }
}

export default Login;
