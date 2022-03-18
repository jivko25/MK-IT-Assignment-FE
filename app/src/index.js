import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './pages/myCollection/App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import {theme} from '../src/styles/theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
