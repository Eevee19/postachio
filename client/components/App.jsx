import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Main from './Main.jsx';


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  };
};

export default App;