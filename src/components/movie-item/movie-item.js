import './movie-item.css';

import React, { Component } from 'react';

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie">
        <a href={this.props.data.link}>{this.props.data.name}</a>
        <p>{this.props.data.description}</p>
      </div>
    )
  }
}

export default MovieItem;
