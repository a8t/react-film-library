import React, {Component} from 'react';
import  FilmPoster  from "./FilmPoster";
import Fave from "./Fave"

class FilmRow extends Component {
  render () {
    const {id, title, poster_path, backdrop_path, overview, release_date} = this.props.movie

    return (
      <div className="film-row">
        <FilmPoster posterURL={"https://image.tmdb.org/t/p/w780/"+poster_path}/>

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{(new Date(release_date)).getFullYear()}</p>
        </div>
        <Fave />
      </div>
    )
  }
}

export default FilmRow