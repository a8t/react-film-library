import React, {Component} from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {

  render () {
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        {this.props.movies.map( eachMovie => <FilmRow key={eachMovie.id} movie={eachMovie} />)}
      </div>
    )
  }
}

export default FilmListing