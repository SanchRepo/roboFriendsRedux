import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'
import { thunk } from 'redux-thunk'
import './index.css';
import App from './containers/App';
import "tachyons";
import { searchRobots, reduceRobots } from './reducers';
import reportWebVitals from './reportWebVitals';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots, reduceRobots})
const store = createStore(rootReducer, applyMiddleware(thunk, logger))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
