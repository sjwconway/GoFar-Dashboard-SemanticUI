import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import DashboardPage from './Components/Pages/DashboardPage';
import LoginPage from "./Components/Pages/LoginPage";
import HomePage from "./Components/Pages/HomePage";
import history from "./history";

// Style for SemanticUI

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
