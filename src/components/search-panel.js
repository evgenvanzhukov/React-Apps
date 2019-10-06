import React, {Component} from 'react';
import './search-panel.css'

export default class SearchPanel extends Component {
  
  state = {
    text:''
  };

  searching = (e) => {
    this.props.onSearchChange(e.target.value);
    this.setState({
      text: e.target.value
    })
  }

  render() { 
    const searchStyle = {
      fontSize: '20px'
    }

    const searchText = 'enter filter text';
    return <input
              className="search-input"
              style={searchStyle}
              placeholder={searchText}
              onChange={this.searching}
              value={this.state.text}
              />;
  }
};

