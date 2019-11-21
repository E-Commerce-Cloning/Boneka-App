import React, { Component } from "react";

import LoginPage from "./Components/LoginPage";
import "./App.css";
import Register from "./Components/Register";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Profil from "./Components/Profil";

// import {Provider} from 'react-redux';
// import store from './Components/Redux/store';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      //  <Provider store ={store}>
      <BrowserRouter>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={Profil} />
      </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
