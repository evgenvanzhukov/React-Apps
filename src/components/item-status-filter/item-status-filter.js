import React, {Component} from 'react';

export default class ItemStatusFilter extends Component {

  state = {
    active: true,
    done: true
  };
  
  changeFilter = (e) => {
    //console.log(e.target.innerText.toLowerCase());
    this.props.onSetFilter(e.target.innerText.toLowerCase());
  }

  render() {
    return (
      <div className="btn-group">
        <button
            type="button"
            className="btn btn-info"
            onClick={this.changeFilter}>
                All
        </button>
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.changeFilter}>
                Active
        </button>
        <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={this.changeFilter}>
                Done
        </button>
      </div>
    )
  }
}