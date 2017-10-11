import React, {Component} from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("handling fave click!");
    
  }
  
  render () {
    return (
      <div onClick={this.handleClick} className="film-row-fave add_to_queue">
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave