import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from './Components/Dashboard'
// import Profil from './Components/Profil'
// import Home from '../src/Home'
// import NavDB from './Components/Navbar'

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.unregister();
