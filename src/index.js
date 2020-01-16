import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
if (process.env.API) axios.defaults.baseURL = process.env.API;
axios.defaults.baseURL = 'https://cobuilder-api.herokuapp.com/';

if(localStorage.getItem("token")){
    axios.defaults.headers.common['Authorization'] = "token"+" "+localStorage.getItem("token");
}
else{
    delete axios.defaults.headers.common['Authorization'];
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
