import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../action.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  username: state.username,
  password: state.password,
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  usernameChange: (usernameInput) => {
    dispatch(actions.usernameChange(usernameInput.target.value));
  },
  passwordChange: (passwordInput) => {
    dispatch(actions.passwordChange(passwordInput.target.value));
  },
  authenticate: () => {
    dispatch(actions.authenticate);
  },
  // loginUser: (user) => {
  //   dispatch(actions.loginUser(user));
  // },
});

class LoginPage extends Component {
  // }

  // handleSubmit(e) {
  //   // Code to handle submit.
  //   e.preventDefault();

  //   const { username, password } = this.state;

  //   const user = {
  //     username,
  //     password,
  //   };

  //   axios
  //     .post("/login", user)
  //     .then((res) => {
  //       if (res.data) {
  //         this.setState({
  //           isLoggedIn: true,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/main" />;
    }
    return (
      <div id="login-box">
        <a
          href="http://github.com/login/oauth/authorize?client_id=018afc8e70d311f82880&redirect_uri=http://localhost:3000/user/login/callback"
          id="github-a"
        >
          <button id="github-btn">
            Sign in with Github
            <img src="./assets/fa-github.svg" alt="Github" id="fa-github" />
          </button>
        </a>
        <form onSubmit={this.props.authenticate}>
          <label
            htmlFor="username-input"
            id="username-input"
            className="login-label"
          >
            Username:
          </label>
          <input
            onChange={this.props.usernameChange}
            type="text"
            id="username-input"
            className="login-input"
          />
          <label
            htmlFor="password-input"
            id="password-input"
            className="login-label"
          >
            Password:
          </label>
          <input
            onChange={this.props.passwordChange}
            type="password"
            id="password-input"
            className="login-input"
          />
          <div id="login-btns">
            <button onSubmit={this.props.authenticate} id="login-btn">
              Login
            </button>
            <a href="#" id="register">
              Register
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
