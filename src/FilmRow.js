import React, {Component} from 'react';
import  FilmPoster  from "./FilmPoster";
import Fave from "./Fave"

class FilmRow extends Component {
  constructor(props) {
    super(props)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
  }

  handleDetailsClick() {
    console.log(`Fetching details for ${this.props.film.title}`);
  }

  render () {
    const {id, title, poster_path, backdrop_path, overview, release_date} = this.props.film
    
    
    return (
      <div className="film-row" onClick={this.handleDetailsClick}>
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