import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      term: 'discgolf',
    }

    this.onSearchBarChange = props.onSearchBarChange;
    this.onSearchBarChange('apple');
  }


  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => {
            this.onSearchBarChange(event.target.value);
            this.setState({ term: event.target.value})
          }} 
        />
      </div>
    );
  }

}

export default SearchBar;

