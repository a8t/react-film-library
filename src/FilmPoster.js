import React, {Component} from 'react';

class FilmPoster extends Component {

  render () {
    return (
      <figure className="film-poster">
        <img src={this.props.posterURL} alt="" />
      </figure>
    )
  }
}

export default FilmPoster