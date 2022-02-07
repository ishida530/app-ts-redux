
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import './index.scss';
import App from './App';
import {
  BrowserRouter,
} from "react-router-dom";
import store from './store/store';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

  ,
  document.getElementById('root')
);

reportWebVitals();
