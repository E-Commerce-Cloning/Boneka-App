import React, { Component } from "react";
import App from "./App";
import Dashboard from "./Components/Dashboard";
import Profil from "./Components/Profil";
import Login from "./Components/LoginPage";

class Home extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Login />
        <App />
        <Dashboard />
        <Profil />
      </div>
    );
  }
}
export default Home;
