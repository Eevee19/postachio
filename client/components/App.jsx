import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage.jsx";
import Main from "./Main.jsx";
import Register from "./Register.jsx";
import * as actions from "../action.js";
import { connect } from "react-redux";

// mapStateToProps = isLoggedIn

class App extends Component {
  constructor() {
    super();

    this.state = {
      isLoggIn: false,
    };
  }

  componentDidMount() {
    fetch("/authenticategithub")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          isLoggedIn: res,
        })
      );
  }

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Switch>
          <Route component={Main} path="/main" />
          <Route component={Register} path="/signup" />
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
        </Switch>
      );
    }
    return (
      <div>
        <Switch>
          <Route component={Main} path="/main" />
          <Route component={Register} path="/signup" />
          <Route component={LoginPage} exact path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
