import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      films: TMDB.films,
      faves: [],
      current: {}
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
  }

  handleFaveToggle(e, film) {
    e.stopPropagation()
    let favesClone = this.state.faves 
    const filmIndex = favesClone.indexOf(film)
    
    if (filmIndex > -1) {
      favesClone.splice(filmIndex)
      this.setState({
        faves: favesClone
      })
    } else {
      this.setState({
        faves: [...favesClone, film]
      })
      
    }

  }

  render() {

    return (
      <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} faveToggle={this.handleFaveToggle} favesCount={this.state.faves.length}/>

        <FilmDetails films={this.state.current}/>
      </div>
    );
  }
}

export default App;
