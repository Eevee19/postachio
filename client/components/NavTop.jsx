import React from 'react';

const NavTop = (props) => {
  // creating an image
  // creating a sign out button 
  return (
    <div>
      <div id="logo">
        <h1>postachio</h1><img src="./assets/logo.png" id="logo-img" />
        <br />
        <h4>by brian, joyce, nicole, shah, victor</h4>
      </div>
      <nav id="navtop">
        <ul id="navtop-list">
          <li>Helpdesk</li>
          <li>My Account</li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavTop;