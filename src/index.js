import React from 'react';
import ReactDom from 'react-dom';
import './App.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import Context from './Context'


ReactDom.render(
<BrowserRouter>
<Context> <App /></Context>

</BrowserRouter>


, document.getElementById('root'));