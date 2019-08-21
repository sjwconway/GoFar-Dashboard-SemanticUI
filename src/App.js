import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/Pages/Dashboard'; 
import LoginPage from  './Components/Pages/LoginPage';
import history from './history';

// Style for SemanticUI



class App extends Component {
    render () {
        return (
            <Router history={history}>
                <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/login" component={LoginPage} />
                </Switch>
            </Router>
            
        )
    }
};

export default App;
