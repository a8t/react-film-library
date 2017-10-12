import React, {Component} from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {

  constructor(props) {
    super(props)
    this.handleFaveClick = this.handleFaveClick.bind(this)
  }
  
  handleFaveClick(filter) {
    this.setState({
      filter: filter
    })    
  }

  render () {
    const filmRows =  this.props.films.map(eachMovie => <FilmRow faveToggle= {this.props.faveToggle} key={eachMovie.id} film={eachMovie} isFave={this.props.faves.includes(eachMovie)}/>)
    const favesActive =  this.props.filterIsFaves ? "is-active" : ""
    const allActive = !this.props.filterIsFaves ? "is-active" : ""

    return (
      <div className="film-list">
        <h1 className="section-title">
          FILMS
        </h1>

        <div className="film-list-filters">
          <div className={`film-list-filter ${allActive}`} onClick={this.props.handleFilterToggle}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${favesActive}`} onClick={this.props.handleFilterToggle}>
            FAVES
            <span className="section-count">{this.props.favesCount}</span>
          </div>
        </div>

        {filmRows}
      </div>
      
    )
  }
}

export default FilmListing