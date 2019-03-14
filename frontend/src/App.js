import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Homepage from './components/homepage.jsx';
import NavBar from './components/navBar.jsx';
import MovieContainer from './components/containers/movieContainer.js';
import Genres from './components/genres/fetchGenre.jsx';
import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/movies' component={MovieContainer} />

      </>
    );
  }
}

export default App;
