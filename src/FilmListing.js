import React, {Component} from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {

  constructor(props) {
    super(props)
    this.handleFaveClick = this.handleFaveClick.bind(this)
    this.state = {
      filter: "All"
    }
  }
  
  handleFaveClick(filter) {
    this.setState({
      filter: filter
    })    
  }

  render () {
    const filmRows =  this.props.films.map(eachMovie => <FilmRow key={eachMovie.id} film={eachMovie} />)
    const favesActive =  this.state.filter === "Faves" ? "is-Active" : ""
    const allActive =  this.state.filter === "All" ? "is-Active" : ""

    return (
      <div className="film-list">
        <h1 className="section-title">
          FILMS
        </h1>

        <div className="film-list-filters">
          <div className={`film-list-filter ${allActive}`} onClick={() => this.handleFaveClick("All")}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${favesActive}`} onClick={() => this.handleFaveClick("Faves")}>
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {filmRows}
      </div>
      
    )
  }
}

export default FilmListing