/* eslint-disable import/extensions
*/
/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
// import App from './component/App';
import { BrowserRouter } from 'react-router-dom';
import getMovie from './reducers';
import Routes from './Route';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(getMovie, composeEnhancer(applyMiddleware(thunk)));
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
);
/* eslint-enable import/extensions */
/* eslint-enable import/extensions */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
