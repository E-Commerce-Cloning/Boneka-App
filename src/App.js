import React from "react";
import store from "./Public/Redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import DashboardAfterLogin from "./Pages/Dashboard After Log";
import ChartEmpty from "./Pages/ChartEmpty";
import Login from "./Pages/Login/LoginPage";
import Register from "./Pages/Register/Register";
import Chart from "./Pages/Chart";
import Detail from "./Pages/Detail";
import Profil from "./Pages/Profil";
import Kategori from "./Components/Kategori";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route path="/dashboard" component={DashboardAfterLogin} />
          <Route path="/login" component={Login} />
          <Route path="/chartempty" component={ChartEmpty} />
          <Route path="/register" component={Register} />
          <Route path="/chart" component={Chart} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/kategori" component={Kategori} />
          <Route path="/" component={Dashboard} />
          {/* <Route path="/profil" component={Profil} /> */}
        </Switch>
      </Provider>
    </Router>
    // <DashboardAfterLogin />
  );
};
export default App;
