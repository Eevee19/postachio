import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './LoginPage.jsx';
import Main from './Main.jsx';
import Register from './Register.jsx'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Switch> 
          <Route component={Main} path="/main"/>
          <Route component={Register} path="/signup"/>
          <Route component={LoginPage} exact path="/"/> 
        </Switch>
      </div>
    );
  };
};

export default App;