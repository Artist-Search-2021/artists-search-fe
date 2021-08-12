/* eslint-disable max-len */
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import ArtistReleases from '../display/ArtistReleases';
import ReleaseDetail from '../display/ReleaseDetail';
import SongLyrics from '../display/SongLyrics';
import Header from '../common/Header';
import Home from '../home/Home';

export default function App() {
  return (<div className="App">
   
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/artist/:id" component={ArtistReleases}></Route>
      <Route exact path="/release/:id" component={ReleaseDetail}></Route>
      <Route exact path="/release/lyrics/:id" component={SongLyrics}></Route>
      <Redirect to="/" />
    </Switch>
    

  </div>);
}
