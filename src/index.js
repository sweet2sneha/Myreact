import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./styles/Appmain.css"
//import styles from './styles/Appmain.css'
//import "../node_modules/bootstrap/dist/css/bootstrap.css"
//import { Provider } from 'react-redux';
//import { store } from './store';
//import reportWebVitals from './reportWebVitals'; //remove this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); // remove this


//we installed redux and reactredux
//we installed bootstrap
//actions (increment, decrement)
//we created a reducer
//combined reducers
//we created a store its inbuilt redux functionality
//then provide store to app


//useselector import from react redux. it is used to get initial data from reducer.
//usedispatch function returns from actions file

//from actions import increament and decreament. 
// type increment returns object so according to the type of actions
// increment decrement takes place in reducer.jsx
