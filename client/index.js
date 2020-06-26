import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
// import store from './store.js';
<<<<<<< HEAD
import styles from './style.scss';
=======
import styles from './assets/style.scss';
>>>>>>> master

render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider >
  document.getElementById('root')
);