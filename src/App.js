import React from "react";

import LoginPage from './Components/LoginPage'
import "./App.css";
import Register from "./Components/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import {Provider} from 'react-redux';
// import store from './Components/Redux/store';


function App () {
  return (
    // <Provider store ={store}>
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route path="/Register" component={Register} />
    </Router>
    // </Provider>
  );
}

export default App