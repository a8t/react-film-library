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
      current: {},
      filterIsFaves: false
    }
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    this.handleFilterToggle = this.handleFilterToggle.bind(this)
  }

  handleFaveToggle(e, film) {
    e.stopPropagation()
    let favesClone = this.state.faves.slice() 
    const filmIndex = favesClone.indexOf(film)
      
    
    if (filmIndex > -1) {
      
      favesClone.splice(filmIndex,1)
      
      this.setState({
        faves: favesClone
      })
    } else {
      this.setState({
        faves: [...favesClone, film]
      })
    }
  }

  handleFilterToggle() {
    this.setState({
      filterIsFaves: !this.state.filterIsFaves
    })
  }

  render() {
    console.log(this.state.faves);
    

    return (
      <div className="film-library">
        <FilmListing 
          films={this.state.filterIsFaves ? this.state.faves : this.state.films } 
          faves={this.state.faves} 
          faveToggle={this.handleFaveToggle} 
          favesCount={this.state.faves.length}
          filterIsFaves={this.state.filterIsFaves}
          handleFilterToggle={this.handleFilterToggle}
        />

        <FilmDetails films={this.state.current}/>
      </div>
    );
  }
}

export default App;
