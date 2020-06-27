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
          <Route component={LoginPage} exact path="/"/> 
          <Route component={Register} path="/signup"/>
          <Route component={Main} path="/main"/>
        </Switch>
      </div>
    );
  };
};

export default App;