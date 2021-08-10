/* eslint-disable max-len */
import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import Artist from '../display/Artist';
import Header from '../common/Header';
import Home from '../home/Home/Home';

export default function App() {
  return (<div className="App">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path='/artist/:id' component={Artist}></Route>
        <Redirect to="/" />
      </Switch>
    </Router>

  </div>);
}
