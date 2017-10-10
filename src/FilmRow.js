import React, {Component} from 'react';

class FilmRow extends Component {

  render () {
    const {id, title, poster_path, backdrop_path, overview, release_date} = this.props.movie
    return (
      <div className="film-row">
        <figure className="film-poster">
          <img src={"https://image.tmdb.org/t/p/w780/"+poster_path} alt="" />
        </figure>

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{(new Date(release_date)).getFullYear()}</p>
        </div>
      </div>
    )
  }
}

export default FilmRow