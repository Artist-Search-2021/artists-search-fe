/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Header from '../common/Header';
import Home from '../home/Home/Home';

export default function App() {
  return (<div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>

  </div>);
}
