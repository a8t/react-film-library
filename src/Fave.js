import React, {Component} from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
  }

  render () {

    const addRemove = this.props.isFave ? "remove_from_queue" : "add_to_queue"
    
    return (
      <div onClick={(e)=>this.props.faveToggle(e, this.props.film)} className={`film-row-fave ${addRemove}`}>
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave