import React, { Component } from "react";
import Search from "./Search.jsx";
import Posts from "./Posts.jsx";

class View extends Component {
  render() {
    return (
      <div>
        <Search />
        <Posts />
        <button id="create-btn">+</button>
      </div>
    );
  }
}
export default View;
