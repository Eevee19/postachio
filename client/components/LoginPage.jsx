import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });

    console.log(this.state);
  };

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });

    console.log(this.state);
  };

  handleSubmit(e) {
    // Code to handle submit.
    e.preventDefault();

    const { username, password } = this.state;

    const user = {
      username,
      password
    };

    axios
      .post('/login', user)
      .then(() => console.log('Add code here for successful login'))
      .catch(err => {
        console.log(err);
      });
  };

  handleClick(e) {
    e.preventDefault();

    axios
      .get('/github')
      .then((res) => console.log('Github~~~!!!!', res))
      .catch(() => console.log('Github FAIL'));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} id="github-btn">Sign In with Github!</button>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username-input">Username:</label>
          <input onChange={this.handleUsernameChange} type="text" id="username-input" />
          <label htmlFor="password-input">Password:</label>
          <input onChange={this.handlePasswordChange} type="password" id="password-input" />
          <button onSubmit={this.handleSubmit} type="submit" id="login-btn">Login</button>
        </form>
      </div>
    );
  };
};

export default LoginPage;