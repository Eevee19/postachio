import React, { Component } from "react";
import NavTop from "./NavTop.jsx";
import NavSide from "./NavSide.jsx";
import View from "./View.jsx";
import axios from "axios";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <NavTop />
        <div id="container">
          <NavSide />
          <View />
        </div>
      </div>
    );
  }
}

export default Main;
