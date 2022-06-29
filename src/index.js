import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tic_Tac_Toe from './Tic_Tac_Toe';


// test
import reportWebVitals from './TEST/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tic_Tac_Toe/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
