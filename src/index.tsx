import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import "antd/dist/antd.css";
import {Provider} from "react-redux";

import './index.scss';
import App from './App';
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App/>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

