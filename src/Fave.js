import React, {Component} from 'react';

class Fave extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isFave: false,
    }
  }

  handleClick(e) {
    
    e.stopPropagation()
    this.setState({
      isFave: !this.state.isFave,
    })
    
  }

  render () {

    const addRemove = this.state.isFave ? "remove_from_queue" : "add_to_queue"
    
    return (
      <div onClick={this.handleClick} className={`film-row-fave ${addRemove}`}>
        <i className="material-icons">add_to_queue</i>
      </div>
    )
  }
}

export default Fave