import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
//sees if any action is returning an function instead of an object
import thunk from 'redux-thunk'//thunk/ middleware/ handle side effects -handles asynch functions
import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger'; //middleware
import reportWebVitals from './reportWebVitals';
import AppClass from './containers/AppClass';
import { searchData, requestData } from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));
const logger= createLogger()
const rootReducer=combineReducers({searchData, requestData})
const store = configureStore({
  middleware: [thunk, logger], 
  // reducer: searchData, //if we're targeting only 1 reducer
  reducer: rootReducer //rootReducer -> many reducer so we combine them to be rootReducer
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppClass/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
