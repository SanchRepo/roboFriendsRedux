import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Card from './Card';
import "tachyons"
import reportWebVitals from './reportWebVitals';
import {robots} from './robots'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {<Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email} />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
