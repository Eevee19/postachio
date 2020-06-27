import React, { Component } from "react";
import Search from "./Search.jsx";
import Posts from "./Posts.jsx";
import { Link, Switch, Route } from "react-router-dom";
import Modal from "./Modal.jsx";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        if (this._isMounted) {
          this.setState({
            posts: data,
          });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div id="view">
        <Search />
        <Switch>
          <Route
            component={() => <Posts posts={this.state.posts} />}
            path="/main"
          />
          <Route component={Modal} path="/createpost" />
        </Switch>
        <Link to="/createpost">
          <button id="create-btn">+</button>
        </Link>
      </div>
    );
  }
}
export default View;
