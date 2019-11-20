import React from "react";

import LoginPage from './Components/LoginPage'
import "./App.css";
import Register from "./Components/Register";
import { BrowserRouter , Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Profil from './Components/Profil';
// import {Provider} from 'react-redux';
// import store from './Components/Redux/store';


function App () {
  return (
    // <Provider store ={store}>
    <BrowserRouter>
           

      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={Register} />
      <Route path ="/dashboard" component = {Dashboard}/>
      <Route path ="/profile" component = {Profil}/>
    </BrowserRouter>
    // </Provider>
  );
}

export default App