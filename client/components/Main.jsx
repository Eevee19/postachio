import React, {Component} from 'react';
import NavTop from './NavTop.jsx';
import NavSide from './NavSide.jsx';
import View from './View.jsx';
import axios from 'axios';

class Main extends Component {
  constructor(props) { 
    super(props);
  };

  render() {
    return (
      <div> 
        <NavTop /> 
        <NavSide />
        {/* <View /> */}
      </div> 
    );
  };
};

export default Main;