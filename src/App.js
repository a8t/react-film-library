import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

class App extends Component {
  
  render() {

    return (
      <div className="film-library">
        <FilmListing movies={TMDB.films}/>

        <FilmDetails movies={TMDB.films}/>
      </div>
    );
  }
}

export default App;
