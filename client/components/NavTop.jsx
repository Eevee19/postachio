import React from "react";
import { Link } from "react-router-dom";

const NavTop = (props) => {
  // creating an image
  // creating a sign out button
  return (
    <div>
      <nav id="navtop">
        <div id="logo">
          <h1>postachio</h1>
          <img src="./assets/logo.png" id="logo-img" />
          <br />
          <h6 id="software-engineers">by brian, joyce, nicole, shah, victor</h6>
        </div>
        <ul id="navtop-list">
          <Link to="/main">
            <li id="home-link">Home</li>
          </Link>
          <li id="myaccount-link">My Account</li>
          <Link to="/">
            <li id="signout-link">Sign Out</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavTop;
